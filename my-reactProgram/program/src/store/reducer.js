// const import { Action } from 'Directory';

// const INITIAL_STATE = {};
import * as types from './types';

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
const reducer= (state ,{type,payload}) => {
    // console.log(types)
    switch (type) {
        case types.UPDATE_USER :
            return Object.assign({},state,{userList:payload})
        case types.UPDATE_LOADING:
            return Object.assign({},state,{updateLoading:payload})
        case types.UPDATE_BUYDATE:
            // console.log(type,payload)
            return Object.assign({},state,{buyDate:payload})
        case types.CLEAR_BUYDATE:
            return Object.assign({},state,{buyDate:[]})
        case types.CLEAR_USER:
            return Object.assign({},state,{userList:[]})
        default: return state;
    }
};
export default reducer;