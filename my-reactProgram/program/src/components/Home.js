import React, { Component } from 'react';
// import logo from './logo.svg';
import { NavLink } from 'react-router-dom';
import '../assets/css/contList.css';
import MheadNav from './MheadNav';
import FootNav from './Footnav';

class Home extends Component {
  render() {
    return (
     <div className='App'>
        <MheadNav></MheadNav>
         <div className="fill">
				<section className="mSorts clearfix">
				<ul>
					<li className="">
						<NavLink to="/trade"><img
								src="../assets/img/i01.png" alt="AppStore充值" />
						</NavLink>
						<NavLink to="/trade" className="pt"><img
								src="../assets/img/i02.png" alt="手游交易" /> </NavLink>
					</li>
					<li className="">
						<NavLink to="/trade"><img src="../assets/img/i05.png"
								alt="苹果手游直充" /> </NavLink>
					</li>
					<li>
						<NavLink to="/login"><img
								src="../assets/img/i04.png" alt="个人中心" /> </NavLink>
						<NavLink to="/trade" className="pt"><img
								src="../assets/img/i03.png" alt="网游交易" /> </NavLink>
					</li>
				</ul>
				</section>
				<section className="searchWrap clearfix">	
				<input type="text"  id="txt_search_simple" placeholder="查询您要充值的手游"   className="input"  xqkinput_index="0"/>
				<a href="" className="searchbtn"  id="hlk_search_simple">搜</a>
					
				<p className="hotwords">
					<NavLink to="/goods" title="天天酷跑" >天天酷跑</NavLink>
					<NavLink to="/buy" title="地下城与勇士">地下城与勇士</NavLink>
					<NavLink to="/buy" title="忘仙" >忘仙</NavLink>
					<a href="http://www.aspku.com/" target="">源码之家</a>
				</p>
				</section>
			</div>
     <FootNav></FootNav>
     </div>
    );
  }
}

export default Home;
