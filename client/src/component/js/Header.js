import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import '../css/Header.css'

const logoUrl = require("../img/logo.png");

const Header = () => {
  return (
    <div>
      <Menu id="header" attached='top' secondary>
        <Menu.Item className="headerButton" disabled as={ Link } name="Trip Planner" to="/">
            <img id="logo" src={logoUrl} alt="logo" />
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item className="headerButton" as={Link} name="user" to="/user">
            <div className="headerButtonText">搜尋</div>
          </Menu.Item>
          <Menu.Item className="headerButton"as={Link} name="newJourney" to="/newJourney">
            <div className="headerButtonText">新的旅程</div>
          </Menu.Item>
          <Menu.Item className="headerButton" as={Link} name="aboutUs" to="/aboutUs">
            <div className="headerButtonText">關於我們</div>
          </Menu.Item>
          <Dropdown className="headerButton" item icon="user" direction="left">
            <Dropdown.Menu>
              <Dropdown.Item>
                <div className="headerButtonText">個人頁面</div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div className="headerButtonText">設定</div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div className="headerButtonText">登出</div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    </div>
  );
}

/* const Header = () => {
  return (
    <div className="Header">
      <img
        className="logo"
        src={logoUrl}
        alt="logo"
      />
      <Link to="/user" className="userButton">
        <Icon name="home"/>
      </Link>
      <Link to="aboutUs" className="headerButton">
        <div>關於我們</div>
      </Link>
      <Link to="newJourney" className="headerButton">
        <div>新的旅程</div>
      </Link>
      <Link to="search" className="headerButton">
        <div>搜尋</div>
      </Link>
    </div>
  );
};*/

export default Header;
