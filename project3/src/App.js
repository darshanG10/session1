import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class App extends Component{
render(){
 
  return (
 <div>
 <h1>Hii there</h1>
 <ul>
   
<li>

  <Link to="/One">One</Link>
  <li>

  </li>
  <Link to="/Two">Two</Link>
</li>

 </ul>
 </div>
  
  );
}
 
}


export default App;
