import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import SecurityContainer from './container/SecurityContainer';
import BakeryContainer from './container/BakeryContainer';
import ProfileBanner from "./container/ProfilBanner";
import HomeButton from "./components/HomeButton";

class App extends Component {

  render() {
    const styles= {
      maxHeight:50,   
      maxWidth: "100%"   
    }
  
    const isConnected = ({}) => {
      if(localStorage.tokenJWT && localStorage.User_id && localStorage.User_name){
        const username = localStorage.getItem('User_name');
        console.log('Hello ' + username);
    }
    else{
        console.log("No token  or token expired")
    }
    };

    return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" style={styles} />
          <ProfileBanner/>             
        <HomeButton />
        
          <Switch>
            <Route path="/bakery" component={BakeryContainer}/>              
            <Route path="/security" component={SecurityContainer}/>
            <Route path="/" component={SecurityContainer}/>              
          </Switch>
          
        </header>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
