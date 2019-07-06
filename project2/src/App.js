import React, {Component} from 'react';
//import ReactDOM from 'react-dom'
//import logo from './logo.svg';
import './App.css';
//import PropTypes from 'prop-types';
import Timer from './Timer';
import Coursesales from './Coursesales';
class App extends Component{
render(){
// Coursesales cart p2
 var courses = [{name:'React',price:200},
                {name:'python',price:299},
                {name:'R',price:180},
                {name:'java',price:220}
];

  return (
 <div>
 <div>
   <h1>Timer</h1>
   
 {/*<Timer start={Date.now()}/>   part one is commented*/} 
  </div>
  <div>
  <h1>Welcome to cource sales page </h1>  
  </div>
  <Coursesales items={courses}/>

 </div>

  );
}
 
}

// Project 2 sales cart

export default App;
