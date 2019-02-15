import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore} from 'redux';
import rootReducer from "./redux/reducers";

const store = createStore(rootReducer);

if(localStorage.tokenJWT && localStorage.user_id && localStorage.user_name){
    const username = localStorage.getItem('user_name');
    console.log('Hello ' + username);
}
else{
    console.log("No token  or token expired")
}




ReactDOM.render(

    <Provider store={store}>
        < App />
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
