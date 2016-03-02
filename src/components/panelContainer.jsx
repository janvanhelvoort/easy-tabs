var React = require('react');
var classNames = require('classnames');

module.exports = PanelContainer = React.createClass({
    displayName: "PanelContainer",
    contextTypes: {
        currentTabIndex: React.PropTypes.number.isRequired,
    },
    propTypes: {
        className: React.PropTypes.string,
        children: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.object
        ])
    },

    render: function(){              
        return (
            <div className={classNames( this.props.className)} {...this.props}> 
                 { React.Children.map(this.props.children, (child, index) => {           
                    return React.cloneElement(child, { id: index, selected: index === this.context.currentTabIndex });
                }, this) }
            </div>
         );
    }
});