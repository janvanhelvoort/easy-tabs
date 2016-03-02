var React = require('react');
var classNames = require('classnames');

module.exports = Tabs = React.createClass({
    displayName: "Tabs",
    getInitialState: function () {        
        return {
            currentTab: this.props.currentTab - 1 || 0
        };
    },
    propTypes: {
        currentTab: React.PropTypes.number,
        className: React.PropTypes.string,
        activeClassName: React.PropTypes.string,
        children: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.object
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
    componentDidMount: function() {                
        this.isValid();
    },

    isValid: function() {
        if(React.Children.count(this.props.children) === 2){
            if(React.Children.count(this.props.children[0].props.children) === React.Children.count(this.props.children[1].props.children)){
                if(this.props.currentTab > React.Children.count(this.props.children[0].props.children)){
                    this.setState({ currentTab: 0 });
                }
            } else {
                throw new Error("There should be an equal number of <Tab/> and <Panel/> components.")
            }
        } else {
            throw new Error("There should be exactly one of each <TabList/> and <PanelContainer/> component.");
        }                                    
    },
    setSelected: function(index) {
        this.setState({ currentTab: index });
    },

    render: function(){       
        return (
            <div className={classNames(this.props.className)} {...this.props}> 
                {this.props.children}
            </div>           
         );
    }
});