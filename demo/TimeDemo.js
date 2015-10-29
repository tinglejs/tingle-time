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
    }

    render() {
        return (
            <div>
                <Time stamp="1446009194366"/>
                <Time stamp="1422683666000" format="YYYY-MM-DD" post={true} maxPostDays='270'/>
                <Time stamp="1445958112957" format="YYYY-MM-DD hh:mm:ss" post={true} />
            </div>
        );
    }
};

module.exports = Demo;
