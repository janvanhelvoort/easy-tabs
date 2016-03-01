var React = require('react');
var classNames = require('classnames');

module.exports = Panel = React.createClass({
    displayName: "Panel",
    propTypes: {
        className: React.PropTypes.string,
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
  
    render: function(){       
        return (
            <div className={ classNames( this.props.className, { 'is-active': this.props.selected })}>
             { this.props.children }
            </div>           
         );
    }
});