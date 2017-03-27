import React, { Component, PropTypes } from 'react';
import timeFormat from '../utils/timeFormat';

export default class LogDisplay extends Component {

    static propTypes = {
        log: React.PropTypes.array,
        quote: PropTypes.number
    }

    renderLog() {
        return this.props.log.map((time, i) => {
            return <li className = "log-item"
            key = { i } > { timeFormat(time) } < /li>
        })
    }

    renderEmpty() {
        let quote;
        switch (this.props.quote) {
            case 1:
                quote = `Time is what we want most, but... what we user worst1`;
                break;
            case 2:
                quote = `Time is what we want most, but... what we user worst2`;
                break;
            case 3:
                quote = `Time is what we want most, but... what we user worst3`;
                break;
            case 4:
                quote = `Time is what we want most, but... what we user worst4`;
                break;
            case 5:
                quote = `Time is what we want most, but... what we user worst5`;
                break;
            default:
        }
        return <span className="empty-log"> { quote } </span>
    }

    render() {
        const log = this.props.log.length ? this.renderLog() : this.renderEmpty();
        return <ul className="log"> { log } </ul>
    }
}
