import React, { Component } from 'react';
import '../assets/css/goods.css';
import HeadNav from './HeadNav';
import FootNav from './Footnav';

class Goods extends Component {
  render() {
    return (
     <div className='App'>
        <HeadNav value="忘仙"></HeadNav>
		<section className="mContent">
		<article className="cttBg">
			<ul className="form">
				<li>
				<i className="ico icoJi">寄</i>
				<span className="blue">7300银两=100元 即买即发</span></li>
				<li>游戏名称：忘仙</li>
				<li>游戏区服：三区/万剑逍遥</li>
				<li>游戏类型：游戏币</li>
				<li>单件数量：7300银两</li>
				<li>商品单价：0.0136986301369863元/银两</li>
				<li>商品库存：1&nbsp;件 </li>
				<li><span className="ftBig orange">¥100</span>
				<a href="javascript:window.history.go(-1);" className="aBlue right">返回列表页</a></li>
			</ul>
		</article>
		<ul className="form pusht">
			<li><input type="button" className="btn" value="立即购买" /></li>
		</ul>
	</section>
     <FootNav></FootNav>
     </div>
    );
  }
}

export default Goods;
