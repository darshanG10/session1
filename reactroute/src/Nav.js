

import React,{Component} from 'react';
import {Link} from 'react-router-dom';


class Nav extends Component{

    render(){
     const navStyle={color:'white'};
      return (
    <nav>
     <h1>Nav Page</h1>

     <ul className="nav-links">

     <Link style={navStyle} to='/About'><li>About</li></Link>
     <Link style={navStyle} to='/Shop'><li>Shop</li></Link>


     </ul>
    </nav>
      
      );
    }
     
    }
    
    export default Nav;
    
