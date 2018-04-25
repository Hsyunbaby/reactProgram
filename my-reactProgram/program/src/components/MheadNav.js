import React, { Component } from 'react';
import '../assets/css/mHeadNav.css';
import { Route,NavLink } from 'react-router-dom';
import Login from './Login';
import Reg from './Reg';
class MheadNav extends Component {
  render() {
    return (
      <div className="mhead">
			<header className="mainHd">
			<nav className="mNav">
			<NavLink to="/reg">注册</NavLink>
			<NavLink to="/login">登录</NavLink>
			</nav>
			<h1>
				<a href="index.html" className="logo">7881-做最专业的游戏交易平台</a>
			</h1>
			</header>
			<section className="sliderWrap clearfix"><a href="index.html"><img src="../assets/img/s01.jpg" width="100%"/></a></section>	
	</div>
    );
  }
}

export default MheadNav;
