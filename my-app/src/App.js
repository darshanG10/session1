import React, {Component} from 'react';
import ReactDOM from 'react-dom'
//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import PropTypes from 'prop-types';


// part 2
function timetic(){
  
  const element=(
  <div>
      <h1>The time is: </h1>
      <h2>Time: {new Date().toLocaleTimeString() }</h2>
      
      </div>
  );
  ReactDOM.render(element,document.getElementById('root1'));
}



     
setInterval(timetic,1000);

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {  };
  }

render(){

  return (
 <div>
    <ticmic />

   <h1>Hiii there
   </h1>
   <Head />
   <Header />
<Parent />





<h1>This is prop eg</h1>
<h3>{this.props.propString}</h3>
<h3>{this.props.propNumber}</h3>
<h3>{this.props.propObject.a}</h3>

<Parent2 />

 </div>

  );
}
 
}



class Head extends Component{
  constructor(props) {
    super(props);
    this.state = {  };
  }

render(){

  return (
    <div>
 <div>

   <h1>Hiii from head
   </h1>
 </div><div></div>
</div>
  );
}

}





//part 3 [props]

class Parent extends Component{


  render(){
    console.log(this.props);
    console.log('________________________')
    return (
      <div>

        <h1>Hello fro props</h1>
        <Cars msg="a message form Parent" defprp={this.props.cars}/>
      </div>
    );
  }
}

Parent.defaultProps={
cars:['a','b','c','d']
}

class Cars extends Component{


  render(){
    console.log(this.props);

    return(

      <div>
        <h1> from cars</h1>
        <p>{this.props.msg}</p>
        <div>{this.props.defprp.map((item,i)=>{
          return <p key={i }>{item}</p>;   //Add key={i} to have key as react requires unique key to keep track of element
        })}</div>

      </div>
    );
  }
}
 


// App prop

//Props

App.propTypes={
  propObject:PropTypes.object,
  propString:PropTypes.string,
  propNumber:PropTypes.number
}

App.defaultProps={

  propObject:{a:1,b:2,c:3},
  propString:"darshan",
  propNumber:3
}


//State and Oncliclk 

class Parent2 extends Component{
constructor(props){
super(props) ;
this.state={             //default states
 cars:['x','y','z']

};
this.handleClick=this.handleClick.bind(this);
// other method to bind is directly bonding it in tag <h1 onClick={this.handleClick.bind(this)}>  </h1>
}

handleClick(){

  this.setState({cars:this.state.cars.reverse()});
}
  render(){
    console.log(this.props);
    console.log('________________________')
    return (
      <div>
      
        <h1 onClick={this.handleClick}>Hello from states parent2</h1>   
        <Cars2 msg2="a message form Parent2" defprp2={this.state.cars}/>
      </div> 
    );

  }
}


class Cars2 extends Component{


  render(){
    console.log(this.props);

    return(

      <div>
        <h1> from cars2</h1>
        <p>{this.props.msg2}</p>
        <div>{this.props.defprp2.map((item,i)=>{
          return <p key={i}>{item}</p>;   //Add key={i} to have key as react requires unique key to keep track of element
        })}</div>

      </div>
    );
  }
}


export default App; 