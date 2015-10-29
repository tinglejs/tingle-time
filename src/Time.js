/**
 * Time Component for tingle
 * @author shane.wuq
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
var classnames = require('classnames');

class Time extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            before: props.before,
            format: props.format,
            displayTime: ''
        }
    }

    componentDidMount() {
        const t = this;
        t._formatFn(t.state.before);
    }

    _formatFn(isBefore) {
        const t = this;
        const s = 1000;
        const m = s*60;
        const h = m*60;
        const d = h*24;
        const mm = d*30;

        let displayTime;
        let format = t.props.format.toLocaleUpperCase();
        let time = new Date(parseInt(this.props.stamp, 10));

        // 年,月,日,时,分,秒
        let [year, month, day, hour, minute, second] = [
            time.getFullYear(),
            time.getMonth() + 1,
            time.getDate(),
            time.getHours(),
            time.getMinutes(),
            time.getSeconds()
        ];

        // 年月日分隔符
        let yc = '-';
        let mc = '-';
        let dc = '-';

        if(isBefore) {
            /**
             * 1天前
             * 1小时前
             * 1分钟前
             */
            // 当前时间
            let nowTime = (new Date()).valueOf();

            // 与当前时间差
            let rangeTime = nowTime - this.props.stamp;

            let arr = new Map([
                ['分钟', m],
                ['小时', h],
                ['天', d],
                ['个月', mm]
            ]);

            arr.forEach((value, key) => {
                // FIXME: 中午12:00相对于昨天23:00，也回走'1小时前’的逻辑,因为一天(24小时)没到；
                rangeTime/value >= 1 ? displayTime = `1${key}前` : '';
            });
        } else {
            /**
             * 默认格式:YYYY—MM-DD
             * 支持格式如下:
             * YYYY/MM/DD; YYYY年MM月DD日; YYYY-MM-DD hh:mm:ss
             * 支持简写 eg: YY-M-D 15-1-9
             */
            if (/(Y+)/.test(format)) {
                let reg$ = RegExp.$1.length;
                if (reg$ === 2) {
                year = String(year).slice(2, 4);
            }
            yc = format.substr(reg$, 1);
            }
            if (/(M+)/.test(format)) {
                let reg$ = RegExp.$1.length;
                if (reg$ === 2 && month < 10) month = '0' + month;
                mc = format.substr(format.indexOf('M') + reg$, 1);
            }
            if (/(D+)/.test(format)) {
                let reg$ = RegExp.$1.length;
                if (reg$ === 2 && day < 10) day = '0' + day;
                dc = format.substr(format.indexOf('D') + reg$, 1);
            }

            displayTime = `${year}${yc}${month}${mc}${day}${dc}`;

            if (format.indexOf('HH:MM:SS') > -1) {
                minute = minute < 10 ? '0' + minute : minute;
                second = second < 10 ? '0' + second : second;
                displayTime +=` ${hour}:${minute}:${second}`;
            }
        }

        t.setState({
            displayTime: displayTime
        });
    }

    handleClick() {
        const t = this;

        t._formatFn(!t.state.before);
        t.setState({
            before: !t.state.before
        });
    }

    handleMouseOver() {}

    handleMouseOut() {}

    render() {
        const t = this;
        return (
            <div ref="root" className={classnames('tTime', {
                [t.props.className]: !!t.props.className
            })} onClick={t.handleClick.bind(t)}>{t.state.displayTime}</div>
        );
    }
}

Time.defaultProps = {
    before: false,
    format: 'YYYY-MM-DD'
}

Time.propTypes = {
    before: React.PropTypes.boolean,
    format: React.PropTypes.string
}

Time.displayName = 'Time';

module.exports = Time;
