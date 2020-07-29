import React from 'react';
import { Menu } from 'antd';


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="Home">
        <a href="/home">Home</a>
      </Menu.Item>
      <Menu.Item key="AddClient">
        <a href="/client">Add Client</a>
      </Menu.Item>
      <Menu.Item key="AddHairCut">
        <a href="/haircut">Add HairCut</a>
      </Menu.Item>
    </Menu>
  )
}

export default LeftMenu