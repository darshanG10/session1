import React,{Component} from 'react';
import './App.css';
import { generateKeyPair } from 'crypto';

class App extends Component{


  render(){

    function onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
    
return(

      <div class="container">
  

      </div>
    );
  }
}

export default App;


{/* <div class="data">
  <p>Profile Details</p>
  <img id="pic" class="img-circle" width="100" height="100" />

  <p>Email Address</p>
  <p id="email" class="alert alert-danger"> </p>
  <button onClick="signOut()" class="btn btn-danger">Sign Out</button> */}
// </div>
// 


// {<div class="g-signin2"  data-onsuccess={this.onSignIn}></div>}
