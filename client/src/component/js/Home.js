import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import Common from '../../commonStyle';
import '../css/Home.css';

const style = {
  planButton: {
    marginTop: '4%',
    marginLeft: '43%',
    width: '170px',
    height: '45px',
    fontSize: '1.2rem',
    display: 'inline-block',
  }
}

const Home = (props) => {
  const imgUrl = require('../img/logo.png');
  return (
    <div className="home">
      <img className="homeLogo" src={imgUrl} alt="logo"/>
      <div className="statement">就算只想當一塊會呼吸的肉，也要出門走走</div>
      <div className="planButton">
        <Button as={Link} to="/planner" style={style.planButton}>開始我的旅程</Button>
      </div>
    </div>
  );
}

export default Home;
