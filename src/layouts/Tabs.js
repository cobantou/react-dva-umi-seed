import React from 'react';
import {Tabs} from 'antd';
import router from 'umi/router';
import {TAB_NAME} from '../utils/constants'

const TabPane = Tabs.TabPane;

class TabsPane extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    let activeKey = props.location.pathname;

    let openingPages = ["/AJSL/ToDoList", "/AJSL/ToHastenCaseList"];

    const panes = openingPages.map((v, i, a) => {
      return {
        title: TAB_NAME[v],//根据constants取得对应的title名字
        key: v
      }
    })

    this.state = {
      activeKey: activeKey,
      panes,
    };
  }

  onChange = (activeKey) => {
    this.setState({activeKey});
    router.push(activeKey);
  }
  onEdit = (targetKey, action) => {
    // this[action](targetKey);
  }
  add = () => {
    // const panes = this.state.panes;
    // const activeKey = `newTab${this.newTabIndex++}`;
    // panes.push({title: 'New Tab', content: 'Content of new Tab', key: activeKey});
    // this.setState({panes, activeKey});
  }
  remove = (targetKey) => {
    // let activeKey = this.state.activeKey;
    // let lastIndex;
    // this.state.panes.forEach((pane, i) => {
    //   if (pane.key === targetKey) {
    //     lastIndex = i - 1;
    //   }
    // });
    // const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    // if (lastIndex >= 0 && activeKey === targetKey) {
    //   activeKey = panes[lastIndex].key;
    // }
    // this.setState({panes, activeKey});
  }

  render() {
    return (
      <div>
        <Tabs
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          hideAdd={true}
          onEdit={this.onEdit}
        >

          {this.state.panes.map(pane => {
            return (
              <TabPane tab={pane.title} key={pane.key}
                       closable={pane.closable}>{this.props.location.pathname === pane.key ? this.props.children : null}</TabPane>
            )
          })}
        </Tabs>
      </div>

    );
  }
}

export default TabsPane;
