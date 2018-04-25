import React, { Component } from 'react';
import '../assets/css/gameTrade.css';
import HeadNav from './HeadNav';
import FootNav from './Footnav';
import { NavLink } from 'react-router-dom';

class Trade extends Component {
  render() {
    return (
     <div className='App'>
        <HeadNav value="手游交易"></HeadNav>
		<section className="mContent">
		<div className="tab"><a href="javascript:void(0);" className="current"><i></i>热门游戏</a><a href="javascript:void(0);">最近浏览</a></div>
		<div>
					<ul className="tlist column2 showOne pusht">
					
						<li><NavLink to="/buy" >忘仙</NavLink></li>
						<li><NavLink to="/buy" >神魔</NavLink></li>
						<li><NavLink to="/buy" >仙变</NavLink></li>
						<li><NavLink to="/buy" >时空猎人</NavLink></li>
						<li><NavLink to="/buy" >魔与道</NavLink></li>
						<li><NavLink to="/buy" >九州OL</NavLink></li>
						<li><NavLink to="/buy" >世界OL</NavLink></li>
						<li><NavLink to="/buy" >诛神OL</NavLink></li>
					</ul>
				
			

			<ul className="tlist historyList pusht">
			</ul>
		</div>
		<p className="aBlue pusht tright clearfix" id="clearfixid">
			
			<a href="toNetGameMore.action@gametype=1">更多手机游戏&gt;&gt;</a>
		</p>
	</section>
     <FootNav></FootNav>
     </div>
    );
  }
}

export default Trade;
