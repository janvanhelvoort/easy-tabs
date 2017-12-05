import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class TabList extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }
    
    onClick(index) {
        this.context.setSelected(index + 1);
    }

    render(){
        return (
            <ul className={ classNames( this.props.className) } {...this.props}>
                { React.Children.map(this.props.children, (child, index) => {
                    return React.cloneElement(child, { id: index, selected: index === this.context.currentTabIndex, handleClick: this.onClick });
                    }, this)                    
                }
            </ul>
        );
    }
}

TabList.contextTypes = {    
    currentTabIndex: PropTypes.number.isRequired,
    setSelected: PropTypes.func.isRequired
};