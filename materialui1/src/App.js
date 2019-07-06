import React,{Component,Fragment} from 'react';
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Exercises from './layouts/Exercises'
import {AppBar, Toolbar,Typography} from '@material-ui/core';

class App extends Component{
  
render(){
  
  return(
    
  <Fragment>

<Header/>
<Exercises />

<Footer/>
  </Fragment>
  );
}
}
export default App;
