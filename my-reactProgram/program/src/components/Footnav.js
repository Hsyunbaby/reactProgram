import React, { Component } from 'react';
import '../assets/css/footNav.css';
import { NavLink } from 'react-router-dom';
class MheadNav extends Component {
  render() {
    return (
      <footer className="Mfoot">
			<p className="nav">
			<NavLink to="/login" >登录</NavLink>	<em>|</em>					
			<NavLink to="/reg" >注册</NavLink>	<em>|</em>					
				{/* <a href="login.html">登录</a><em>|</em><a href="reg.html">注册</a><em>|</em> */}
				<a
					href="javascript:window.scrollTo(0,0);">返回顶部</a>
			</p>
			<p className="cp">
				<a href="#">电脑版</a>
			</p>
			<p className="copyright">
				&copy;2014 m.7881.com
			</p>
			</footer>
    );
  }
}

export default MheadNav;
