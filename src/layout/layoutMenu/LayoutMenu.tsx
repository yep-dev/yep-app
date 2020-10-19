import React from 'react';

import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { SubMenu, Item } = Menu;

const FixedMenu = styled(Menu)`
  width: 256px;
  height: 100vh;
  position: fixed;
  left: 0;
`;

const LayoutMenu = () => (
  <FixedMenu
    onClick={() => console.log('asd')}
    mode="inline"
    defaultOpenKeys={['machine', 'arm']}
  >
    <Menu.Item key="dashboard">Dashboard</Menu.Item>
    <SubMenu
      key="machine"
      title="Machine"
    >
      <Item key="machine1"><Link to="/machine/overview">Overview</Link></Item>
      <Item key="machine2"><Link to="/machine/thrust">Thrust</Link></Item>
      <Item key="machine3"><Link to="/machine/rotation">Rotation</Link></Item>
    </SubMenu>
    <SubMenu key="arm" title="Arm">
      <Item key="arm1">Overview</Item>
    </SubMenu>
  </FixedMenu>
);

export default LayoutMenu;
