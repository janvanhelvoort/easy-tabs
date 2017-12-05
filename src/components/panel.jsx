import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Panel extends Component {
    render(){
        return (
            <div className={ classNames( this.props.className, { [this.context.activeClassName]: this.props.selected })}>
                { this.props.children }
            </div>           
         );
    }
}

Panel.contextTypes = {
    activeClassName: PropTypes.string.isRequired
}

Panel.propTypes = {
    className: PropTypes.string,
    selected: PropTypes.bool,   
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.string
    ])
}

Panel.defaultProps = {
    selected: false
};