import React from 'react';
import { Menu } from 'antd';
import { Link } from "react-router-dom";


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="Home">
        <Link to="/home">Home</Link>
      </Menu.Item>
      <Menu.Item key="AddClient">
        <Link to="/client">Add Client</Link>
      </Menu.Item>
      <Menu.Item key="AddHairCut">
        <Link to="/haircut">Add HairCut</Link>
      </Menu.Item>
    </Menu>
  )
}

export default LeftMenu