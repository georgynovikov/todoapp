import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'rc-progress';

export default class Progress extends Component {
    static propTypes = {
        percent: PropTypes.number.isRequired
    }

    render() {
        let percent = this.props.percent || 0;
        return (
            <div className="progress" >
              <Line strokeWidth="1" percent={percent} />
            </div>
        );
    }
}