import React from 'react'
import moment from 'moment'
import ReactDOM from 'react-dom'
import SingleTable from './single-table'
import HeatmapEmitter from './EventEmitter'
// import ReactDOM from 'react-dom'

require('./style.scss');

// default date format
const DATE_FORMAT = 'D-M-YYYY';


class Heatmap extends React.Component {

    constructor(props) {
        super(props)

        // es6 componentWillMount
        this.allMonths = this.getDates(props.start, props.end)
    }

    state = {
        showNavButtons: false
    }

    static propTypes = {
        start: React.PropTypes.string.isRequired,
        end: React.PropTypes.string.isRequired,
        showDays: React.PropTypes.bool,
        gorizontalView: React.PropTypes.bool,
        size: React.PropTypes.number,
        margin: React.PropTypes.number,
        data: React.PropTypes.object,
        legend: React.PropTypes.bool,
        legendSettings: React.PropTypes.array
    }

    static defaultProps = {
        showDays: false,  // show count of days

        gorizontalView: true, // gorizontal or vertical

        size: 20, // width and height one row in pixels

        margin:2, // margin without days

        data: {}, //

        legend: true, // show legend

        legendSettings: [
            {
                color: '#f5d3d2',
                min: 0,
                max: 10
            },
            {
                color: '#de9290',
                min: 10,
                max: 25
            },
            {
                color: '#ca4b47',
                min: 25,
                max: 50
            },
            {
                color: '#b31a1a',
                min: 50,
                max: 75
            },
            {
                color: '#4e0000',
                min: 75,
                max: 100
            }

        ]//
    }

    componentWillUnmount() {
        // remove all emitters
        HeatmapEmitter.removeListener('changeMainData');

        // from each months data listener
        this.allMonths.map((i) => {
            HeatmapEmitter.removeListener(`EmitHeatmapTable-${i.year}-${i.month}`);
        })
    }

    /**
     * uses to get difference with dates
     *
     * return(Array) - [YYYY, M, D]
     */
    convertDateToArray(date) {
        let str = moment(date, DATE_FORMAT).format('YYYY M D');

        return str.split(' ');
    }

    /**
     *
     * @param start(Array) -
     * @param end(Array) -
     *
     * @return (Number) -
     */
    getDiffMonths(start, end) {
        let startDate = this.convertDateToArray(start),
            endDate = this.convertDateToArray(end);

        return moment(endDate).diff(moment(startDate), 'days');
    }

    /**
     * collect all months in calendar from start to end
     *
     * @param start(String) -
     * @param end(String) -
     *
     * @return(Array) -
     */
    getDates(start, end) {
        let result = [];

        // get monts from props
        while (this.getDiffMonths(start, end) > 0) {
            result.push({
                year: moment(start, DATE_FORMAT).format('YYYY'),
                month: moment(start, DATE_FORMAT).format('M')
            });

            // add 1 month
            start = moment(start, DATE_FORMAT).add(1, 'months').format(DATE_FORMAT);
        }

        return result;
    }

    /**
     *
     */
    getScrollWidth() {
        let i = 0,
            width = 0;

        while(ReactDOM.findDOMNode(this.refs[`table${i}`])) {
            let domEl = ReactDOM.findDOMNode(this.refs[`table${i}`]);
            width += domEl.offsetWidth;

            i++;
        }

        return width;
    }

    scrollItems(direction) {
        let pos = this.refs['scrollOuter'].scrollLeft;

        if(direction === 'prev') {
            this.refs['scrollOuter'].scrollLeft = pos - 30;

        } else if(direction === 'next') {
            this.refs['scrollOuter'].scrollLeft = pos + 30;
        }
    }

    getDayColor(num) {
        let legend = this.props.legendSettings,
            length = legend.length,
            maxColor = legend[legend.length-1]['color'],
            color

        // find color from legend
        for(let i = 0; i < length; i++) {
            if(legend[i]['min'] < num && num < legend[i]['max']) {
                color =  legend[i]['color']

            }
        }

        return color !== undefined ? color : maxColor
    }

    sendDataToTable(year, month, allData) {
        let data = allData[year][month],
            _t = this

        // if no data - break
        if(data === undefined) return false

        // new data with day color
        let extendData = {};

        for(let key in data) {
            extendData[key] = {
                count: data[key],
                color: _t.getDayColor(data[key])
            }
        }

        // send data to table component 'SingleTable'
        HeatmapEmitter.emit(`EmitHeatmapTable-${year}-${month}`, extendData);
    }


    // after render
    componentDidMount() {
        let scrollWidth = this.getScrollWidth();

        this.refs['scrollInner'].setAttribute('style', `width: ${scrollWidth}px`);

        // will send data from tables
        HeatmapEmitter.on('changeMainData', (data)=> {
            if (this.allMonths.length > 0) {
                // each months
                this.allMonths.map((i) => {
                    this.sendDataToTable(i.year, i.month, data);
                })
            }

        });

        // change diagram data from props to state
        HeatmapEmitter.emit('changeMainData', this.props.data);
    }


    render() {
        let p = this.props

        let calendarTemplate;

        if (this.allMonths.length > 0) {
            calendarTemplate = this.allMonths.map((item, index) => {
                let y = item.year,
                    m = item.month;
                return (
                    <SingleTable key={index}
                                 ref={'table'+index}
                                 year={y}
                                 month={m}
                                 showDays={p.showDays}
                                 gorizontalView={p.gorizontalView}
                                 size={p.size}
                                 margin={p.margin}
                    />
                )
            })

        } else {
            calendarTemplate = <p>no data for this period...</p>
        }



        let renderLegend =  this.props.legendSettings.map((item, index) => {
            let legendStyles = {
                background: item.color
            }

            return (
                <div className="heatmap__legend__item"  key={index}>
                    <span className="heatmap__legend__color" style={legendStyles}></span>
                    <span className="heatmap__legend__description">
                        {item.min} - {item.max}
                    </span>
                </div>
            )
        });



        return <div className="heatmap__list">
            <div className="heatmap__heading">
                <h3 className="heatmap__main-title">{p.start} : {p.end}</h3>

                <div className={this.state.showNavButtons ? 'heatmap__navigation-wrap' : 'hidden'}>
                    <span className="heatmap__navigation prev"
                          onClick={this.scrollItems.bind(this, 'prev')}
                    ></span>

                    <span className="heatmap__navigation next"
                          onClick={this.scrollItems.bind(this, 'next')}
                    ></span>
                </div>
            </div>

            <div className="heatmap__scrollbar-outer" ref="scrollOuter">

                <div className="heatmap__scrollbar-inner" ref="scrollInner">
                    {calendarTemplate}
                </div>

            </div>

            <div className="heatmap__legend">
                <span className="heatmap__legend__title">legend:</span>
                {renderLegend}
            </div>

        </div>;
    }
}

export { Heatmap, HeatmapEmitter };