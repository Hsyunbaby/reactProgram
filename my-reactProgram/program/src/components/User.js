import React, { Component } from 'react';
import queryString from 'query-string';
import '../assets/css/user.css';
import HeadNav from './HeadNav';
import FootNav from './Footnav';
// import {connect} from "react-redux";
// import {CLEAR_USER} from '../store/types'
class User extends Component {
	constructor(props){
		super(props)
		// console.log(this.props.user)
		// console.log(this.props.userList)
		// console.log(queryString.parse(this.props.location.search))
	}
  render() {
	//   let {userList}=this.props;
	//   console.log(userList)
    return (	
     <div className='App'>
        <HeadNav value="个人中心"></HeadNav>
		<div className='user'>
		<div className="content">
		<div className="header">
		<h2><img src="../assets/img/headimg.png" alt=""/></h2>
		<div className="user-box">
			<a>{this.props.user[0].user}</a>
			<a href="javascript:;" onClick={this.getDel.bind(this)}>注销</a>

		</div>
		<ul id="clear">
			<li>
			<span><b>关 注 ： </b>{this.props.user[0].follow}</span>
			</li>
			<li>
			<span><b>粉 丝 ： </b>{this.props.user[0].fans}</span>
			</li>
		</ul>
	</div>
		</div>
		<div className="docList">
		<ul>
			<li className="gk-text">
			<i></i>
			<p>买到的宝贝</p>
			<b></b>
			<span>0</span>
			</li>
			<li className="mm-text">
			<i></i>
			<p>购物车</p>
			<b></b>
			<span>0</span>
			</li>
			<li className="cg-text">
			<i></i>
			<p>草稿箱</p>
			<b></b>
			<span>0</span>
			</li>
			<li className="sc-text">
			<i></i>
			<p>收藏夹</p>
			<b></b>
			<span>0</span>
			</li>
			<li className="my_cz">
			<i></i>
			<p>设置</p>
			</li>
		</ul>
		</div>
  </div>
     <FootNav></FootNav>
     </div>
    );
  }
//   componentDidMount(){
// 	  this.props.clear();
//   }
getDel(){
	let params = new URLSearchParams();
	params.append("user",queryString.parse(this.props.location.search).user);
	fetch("http://localhost:8000/del",{method:"POST",headers:{"Content-type":"application/x-www-form-urlencoded"},
	body:params}).then(res=>res.json()).then(data=>{
		if(data=="1"){
			this.props.history.push("/home")
		}
	})
}
}
// const mapStateToProps = state => ({
// 	userList:state.userList,
//   });
//   const mapDispatchToProps = dispatch => ({
// 	// updateUser:(payload)=>{dispatch({type:"UPDATE_USER",payload})},
// 	clear:()=>{dispatch({type:"CLEAR_USER"})},	
//   });
  
//   export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
//   )(User);
export default User;
