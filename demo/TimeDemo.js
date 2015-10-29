/**
 * Time Component Demo for tingle
 * @author shane.wuq
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

var classnames = require('classnames');

var Time = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    //1422683666000
    //Tue Oct 27 2015 16:50:17 GMT+0800 (CST

    render() {
        return (
            <div>
                <Time stamp="1446009194366"  before={true}/>
                <Time stamp="1422683666000" format="YYYY-MM-DD"/>
                <Time stamp="1445958112957" format="YYYY-MM-DD  hh:mm:ss" />
            </div>
        );
    }
};

module.exports = Demo;
