var React = require('react');
var classNames = require('classnames');

module.exports = Tab = React.createClass({
    displayName: 'Tab',
    contextTypes: {
        activeClassName: React.PropTypes.string.isRequired
    }, 
    propTypes: {
        className: React.PropTypes.string,
        id: React.PropTypes.number.isRequired,
        selected: React.PropTypes.bool,   
        children: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.object,
            React.PropTypes.string
        ])
    },

    getDefaultProps() {
        return { selected: false };
    },

    onClick: function(event) {
        event.preventDefault();      
        this.props.handleClick(this.props.id);
    },

    render() {
        return (
            <li className={classNames(this.props.className, { [this.context.activeClassName]: this.props.selected })}  onClick={this.onClick}>                
                { this.props.children }                
            </li>                                  
        );
    }
});