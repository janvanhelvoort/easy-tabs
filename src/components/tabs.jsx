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
        children: React.PropTypes.oneOfType([
            React.PropTypes.object,
            React.PropTypes.array
        ])
    },
    childContextTypes: {
        currentTab: React.PropTypes.number.isRequired,
        setSelected: React.PropTypes.func.isRequired
    },
    getChildContext() {
        return { currentTab: this.state.currentTab, setSelected: this.setSelected };
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