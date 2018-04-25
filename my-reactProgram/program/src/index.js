import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import {Route, BrowserRouter} from 'react-router-dom';
import './assets/css/base.css';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import defaultState from './store/state'
import reducer from './store/reducer'

let store = createStore(reducer, defaultState); //创建store

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <Route component={App}></Route>
    </BrowserRouter>
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
