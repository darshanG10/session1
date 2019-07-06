import React,{Component,useState} from 'react';
import Titles from './Titles';
import Form from './Form';
import Weather from './Weather';
import { async } from 'q';

const api_key="41265d18ef9072f1b53254f68347d51e";
/*
class App extends Component{
state={
  tempreture:'',
  name:'',
  humidity:'',
  desc:'',
  error:''
}
  getWeather =(event) => {
    event.preventDefault();
    var city  = event.target.value;
    
   fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID='+api_key)
  .then(res=() =>{ res.json()
  
  
  
  
  

    this.setState({
      temperature:res.main.temp,
      city:res.name,
      humidity:res.main.humidity,
      desc:res.weather[0].description,
      error:""

// });
})
  }

render(){


  return(
<div>
<Titles />
<Form getWeather={this.getWeather}/>
 
<Weather 
tempreture={this.state.tempreture}
 city={this.state.city} 
 humidity  ={this.state.humidity} 
desc = {this.state.desc}
 error={this.state.error} />


</div>
    
  );
}

}
*/



class App extends Component{
  state={
    tempreture:'',
    name:'',
    humidity:'',
    desc:'',
    error:''
  }
    getWeather = async(event) => {
      event.preventDefault();
      var city  = event.target.elements.city.value;
      console.log("event.target.elements.city.value",event.target.elements.city.value)
      console.log("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID="+api_key);
  const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID='+api_key);
  const data = await api_call.json();
  console.log(data);

 
  if(city){
  this.setState({
  tempreture:data.main.tempreture,
  city:data.name,
  humidity:data.main.humidity,
  desc:data.weather[0].description,
  error:""
  });
  }
  else{
    
    this.setState({
      tempreture:undefined,
      city:undefined,
      humidity:'',
      desc:undefined,
      error:"Please Enter the value. "
      });
  
  }
    }
  
  render(){
  
  
    return(
  <div>
  <Titles />
  <Form getWeather={this.getWeather}/>
   
  <Weather 
  tempreture={this.state.tempreture}
   city={this.state.city} 
   humidity  ={this.state.humidity} 
  desc = {this.state.desc}
   error={this.state.error} />
  
  
  </div>
      
    );
  }
  
  }





/*
const App = () =>{

  

const [tempreture,setTemp]=useState('');
const [city,setCity]=useState('');
const [humidity,setHumidity]=useState('');
const [desc,setDesc]=useState('');
const [error,setError]=useState('');

const getWeather  = async(event) => {
  event.preventDefault();
  var city  = event.target.elements.city.value;
  console.log("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID="+api_key);
const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID='+api_key);
const data = await api_call.json();
console.log(data);
if(city){
 
setTemp(data.main.tempreture);
setHumidity(data.main.humidity);
setCity(data.name);
setDesc(data.weather[0].description);
setError("");

}
else{


  setTemp('');
  setHumidity('');
  setCity('');
  setDesc('');
  setError("Error!!!");
}

}



return (<div>

<Titles />
<Form getWeather={getWeather} />
 
<Weather 
tempreture={tempreture}
 city={city} 
 humidity  ={humidity} 
desc = {desc}
 error={error} />

</div>);


}
*/

export default App;