import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import React from 'react';
const {Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;


class LayoutSider extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({collapsed});
  }

  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo"/>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <SubMenu
            key="sub1"
            title={<span><Icon type="user"/><span>案件受理</span></span>}
          >
            <Menu.Item key="3">待办列表</Menu.Item>
            <Menu.Item key="4">移交件</Menu.Item>
            <Menu.Item key="5">延期审核</Menu.Item>
            <Menu.Item key="6">案件标签</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={<span><Icon type="team"/><span>预受理</span></span>}
          >
            <Menu.Item key="7">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default LayoutSider;







