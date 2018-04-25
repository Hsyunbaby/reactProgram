import React, { Component } from 'react';
import '../assets/css/headNav.css';
import { NavLink } from 'react-router-dom';

class HeadNav extends Component {
	// constructor(props){
	// 	super(props);
	// }
  render() {
    return (
			<header className="topHd">
			<a href="javascript:window.history.go(-1)" className="back">返回</a>
			<NavLink to="/home" className="home">首页</NavLink>			
			{/* <a href="index.html" className="home">首页</a> */}
			<span>{this.props.value}</span>
			</header>
    );
  }
}

export default HeadNav;
