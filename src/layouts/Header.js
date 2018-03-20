import {Menu, Icon} from 'antd';
import Link from 'umi/link';
import styles from './Header.less';

function Header({location}) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
      className={styles.fr}
    >
      <Menu.Item>
        <Link to="/">综合业务受理系统</Link>
      </Menu.Item>
      <Menu.Item className={styles.fr}>
        <Link to="/"><Icon type="home"/>系统管理员</Link>
      </Menu.Item>
      <Menu.Item className={styles.fr}>
        <Link to="/"><Icon type="compass"/></Link>
      </Menu.Item>
      <Menu.Item className={styles.fr}>
        <Link to="/users"><Icon type="switcher"/></Link>
      </Menu.Item>
      <Menu.Item className={styles.fr}>
        <Icon type="user"/>
      </Menu.Item>
      <Menu.Item className={styles.fr}>
        <Icon type="mail"/>
      </Menu.Item>

    </Menu>
  );
}

export default Header;
