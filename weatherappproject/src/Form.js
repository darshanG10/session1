import React,{Component} from 'react';

/*
class Form extends Component{

render(){


  return(

    <form onSubmit={this.props.getWeather}>
<input type="text" name="city" placeholder="City..." />
<button>Get Weather </button>
    </form>
    
  );
}

}
*/

const Form = props =>(

//<form onSubmit={props.getWeather}>
<form>
<input type="text" name="city" placeholder="City..." onChange={props.getWeather} />
<button>Get Weather </button>
    </form>
  
);
export default Form;