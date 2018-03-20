import React from 'react';
import styles from './index.less';
import Header from './Header';
import Sider from './Sider';
import Tabs from './Tabs';
import withRouter from 'umi/withRouter';

import {Layout, Menu, Breadcrumb, Icon} from 'antd';

const {Content, Footer} = Layout;
const SubMenu = Menu.SubMenu;

function Layouts({children, location}) {
  return (
    <Layout className={styles.normal}>
      <Header location={location}/>
      <Layout className={styles.content}>
        <Sider/>
        <Layout>
          <Tabs></Tabs>
          <Content style={{margin: '0 16px'}}>
            <div style={{padding: 24, background: '#fff', minHeight: 360}}>
              {children}
            </div>
          </Content>
          <Footer className={styles.footer}>
            技术支持
          </Footer>
        </Layout>
      </Layout>

    </Layout>
  );
}

export default withRouter(Layouts);
