import React,{Component} from 'react';



//Old way 

/*
class Weather extends Component{

render(){


  return(
<div>

{this.props.temp && <p>Temperature: {this.props.temp-273}</p>}
{this.props.city && <p>City: {this.props.city}</p>}
{this.props.humidity && <p>Humidity: {this.props.humidity}</p>}

{this.props.desc && <p>Conditions: {this.props.desc}</p>}
{this.props.error && <p>Error: {this.props.error}</p>}


</div>
    
  );
}

}
*/
// new way 


const Weather =props => (

<div>

{props.temp && <p>Temperature: {props.temp-273}</p>}
{props.city && <p>City: {props.city}</p>}
{props.humidity && <p>Humidity: {props.humidity}</p>}

{props.desc && <p>Conditions: {props.desc}</p>}
{props.error && <p>Error: {props.error}</p>}

</div>
  


);



export default Weather;