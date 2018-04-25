import React, { Component } from 'react';
import '../assets/css/buy.css';
import HeadNav from './HeadNav';
import FootNav from './Footnav';
import Loading from './Loading';
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
// import queryString from "query-string";
import {UPDATE_LOADING} from '../store/types'
import asyncAction from '../store/asyncAction'

class Buy extends Component {
	constructor(props){
		super(props)
		let url=`/data/buy.json`;
		   props.get(url);//获取home数据s
		   console.log(asyncAction);
	}
	
  render() {
		let {buyDate,updateLoading}=this.props;
		console.log(buyDate)
    return (
     <div className='App'>
		{updateLoading&&<Loading></Loading>}
        <HeadNav value="忘仙"></HeadNav>
			<section className="mContent">	
			<hgroup className="goSelect"><div id="groupserver">
			所有区 
			/所有服 
			/所有类型
			</div><a id="goodselect">筛选</a></hgroup>
			<div className="sorted clearfix">
				<ul className="tlist">
					<li sort="price">价格从低到高<i id="priceasc" className="asc ascGray"></i></li>
					<li sort="price">价格从高到低<i id="pricedesc" className="desc descGray"></i></li>
				</ul>
			</div>	
			<ul className="proList clearfix" id="dataUl">
				{
					buyDate.map((item,index)=>{
						return <li key={item.id}>
						<NavLink to="/goods" ><p className="tt"><i className="ico icoJi">寄</i>{item.rule}</p></NavLink>
						<p>
							<NavLink to="/goods" ><ins className="sbtn right">购买</ins></NavLink>
							<NavLink to="/goods" ><span className="price">¥{item.price}</span><br/>{item.detail}</NavLink>
						</p>
					</li>
					})
				}
					
			<div id="dataappend"></div>
			</ul>		
				<div className="moreList" id="goodsload">+点击加载后20条+</div>	
		</section>
			<FootNav></FootNav>
			</div>
		);	
	}
	componentWillMount(){
		this.props.clear()
	}
}


const stateProps = state => ({
	buyDate:state.buyDate,
	updateLoading:state.updateLoading
});
const dispatchProps = dispatch => ({
  get:(url)=>{dispatch(asyncAction.asyncAction(dispatch,url,'UPDATE_BUYDATE'))},
  clear:()=>{dispatch({type:'CLEAR_BUYDATE'})}
});

export default connect(
  stateProps,
  dispatchProps
)(Buy);
