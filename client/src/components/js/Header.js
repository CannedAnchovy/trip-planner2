import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'
import { Icon } from 'semantic-ui-react';

const Header = (props) => {
  const imgUrl = require("../img/logo.png");
  return (
    <div className="Header">
      <img
        className="logo"
        src={imgUrl}
        alt="logo"
      />
      <Link to="user" className="userButton">
        <Icon name="home"/>
      </Link>
      <Link to="aboutUs" className="headerButton">
        <div>關於我們</div>
      </Link>
      <Link to="newJourney" className="headerButton">
        <div>新的旅程</div>
      </Link>
      <Link to="search" className="headerButton"> 
        <div >搜尋</div>
      </Link>
      
      
      
    </div>
    );
};

export default Header;