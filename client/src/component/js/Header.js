import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react'
import '../css/Header.css'
import Common from '../../commonStyle';

const logoUrl = require("../img/logo.png");
const style = {
  menu: {
    backgroundColor: Common.green,
  },
  text: {
    color: Common.black,
  },
  dropdown: {
    margin: 0,
  }
}

const Header = () => {
  return (
    <div className="header">
      <Menu className="headerMenu" style={style.menu} attached='top' secondary>
        <Menu.Item className="headerButton" disabled as={ Link } name="Trip Planner" to="/">
            <img id="logo" src={logoUrl} alt="logo" />
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item className="headerButton" as={Link} name="user" to="/planner">
            <div className="headerButtonText" style={style.text}>搜尋</div>
          </Menu.Item>
          <Menu.Item className="headerButton"as={Link} name="newJourney" to="/newJourney">
            <div className="headerButtonText" style={style.text}>新的旅程</div>
          </Menu.Item>
          <Menu.Item className="headerButton" as={Link} name="aboutUs" to="/aboutUs">
            <div className="headerButtonText" style={style.text}>關於我們</div>
          </Menu.Item>
          <Dropdown id="userDropdown" className="headerButton" style={style.dropdown} item icon="user" direction="left">
            <Dropdown.Menu>
              <Dropdown.Item as={Link} name="personalPage" to="/personalPage">
                <div className="headerDropdownText" style={style.text}>個人頁面</div>
              </Dropdown.Item>
              <Dropdown.Item as={Link} name="settings" to="/settings">
                <div className="headerDropdownText" style={style.text}>設定</div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div className="headerDropdownText" style={style.text}>登出</div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    </div>
  );
}

export default Header;
