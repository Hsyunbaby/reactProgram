import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import queryString from "query-string";
import {UPDATE_USER} from '../store/types'


const AuthUser = ({ component: User,updateUser,userList,location, ...rest }) => {
 if(!userList.hasName) return null;
  console.log(userList)
  return <Route {...rest} render={props =>
    userList.hasName?
      <User {...props} user={userList}/>
      : <Redirect to="/login" />
    }
  />
  
};

const mapStateToProps = state => ({
  userList:state.userList,
});
const mapDispatchToProps = dispatch => ({
  // updateUser:(payload)=>{dispatch({type:"UPDATE_USER",payload})},
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthUser);
// export default AuthUser;
