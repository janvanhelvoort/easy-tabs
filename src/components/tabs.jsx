import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Tabs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentTabIndex: this.props.defaultTab - 1 || 0
        }

        this.setSelected = this.setSelected.bind(this);
    }

    getChildContext() {
        return {
            activeClassName: this.props.activeClassName || "is-active",
            currentTabIndex: this.state.currentTabIndex,
            setSelected: this.setSelected
        };
    }

    componentDidMount() {
        this.isValid();
    }

    isValid() {
        if (React.Children.count(this.props.children) === 2) {
            if (React.Children.count(this.props.children[0].props.children) === React.Children.count(this.props.children[1].props.children)) {
                if (!this.isValidTabNumber(this.props.defaultTab)) {
                    this.setState({ currentTabIndex: 0 });
                }
            } else {
                throw new Error("There should be an equal number of <Tab/> and <Panel/> components.")
            }
        } else {
            throw new Error("There should be exactly one of each <TabList/> and <PanelContainer/> component.");
        }
    }

    isValidTabNumber(tabNumber) {
        return (tabNumber > 0 && tabNumber <= React.Children.count(this.props.children[0].props.children));
    }

    setSelected(tabNumber) {
        if (!this.isValidTabNumber(tabNumber)) {
            throw new Error("Tried to selected a non-existing tab.");
        }

        var newTabIndex = tabNumber - 1;
        if (newTabIndex != this.state.currentTabIndex) {
            var abort = false;
            if (typeof this.props.onSelect !== 'undefined') {
                abort = this.props.onSelect(tabNumber) === false;
            }
            if (!abort) {
                this.setState({ currentTabIndex: newTabIndex });
            }
        }
    }

    getSelected() {
        return this.state.currentTabIndex + 1;
    }

    render() {
        const { defaultTab, activeClassName, ...props } = this.props

        return (
            <div className={classNames(props.className)} {...props}>
                {this.props.children}
            </div>
        );
    }
}

Tabs.childContextTypes = {
    activeClassName: PropTypes.string,
    currentTabIndex: PropTypes.number.isRequired,
    setSelected: PropTypes.func.isRequired
};

Tabs.propTypes = {
    defaultTab: PropTypes.number,
    className: PropTypes.string,
    activeClassName: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    onSelect: PropTypes.func
}