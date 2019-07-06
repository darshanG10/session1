import React,{useState,useEffect,Component} from 'react';
import './App.css';
import PostList from './PostList'
/*
  //Rect Ref
class FormSection extends Component{

render(){
  return <input type="text" defaultValue="Fourth" />
}
}


class App extends Component{

third = React.createRef();

handleSubmit = e =>{
  e.preventDefault();
  console.log(this.refs.First,this.refs.second,this.third);
};

render(){
return(
<form onSubmit={e=>this.handleSubmit(e)}>
<input type="text" defaultValue="First" ref="First" />
<input type="text" defaultValue="Second" ref={input =>(this.second = input)}  />
<input type="text" defaultValue="Third" ref={this.third} />
<FormSection  ref="Fourth"/>

<button>Submit</button>



</form>
  );
}


} */


//useState 
/*

function App(props){
const [counter,setCounter] = useState(0)
console.log("the c and sc is : ");
console.log(setCounter);
return (

<div>

<p>


  My counter is {counter}

</p>
<button onClick={increaseCounter}>

Increment counter 
</button>



</div>

)

function increaseCounter() {
  setCounter(counter+1)
}

} */
 

//useEffects

/*
function App(props){

  const [counter,setCounter] = useState(0)
  const [counter2,setCounter2] = useState(100)

  useEffect(() => {
    console.log('effect called')
    document.title='Counter is ${counter}'
    return function()
    {
      console.log('This is called ')
    }
  },[counter])
  
  return (
  
  <div>
  
  <p>
  
  
    My counter is {counter} || {counter2}
  
  </p>
  <button onClick={increaseCounter}>
  
  Increment counter 
  </button>
  
  
  
  </div>
  
  )
  
  function increaseCounter() {
    if(counter2 % 2 === 1)
    {
    setCounter(prevCounter=>prevCounter + 2)
  }

  setCounter2(prevCounter => prevCounter -1)
}
  
  }

*/

//http get request
 
class App extends Component{
render(){
  return(
<div>
<PostList />

</div>
  );
}

}


export default App;
