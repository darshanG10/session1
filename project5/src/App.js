import React,{Component} from 'react';
import './App.css';

class App extends Component{
state={
  q:''
}

updateTask = (event) => {
  event.preventDefault();
var u = this.props.p
u.unshift(event.target.elements.uptask.value);
  this.updatelocalStorage(u);
  this.setState({q:u}) 
  event.target.elements.uptask.value=''

}
  updatelocalStorage(tasks){
    localStorage.setItem('task',JSON.stringify(tasks))
    console.log("Task stored")
    
  }

  erase=(e)=>{
 localStorage.clear();
 window.location.reload();

  }


  // componentWillmount(){
  //   let varr = localStorage.getItem('task')
  //   console.log(varr)
  // }
render(){
  return (
    <div>
    <h1>Hiii there</h1>
     <form onSubmit={this.updateTask}>
    <input type="text" name="uptask" placeholder="Enter task"></input>
       <button>X</button>
     </form>
     <p>{this.state.q}</p>
     <button onClick={this.erase}>E</button>
    </div>
  );
}
}
export default App;
