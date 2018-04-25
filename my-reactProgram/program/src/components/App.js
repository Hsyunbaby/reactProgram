import React, { Component } from 'react';
import { NavLink,Route,Redirect,Switch } from 'react-router-dom';
// import '../assets/css/user.css';
// import Buy from './Buy';
// import Goods from './Goods';
import Home from './Home';
import Loading from './Loading';
import {connect} from 'react-redux';
import Loadable from 'react-loadable';
// import Login from './Login';
// import Reg from './Reg';
// import Trade from './Trade';
// import User from './User';
// import AuthUser from './AuthUser';
// import loadable from 'react-loadable';

//异步加载（懒加载）
const Buy = Loadable({loader: () => import('./Buy'),loading: Loading});
const Goods = Loadable({loader: () => import('./Goods'),loading: Loading});
const Login = Loadable({loader: () => import('./Login'),loading: Loading});
const Reg = Loadable({loader: () => import('./Reg'),loading: Loading});
const Trade = Loadable({loader: () => import('./Trade'),loading: Loading});
const User = Loadable({loader: () => import('./User'),loading: Loading});
const AuthUser = Loadable({loader: () => import('./AuthUser'),loading: Loading});
const Error = Loadable({loader: () => import('./Error'),loading: Loading});


class App extends Component {
	
  render() {
		let {updateLoading}=this.props;
    return (
		<React.Fragment>
     <div className='App'>
	 	{updateLoading&&<Loading></Loading>}		 
		<Switch>
			<Route path="/home" component={Home}></Route>
			<Route path="/buy" component={Buy}></Route>
			<Route path="/goods" component={Goods}></Route>
			<Route path="/login" component={Login}></Route>
			<Route path="/reg" component={Reg}></Route>
			<Route path="/trade" component={Trade}></Route>
			<AuthUser path="/user" component={User}></AuthUser>
			<Redirect exact from="/"  to="/home"></Redirect>
			<Route component={Error}></Route>

		</Switch>
     </div>
	 </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  updateLoading:state.updateLoading
});
const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
// export default App;
