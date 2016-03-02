var React = require('react');
var classNames = require('classnames');

module.exports = Panel = React.createClass({
    displayName: "Panel",
    contextTypes: {
        activeClassName: React.PropTypes.string.isRequired
    }, 
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
            <div className={ classNames( this.props.className, { [this.context.activeClassName]: this.props.selected })}>
             { this.props.children }
            </div>           
         );
    }
});