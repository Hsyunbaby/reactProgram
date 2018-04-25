const asyncAction=(dispatch,url,type)=>{
  fetch(url).then(
    res=>res.json()
  ).then(
    data=>{
      setTimeout(()=>{
        dispatch({type:'UPDATE_LOADING',payload:false});//状态请求
        dispatch({type:type,payload:data});//状态请求
      },1000)
    }
  );

  return {type:'UPDATE_LOADING',payload:true}
};
const asyncAction1=(dispatch,url,type)=>{
  fetch(url,{credentials:"include"}).then(
    res=>res.json()
  ).then(
    data=>{
      setTimeout(()=>{
        dispatch({type:'UPDATE_LOADING',payload:false});//状态请求
        dispatch({type:type,payload:data});//状态请求
      },1000)
    }
  );

  return {type:'UPDATE_LOADING',payload:true}
};
export default {asyncAction,asyncAction1}