import React, { Component, PropTypes } from 'react';
import LogDisplay from './LogDisplay';
import Button from './Button';
import timeFormat from '../utils/timeFormat';
export default class TimeDisplay extends Component {

    static propTypes = {
        time: PropTypes.number.required
    }

    state = {
        time: 0,
        on: false,
        log: [],
        quote: Math.floor(Math.random() * 5 + 1)
    };

    timer = '';

    logTime(newTime) {
        // this.state.log.push(this.state.time);
        // this.setState({
        // 	log: this.state.log
        // });
        this.setState({
        	log: [this.state.time, ...this.state.log]
        })
    }

    clearTime() {
        this.setState({
            log: [],
            quote: Math.floor(Math.random() * 5 + 1)
        })
    }

    toggleOn() {
        if (this.state.on) {
            clearInterval(this.timer);
        } else {
            this.timer = setInterval(() => {
                this.setState({ time: this.state.time + 1 })
            }, 10);
        }
        this.setState({
            on: !this.state.on
        })
    }

    resetTime() {
        this.setState({
            time: 0,
            quote: Math.floor(Math.random() * 5 + 1)
        })
    }

    renderControls(){
    	return <div>
        	   		<Button onClick={ this.toggleOn.bind(this) } className={ this.state.on ? 'danger' : 'success' } text={ this.state.on ? 'STOP' : 'START' } />
        	   		<Button onClick={ this.resetTime.bind(this) } className="warning" text="RESET" />
        	   		<Button onClick={ this.logTime.bind(this) } className="primary" text="LOG TIME" />
        	   		<Button onClick={ this.clearTime.bind(this) } text="CLEAR LOG" />
        	   </div>
    }

    render() {
		const controls = this.renderControls(),
		time = timeFormat(this.state.time);
        return <div>
			<div>
				<h1 className="display-time">{ time }</h1>
				{ controls }
			</div>
			<LogDisplay log={ this.state.log } quote={ this.state.quote } />
        </div>
    }

}
