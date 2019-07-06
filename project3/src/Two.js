import React,{Component} from 'react';

import {Link} from 'react-router-dom'
class Two extends Component{

    render(){

        return(

            <div>
            <p>I m Two </p>
           <Link to="/Two/123">To 2.1</Link>
           {this.props.children}
            </div>
        );
    }
}

export default Two;

