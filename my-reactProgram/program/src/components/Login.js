import React, { Component } from 'react';
// import logo from './logo.svg';
import '../assets/css/login.css';
import HeadNav from './HeadNav';
import Loading from './Loading';
import FootNav from './Footnav';
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
import {UPDATE_USER} from '../store/types'
// import asyncAction from '../store/asyncAction'
import queryString from "query-string";
class Login extends Component {
  render() { 
	let {updateLoading}=this.props
    return (
     <div className='App'>
	 	{/* {!updateLoading&&<Loading></Loading>} */}
        <HeadNav value="会员登录"></HeadNav>
		<section className="mContent">

		<form id="loginForm" method="post">
			<input type="hidden" name="random" id="random"
				value="" />
			<input type="hidden" name="lbbrowser" id="lbbrowser"
				value="webbrowser" />
			<input type="hidden" id="macaddress" name="macaddress" value="" />
			
			<input type="hidden" name="comeback" value="" />
			{/* <s:token /> */}
			<ul className="form">
				<li>
					<input type="text" className="input" placeholder="用户名：" ref="iptUser"  id="username" name="username" />
				</li>
				<li>
					<input type="password" className="input" ref="iptPass" placeholder="密   码：" id="password" />
					<input type="hidden" className="input" id="password_" name="password" />
				</li>
				<li className="btnArea">
					<input type="button" id="hlkOK" className="btn" value="登&nbsp;&nbsp;录" onClick={this.getLogin.bind(this)} />
				</li>
				<li className="noLogin">
					<a href="#" className="right">忘记密码</a>
					<NavLink to="/reg" >用户注册</NavLink>			
					{/* <a href="reg.html">用户注册</a> */}
				</li>
			</ul>
		</form>
		</section>
     <FootNav></FootNav>
     </div>
    );
  }
  componentWillMount(){
    this.props.clear()
  }
getLogin(){
	let {userList,updateUser,updateLoading}=this.props;
	let params = new URLSearchParams();
	params.append("user",this.refs.iptUser.value);
	params.append("pass",this.refs.iptPass.value);
	fetch(`http://localhost:8000/login`,
	{
		method:"POST",headers:{"Content-type":"application/x-www-form-urlencoded"},body:params
}
).then(res=>res.json()).then(data=>{
	if(this.refs.iptUser.value!=""){
		if(data=="1"){
			alert("登陆成功")
			// this.props.history.push({url:'/user',body:params})			
			// this.props.history.push({url:"/user",body:this.refs.iptUser.value})
			// setTimeout(())
			// this.props.history.push(`/user?user=${this.refs.iptUser.value}&pass=${this.refs.iptPass.value}`)
			!userList.hasName&&fetch(`http://localhost:8000/users?user=${this.refs.iptUser.value}&pass=${this.refs.iptPass.value}}`,
				{credentials:"include"}
			).then(res=>res.json()).then(data=>{
				data.hasName=true;
				// console.log(data)
				updateUser(data)
			})
			updateLoading=true
			this.props.history.push(`/user`)

		}else{
			alert("用户名或密码错误！请重新登录！")
		}
	}
	})
	

 }
}
const mapStateToProps = state => ({
	userList:state.userList,
	// updateLoading:state.updateLoading
  });
  const mapDispatchToProps = dispatch => ({
	updateUser:(payload)=>{dispatch({type:"UPDATE_USER",payload})},
	clear:()=>{dispatch({type:'CLEAR_USER'})}
	
  });
  
  export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(Login);
// export default Login;
