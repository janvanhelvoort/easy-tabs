var React = require('react');
var classNames = require('classnames');

module.exports = Tabs = React.createClass({
    displayName: "Tabs",
    getInitialState: function () {        
        return {
            currentTabIndex: this.props.defaultTab - 1 || 0
        };
    },
    propTypes: {
        defaultTab: React.PropTypes.number,
        className: React.PropTypes.string,
        activeClassName: React.PropTypes.string,
        children: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.object
        ]),
        onSelect: React.PropTypes.func
    },
    childContextTypes: {
        activeClassName: React.PropTypes.string,
        currentTabIndex: React.PropTypes.number.isRequired,
        setSelected: React.PropTypes.func.isRequired
    },
    getChildContext: function() {
        return { activeClassName: this.props.activeClassName || "is-active", currentTabIndex: this.state.currentTabIndex, setSelected: this.setSelected };
    },
    componentDidMount: function() {                
        this.isValid();
    },

    isValid: function() {
        if(React.Children.count(this.props.children) === 2){
            if(React.Children.count(this.props.children[0].props.children) === React.Children.count(this.props.children[1].props.children)){
                if(this.isValidTabNumber(this.props.defaultTab)){
                    this.setState({ currentTabIndex: 0 });
                }
            } else {
                throw new Error("There should be an equal number of <Tab/> and <Panel/> components.")
            }
        } else {
            throw new Error("There should be exactly one of each <TabList/> and <PanelContainer/> component.");
        }                                    
    },
    isValidTabNumber: function(tabNumber) {
        return (tabNumber > 0 && tabNumber <= React.Children.count(this.props.children[0].props.children));
    }, 
    setSelected: function(tabNumber) {
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
    },
    getSelected: function() {
        return this.state.currentTabIndex + 1;
    },

    render: function(){       
        return (
            <div className={classNames(this.props.className)} {...this.props}> 
                {this.props.children}
            </div>           
         );
    }
});