import React, {Component} from 'react';
//import ReactDOM from 'react-dom'
//import logo from './logo.svg';
import './App.css';
//import PropTypes from 'prop-types';


class App extends Component{
render(){

  return (
 <div>
   <h1>Component Life Cycle</h1>
   <Body />
   

 </div>

  );
}
 
}


class Body extends Component{
constructor(props){
  super(props);
  this.state={r:0};

  this.getRandomNumber = this.getRandomNumber.bind(this);

}
getRandomNumber(){
  console.log("Random number method called");
  this.setState({r:Math.floor(Math.random()*10)})
}

  render(){
    return(

      <div>
      <p>Hiii from Body</p>
      <button onClick={this.getRandomNumber}>
        Random number
      </button>
      <Number mynumber={this.state.r} />
      </div>
    );
  }
}

class Number extends Component{
  componentDidMount(){
    console.log("componentDidMount Called here");

  }

  componentWillMount(){
    console.log("componentWillMount Called here");

  }

  componentWillReceiveProps(newProps){

    console.log("ComponentWillReceiveProps Called" + newProps);
  }

  shouldComponentUpdate(newProps,nextState){
    console.log("shouldComponentUpdate Called here"+newProps+" "+nextState);
    return true;

  }

  componentWillUpdate(newProps,nextState){

    console.log("componentWillUpdate Called" + newProps+" "+nextState);
  }

  componentDidUpdate(newProps,nextState){

    console.log("componentDidUpdate Called" + newProps+" "+nextState);
  }

  componentWillUnmount(){

    console.log("componentWillUnmount Called");
  }

  

render(){
  return(

<div>
<p><br/>
{this.props.mynumber}</p>

</div>

  );

}

}
export default App; 
