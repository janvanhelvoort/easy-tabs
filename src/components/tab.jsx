import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Tab extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        event.preventDefault();
        this.props.handleClick(this.props.id);
    }

    render() {
        return (
            <li className={classNames(this.props.className, { [this.context.activeClassName]: this.props.selected })} onClick={this.onClick}>
                {this.props.children}
            </li>
        );
    }
}

Tab.contextTypes = {
    activeClassName: PropTypes.string.isRequired
}

Tab.propTypes = {
    className: PropTypes.string,
    id: PropTypes.number,
    selected: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.string
    ])
}

Tab.defaultProps = {
    selected: false,
    id: null
}