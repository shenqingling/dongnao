import React, { Component, PropTypes } from 'react';
export default class Button extends Component {
    static propTypes = {
        onClick: PropTypes.func,
        text: PropTypes.string,
        className: PropTypes.string,
    }

    render() {
        const { text, onClick, className } = this.props;
        return <button onClick={ onClick } className={ `button ${ className }` }>{ text }</button>
    }
}
