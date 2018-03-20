import React from 'react';
import {Tabs} from 'antd';
import pageMap from '../utils/pagesMap'

const TabPane = Tabs.TabPane;

class TabsPane extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    let openingPages = ["ToDoList", "WainChangeTimeList"];
    let tab1pagename = 'ToDoList'
    let A1 = pageMap[tab1pagename]
    // const panes = [
    //   { title: 'Tab 1', content: < A1/> , key: '1' },
    //   { title: 'Tab 2', content: <p>22222</p>, key: '2' },
    //   { title: 'Tab 3', content: React.createElement('p',null,"33333"), key: '3', closable: false },
    // ];

    const panes = openingPages.map((v, i, a) => {
      let Content = pageMap[v];
      return {
        title: v,
        content: < Content/>,
        key: i,
      }
    })


    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }

  onChange = (activeKey) => {
    this.setState({activeKey});
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }
  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({title: 'New Tab', content: 'Content of new Tab', key: activeKey});
    this.setState({panes, activeKey});
  }
  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({panes, activeKey});
  }

  render() {
    return (
      <Tabs
        onChange={this.onChange}
        activeKey={this.state.activeKey}
        type="editable-card"
        onEdit={this.onEdit}
      >
        {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}
                                               closable={pane.closable}>{pane.content}</TabPane>)}
      </Tabs>
    );
  }
}

export default TabsPane;
