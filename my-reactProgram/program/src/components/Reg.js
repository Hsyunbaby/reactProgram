import React, { Component } from 'react';
// import logo from './logo.svg';
import '../assets/css/reg.css';
import HeadNav from './HeadNav';
import FootNav from './Footnav';

class Reg extends Component {
  render() {
    return (
     <div className='App'>
        <HeadNav value="会员注册"></HeadNav>
		 <form id="registerForm" method="post" action="#">
		<section className="mContent">
		<ul className="form">
			<li>
				<input type="text" className="input" placeholder="请输入你的用户名：" ref="userName" id="tel" name="user.tel"/>
			</li>
			<li>
				<input type="password" className="input"
					placeholder="密   码：（6-12位英文或数字） " id="userPassword" ref="passWord" name="user.userPassword"/>
			</li>
			<li>
				<input type="password" className="input" placeholder="确认密码：" id="userPassword_"  maxLength="20"/>
			</li>
			<li>
				<input type="text" className="input input70" placeholder="请输入手机验证码" id="validcode" size="8" maxLength="4"/>
				<ins className="action vCode" id="btnSend">
					发送验证码
				</ins>
			</li>
			<li className="btnArea">
				<input type="button" className="btn" id="hlkOK" value="注&nbsp;&nbsp;册" onClick={this.getReg.bind(this)}/>
			</li>
		</ul>
		</section>
		</form>
     <FootNav></FootNav>
     </div>
    );
  }
  getReg(){
		// let params = new URLSearchParams();
		// params.append("user",this.refs.userName.value);
		// params.append("pass",this.refs.passWord.value);
	  console.log(this.refs.userName.value);
	  fetch(`http://localhost:8000/reg?user=${this.refs.userName.value}&pass=${this.refs.passWord.value}`,{credentials:'include'}
	).then((res)=>res.json()
).then(data=>{
	console.log(data)
	if(this.refs.userName.value!==""){
		if(data==="-1"){
			alert("用户已被注册")
		}else{
			alert("注册成功")
		}
	}else{
		alert("注册信息不能为空哦~~~")
	}
		
})
  }
}

export default Reg;
