import React, { Component } from 'react'
import moment from 'moment'
import HeatmapEmitter from './EventEmitter'


export default  class SingleTable extends Component {

    state = {
        data: false
    }

    componentDidMount() {
        let p = this.props

        HeatmapEmitter.on(`EmitHeatmapTable-${p.year}-${p.month}`, (newData)=> {
            this.setState({
                data: newData
            })
        });
    }



    /**
     * get name of month from year and day
     *
     * @param month(Number)
     * @return title(String)
     **/
    getTitle(year, month) {
        return moment(`${year} ${month}`, 'YYYY M').format('MMMM');
    }

    /**
     *
     */
    getDaysInMonth(showDays, year, month, daySizes) {
        let allDays = moment(`${year} ${month}`, 'YYYY M').daysInMonth(),
            items = []


        for (var i = 1; i <= allDays; i++) {
            let reference = `ref-${year}-${month}-${i}`,
                hasColor = this.state.data[i],
                color = false

            if(hasColor !== undefined) {
                // union objects
                color = {...daySizes, ...{
                    'backgroundColor': hasColor['color']
                } }
            }


            let day = <span className="heatmap__day"
                            key={i}
                            ref={reference}
                            style={color ? color : daySizes}
                      >
                            {showDays ? i : ''}
                      </span>;

            items.push(day);
        }

        return items;
    }

    getDaySize(size, margin) {
        return {
            width: size + 'px',
            minHeight: size + 'px',
            lineHeight: size + 'px',
            margin: margin + 'px'

        }
    }

    /**
     *
     */
    getIndentDays(year, month, itemSizes) {
        let indentDays = [],
            firstDay = moment(`${year} ${month} 1`, 'YYYY M D').format('d');

        for (var i = 1; i < firstDay; i++) {
            indentDays.push(<span className="heatmap__day is-hidden" style={itemSizes} key={i}></span>);
        }

        return indentDays;
    }

    setTableWidth(size, margin, gorizontalView, items) {
        const WEEK_DAYS = 7;
        let item = 2*margin + size,
            weeks = Math.ceil(items / WEEK_DAYS);

        if(gorizontalView) {
            return {
                width: item * WEEK_DAYS + 'px'
            }

        } else {
            return {
                width: item * weeks + 'px',
                height: item * WEEK_DAYS + 'px'
            }
        }
    }

    render() {
        let p = this.props,
            title = this.getTitle(p.year, p.month);

        // get styles for 1 day
        let itemSizes = this.getDaySize(p.size, p.margin);

        // create days from this month
        let days = this.getDaysInMonth(p.showDays, p.year, p.month, itemSizes);
        // create indent days
        let indentDays = this.getIndentDays(p.year, p.month, itemSizes);

        let items = days.length + indentDays.length;
        let tableSizes = this.setTableWidth(p.size, p.margin, p.gorizontalView, items),
            orientation = p.gorizontalView ? 'is-gorizontal' : 'is-vertical';

        let calendarClasses = `heatmap__item ${orientation}`;


        return <div className={calendarClasses}>
            <h4 className="heatmap__caption">{title}</h4>

            <div className="heatmap__days-wrap" style={tableSizes}>
                {indentDays}
                {days}
            </div>

        </div>
    }
}