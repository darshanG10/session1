import React from 'react';
import './App.css';
import { BrowserRouter as  Router,Switch,Route,Redirect} from 'react-router-dom';
import Welcome from './Welcome.js';
import Loginpage from './Loginpage'
import { thisExpression } from '@babel/types';
class  App  extends React.Component {
 constructor(props){
super(props);
this.state={
  creds:{
    uname:'',
    pass:'',
    status:false

  }

}

this.handleChange = this.handleChange.bind(this);

this.check = this.check.bind(this);
 }
 
  handleChange(e){
    e.preventDefault();
    console.log("The j dajlhlhf ois hfj fewr kj: ",e.target.value)
 var creds = this.state.creds;
 creds[e.target.name]=e.target.value;
this.setState({
  creds
})
console.log("The uname input is: ",this.state.creds.uname)
console.log("The pass input is: ",this.state.creds.pass)

  }

  componentDidMount(){
    var ns = localStorage.getItem('credsuname')
    var ps = localStorage.getItem('credspass')

    console.log("The uname is : ",ns)
   console.log("The pass is : ",ps)
  if(ns==null){}
else{
  console.log("Values updates: in state")
    this.setState({
      creds:{
        uname:ns,
        pass:ps
      }
    })
  }
  }
check(e){
  e.preventDefault();
   console.log("The uname is : ",this.state.creds.uname)
   console.log("The pass is : ",this.state.creds.pass)
var uname  = this.state.creds.uname;
var pass = this.state.creds.pass;
   localStorage.setItem('credsuname',uname);
   localStorage.setItem('credspass',pass);

if(uname==="darshan" && pass==="dar123"){
  console.log("hello");
  var creds = this.state.creds

  creds["status"]=true;

  this.setState({
    creds})
}
}


// creds:{status:true}
// {this.state.status? <Redirect to="/Welcome"></Redirect>:""}
// browserHistory.push('/Welcome')
//<Router><Redirect to="/Welcome/"  component={Welcome}/></Router>




// to={{
//   pathname: "/Welcome",
//   component: { Welcome }
// }}


// pathname: "/Welcome",
//   component: { Welcome }
//<Router><Redirect from='/' to='/Welcome'/><Route path="/Welcome" Component={Welcome}></Route></Router>
//<Router><Redirect push to='/Welcome'/><Route path="/Welcome" Component={Welcome}></Route></Router>\



/* <Router>
  <Route path="/Welcome" render={props => <Welcome {...props} uname={this.state.creds.uname} />} />
</Router>
 */

render(){

  return (
    <div>
    <h1>QHJKBBRKJFJJF</h1>

{console.log("status 2: ",this.state.creds.uname)}
<Router>
{this.state.creds.status ?(<div><Redirect to='/Welcome'/>
<Route path='/Welcome' render={props => <Welcome {...props} uname={this.state.creds.uname}/>}></Route></div>):(
  <div><Route exact strict path="/" render={props => <Loginpage {...props} handleChange={this.handleChange} check = {this.check} uname ={this.state.creds.uname} pass={this.state.creds.pass} />}></Route></div>
)}
</Router>
 

</div>
);
}
}

export default App;
/*
 <Router>
     <div>
       <Switch>
       

       <Route path="/Welcome" component={Welcome}/>
       </Switch>
     </div>
    </Router>

    */

  /*
  <Router>
<Route path="/" exact component={App} />

  </Router>
  */

  /*

<Router>
  <Route exact strict path="/" render={props => <Loginpage {...props} handleChange={this.handleChange} check = {this.check} uname ={this.state.creds.uname} pass={this.state.creds.pass} />}></Route>
  <Route exact strict path="/Welcome" component={Welcome}></Route>
</Router>
*/