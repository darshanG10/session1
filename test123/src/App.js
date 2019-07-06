import React,{Component} from 'react';
import './App.css';
import Test from './Test';

class App extends Component {

  constructor(props){
     super(props);
     this.state={name:"og"};
      }

  render(){
  return (
    <div>
  <Test name={this.state.name} />
    </div>
  );
}
}
export default App;
