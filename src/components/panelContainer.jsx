import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class PanelContainer extends Component {
    render(){
        return (
            <div className={classNames( this.props.className)} {...this.props}> 
                 { React.Children.map(this.props.children, (child, index) => {           
                    return React.cloneElement(child, { id: index, selected: index === this.context.currentTabIndex });
                }, this) }
            </div>
         );
    }
}

PanelContainer.contextTypes = {
    currentTabIndex: PropTypes.number.isRequired
}

PanelContainer.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ])
}