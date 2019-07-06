import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
 
function App() {
  return (
   
   <Router>
    <div>
      <Nav />
      <Switch>
      <Route path="/" exact component={Home}/>

      <Route path="/About" component={About}/>
      <Route path="/Shop" component={Shop}/>
      </Switch>
    </div>
    </Router>


  );

}
const Home =()=>(
<div>
<h1>Home Page</h1>
</div>
)
export default App;
