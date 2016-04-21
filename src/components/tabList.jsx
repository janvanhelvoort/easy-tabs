var React = require('react');
var classNames = require('classnames');

var TabList = React.createClass({
    displayName: 'TabList',
    contextTypes: {
        currentTabIndex: React.PropTypes.number.isRequired,
        setSelected: React.PropTypes.func.isRequired
    },    
    propTypes: {
        className: React.PropTypes.string,
        children: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.object
        ])
    },

    onClick: function(index) {
        this.context.setSelected(index + 1);
    },
  
    render: function() {
        return (
            <ul className={ classNames( this.props.className) } {...this.props}>
                { React.Children.map(this.props.children, (child, index) => {
                    return React.cloneElement(child, { id: index, selected: index === this.context.currentTabIndex, handleClick: this.onClick });
                    }, this)                    
                }
            </ul>
        );
    }
});

module.exports = TabList;