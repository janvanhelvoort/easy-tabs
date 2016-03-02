var React = require('react');
var classNames = require('classnames');

module.exports = Tabs = React.createClass({
    displayName: "Tabs",
    getInitialState: function () {        
        return {
            currentTab: this.props.currentTab || 0
        };
    },
    propTypes: {
        currentTab: React.PropTypes.number,
        className: React.PropTypes.string,
        activeClassName: React.PropTypes.string,
        children: React.PropTypes.oneOfType([
            React.PropTypes.object,
            React.PropTypes.array
        ])
    },
    childContextTypes: {
        activeClassName: React.PropTypes.string,
        currentTab: React.PropTypes.number.isRequired,
        setSelected: React.PropTypes.func.isRequired
    },
    getChildContext: function() {
        return { activeClassName: this.props.activeClassName || "is-active", currentTab: this.state.currentTab, setSelected: this.setSelected };
    },
    },

    setSelected: function(index) {
        this.setState({ currentTab: index });
    },

    render: function(){       
        return (
            <div className={classNames(this.props.className)}> 
                {this.props.children}
            </div>           
         );
    }
});