# easy-tabs
Easy react tab component.

#### Note
This component has no default styling, all classNames are optional. Default styling can be downloaded from [main.css](example/main.css)

## Installing

```bash
$ npm install easy-tabs
```

## Example

```js

var React = require('react');
var EasyTabs = require('easy-tabs');
var Tabs = EasyTabs.Tabs;
var TabList = EasyTabs.TabList;
var Tab = EasyTabs.Tab;
var PanelContainer = EasyTabs.PanelContainer;
var Panel = EasyTabs.Panel;

<Tabs className="tabs" defaultTab={1} activeClassName="is-active">
    <TabList className="tabs__list">
        <Tab className="tabs__item">tab 0.1</Tab>
        <Tab className="tabs__item">tab 0.2</Tab>
        <Tab className="tabs__item">tab 0.3</Tab>
    </TabList>
    <PanelContainer className="tabs__container">
        <Panel className="tabs__content">
            <p>Hello World from tab 0.1</p>
        </Panel>
        <Panel className="tabs__content">
            <p>Hello World from tab 0.2</p>
        </Panel>
        <Panel className="tabs__content">
            <p>Hello World from tab 0.3</p>
        </Panel>
    </PanelContainer>
</Tabs> 

```
## License

MIT
