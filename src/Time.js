/**
 * Time Component for tingle
 * @param {stamp} String time
 * @param {post} Boolean  是否显示‘x天前’格式
 * @param {maxPostDays} String post为true时,此项才有效
 * @param {format} String
 * @author shane.wuq
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
var classnames = require('classnames');

// 定义时间常量
const s = 1000;
const m = s*60;
const h = m*60;
const d = h*24;

// 年月日分隔符
let[yc, mc, dc] = ['-', '-', '-']

//
let arr = new Map([
    ['分钟', m],
    ['小时', h],
    ['天', d]
]);

let displayTime;

class Time extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: props.post,
            maxPostDays: props.maxPostDays,
            format: props.format,
            postTime: this._formatFn(true),
            formatTime: this._formatFn(false)
        }
    }

    _formatFn(isPast) {
        const t = this;
        let format = t.props.format.toLocaleUpperCase();

        if(isPast) {
            /**
             * 1天前;1小时前;1分钟前
             */
            // 当前时间
            let nowTime = (new Date()).valueOf();

            // 传输入时间与当前时间的时间差
            let rangeTime = nowTime - this.props.stamp;

            let flag = false
            arr.forEach((value, key) => {
                let rangeRate = Math.floor(rangeTime/value);
                if (rangeRate >= 1) {

                    // FIXME: 中午12:00相对于昨天23:00，也会走'1小时前’的逻辑,因为一天(24小时)没到；
                    displayTime = `1${key}前`;

                    // TODO: 这里有没有更好办法
                    if (rangeRate >= parseInt(t.props.maxPostDays, 10) && key === '天') {
                        flag = true;
                    } else {
                        displayTime = `${rangeRate}${key}前`
                    }
                }
            });

            return flag ? t._normalFormat(format) : displayTime;

        } else {
            return t._normalFormat(format);
        }
    }

    _normalFormat(format) {
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

        return displayTime;
    }

    handleToggleFormat() {
        const t = this;

        // 传入的props.post为false; 不需要切换显示方式
        if(!t.props.post)  return false;

        t.setState({
            post: !t.state.post
        });
    }

    render() {
        const t = this;
        return (
            <div ref="root" className={classnames('tTime', {
                [t.props.className]: !!t.props.className
            })} onClick={t.handleToggleFormat.bind(t)}>
                {t.state.post ? t.state.postTime : t.state.formatTime}
            </div>
        );
    }
}

Time.defaultProps = {
    post: false,
    maxPostDays: '7',
    format: 'YYYY-MM-DD'
}

Time.propTypes = {
    post: React.PropTypes.boolean,
    maxPostDays: React.PropTypes.string,
    format: React.PropTypes.string
}

Time.displayName = 'Time';

module.exports = Time;
