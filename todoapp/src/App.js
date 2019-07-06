import React,{Component} from 'react';
import ToDoAppList from './ToDoAppList';
import AddNewTask from './AddNewTask';
import './App.css';
 class App extends Component{

  constructor(props){

    super(props);
    this.state={tasks:this.props.tasks};
    this.updateList = this.updateList.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.updateLocalStorage = this.updateLocalStorage.bind(this);
  } 
  
  updateList(text){    
    var updatedTasks = this.state.tasks;
    console.log("this.props.task",updatedTasks)
    updatedTasks.unshift(text);
    this.setState({tasks:updatedTasks});
    this.updateLocalStorage(updatedTasks);
  }

  removeTask(text){

    
    var updatedTasks = this.state.tasks;
    updatedTasks.splice(updatedTasks.indexOf(text),1);
    this.setState({tasks:updatedTasks});
    this.S(updatedTasks);
  
  }

  updateLocalStorage(updatedTasks){
    localStorage.setItem('storedTasks',JSON.stringify(updatedTasks));

  }

  render(){
   
    return(

      <div>
       <h1>ToDo App</h1>
                    <AddNewTask updateList={this.updateList} />
                    <ToDoAppList tasks={this.state.tasks} remove={this.removeTask}/>

        
      </div>
    );
    }

 } 
export default App;
