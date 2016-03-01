var React = require('react');
var classNames = require('classnames');

module.exports = TabList = React.createClass({
    displayName: 'TabList',
    contextTypes: {
        currentTab: React.PropTypes.number.isRequired,
        setSelected: React.PropTypes.func.isRequired
    },    
    propTypes: {
        className: React.PropTypes.string,
        children: React.PropTypes.oneOfType([
            React.PropTypes.object,
            React.PropTypes.array
        ])
    },

    onClick: function(index) {
        this.context.setSelected(index);
    },
  
    render() {
        return (
            <ul className={ classNames( this.props.className) }>
                { React.Children.map(this.props.children, (child, index) => {
                    return React.cloneElement(child, { id: index, selected: index === this.context.currentTab, handleClick: this.onClick });
                    }, this)                    
                }
            </ul>
        );
    }
});