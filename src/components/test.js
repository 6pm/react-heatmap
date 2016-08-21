import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.scss';
import ReactDOM from 'react-dom';

var value1 = {name: 'Garry', surname: 'Potter'};

var my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четчерг, четвертого числа...',
        bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!',
        bigText: 'А евро 42!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
        bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
    }
];


class Test extends Component {

  render() {
    return (
      <div className={s.testComp}>
        <hr/>
        {/* <h1 className={s.testTitle}>React test</h1> */}
        <h3>Новости</h3>
        <News data={my_news} /> {/*добавили свойство data */}
        <hr/>
          <Add />
          <hr/>
      </div>
    );
  }
}

export default withStyles(Test, s);

var News = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired
    },

    render: function() {
        var data = this.props.data;
        var newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map(function(item, index) {
                return (
                    <div key={index}>
                        <Article data={item} />
                    </div>
                )
            })
        } else {
            newsTemplate = <p>К сожалению новостей нет</p>
        }

        return (
            <div className='news'>
                <TestInput />

                {newsTemplate}
                <strong
                    className={'news__count ' + (data.length > 0 ? '':'none') }
                >
                    Всего новостей: {data.length}
                </strong>
            </div>
        );
    }
});


// --------------------------------
var Article = React.createClass({
    propTypes: {
        data: React.PropTypes.shape({
            author: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired,
            bigText: React.PropTypes.string.isRequired
        })
    },

    readmoreClick(e) {
        e.preventDefault();

        this.setState({visible: true}, function() {
            alert('Состояние изменилось');
        });
    },

    getInitialState() {
        return {
            visible: false
        };
    },

    render() {
        var author = this.props.data.author,
            text = this.props.data.text,
            bigText = this.props.data.bigText,
            visible = this.state.visible; // считываем значение переменной из состояния компонента

        return (
            <div className='article'>
                <p className='news__author'>{author}:</p>
                <p className='news__text'>{text}</p>
                {/* для ссылки readmore: не показывай ссылку, если visible === true */}
                <a href="#"
                   onClick={ this.readmoreClick }
                   className={'news__readmore ' + (visible ? s.none : '')}
                >Подробнее</a>

                {/* для большо текста: не показывай текст, если visible === false */}
                <p className={'news__big-text ' + (visible ? '': s.none)}>{bigText}</p>
                <hr/>
            </div>
        )
    }
});


// --- добавили test input ---
// НЕКОНТРОЛЬОВАНИЙ КОМПОНЕНТ- без state
// *******************************************
var TestInput = React.createClass({

    // getInitialState() {
    //     return {
    //         myValue: ' test test new'
    //     };
    // },

    getPlaceholderValue(e) {
        alert(ReactDOM.findDOMNode(this.refs.myTestInput).value);
    },

    render: function() {
        return (
            <div>
                <input
                    className='test-input'
                    defaultValue=''
                    placeholder='введите значение'
                    ref='myTestInput'
                />
                <a href="#"
                   onClick={ this.getPlaceholderValue }
                >alert</a>
            </div>
        );
    }

});

var Add = React.createClass({
    getInitialState: function() { //устанавливаем начальное состояние (state)
        return {
            agreeNotChecked: true,
            authorIsEmpty: true,
            textIsEmpty: true
        };
    },
    componentDidMount: function() {
        ReactDOM.findDOMNode(this.refs.author).focus();
    },
    onBtnClickHandler: function(e) {
        e.preventDefault();
        var author = ReactDOM.findDOMNode(this.refs.author).value;
        var text = ReactDOM.findDOMNode(this.refs.text).value;
        alert(author + '\n' + text);
    },
    onCheckRuleClick: function(e) {
        this.setState({agreeNotChecked: !this.state.agreeNotChecked}); //устанавливаем значение в state
    },

    onFieldChange: function(fieldName, e) {
        if (e.target.value.trim().length > 0) {
            this.setState({[''+fieldName]:false})
        } else {
            this.setState({[''+fieldName]:true})
        }
    },

    render: function() {
        var agreeNotChecked = this.state.agreeNotChecked,
            authorIsEmpty = this.state.authorIsEmpty,
            textIsEmpty = this.state.textIsEmpty;
        return (
            <form className='add cf'>
                <input
                    type='text'
                    className='add__author'
                    onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
                    placeholder='Ваше имя'
                    ref='author'
                />
                <textarea
                    className='add__text'
                    onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
                    placeholder='Текст новости'
                    ref='text'
                ></textarea>
                <label className='add__checkrule'>
                    <input type='checkbox' ref='checkrule' onChange={this.onCheckRuleClick}/>Я согласен с правилами
                </label>

                <button
                    className='add__btn'
                    onClick={this.onBtnClickHandler}
                    ref='alert_button'
                    disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}
                >
                    Показать alert
                </button>
            </form>
        );
    }
});

