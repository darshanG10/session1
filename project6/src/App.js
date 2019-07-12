import React,{Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import { BrowserRouter as  Router,Switch,Route,Redirect} from 'react-router-dom';
import User from './User';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      jdata:[],
      shtb:false,
      route:false,
      userval:'',
      username:''
    }
    this.handlebtn1 = this.handlebtn1.bind(this);
    this.showpost = this.showpost.bind(this);
  }
handlebtn1(e){
  e.preventDefault();
   axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response =>
    {console.log("response is",response.data)
        this.setState({jdata:response.data,shtb:true})
        })
  .catch(error=>{console.log("errror ala")})
}




// <tr key={i.name}>
// <td>{i.id}</td>
// <td>{i.name}</td>
// <td>{i.username}</td>
// <td>{i.email}</td>
// <td>{i.phone}</td>
// <td>{i.website}</td>
// <td>{i.company.name}</td>

//       </tr>
      showpost(e,name){

        console.log("Showpost hitted and value is ",e)

        this.setState({
          route:true,
          userval:e,
          username:name
        })

      

      }
      
  render(){
  //var jd=Array.from(this.state.jdata);      //when jdata:''
  var jd=this.state.jdata;
    var details = jd.map((i,k) => {

    
      return (
        
       <Card key={k} style={{maxWidth:260,margin:20,align:'center'}} onClick={() => this.showpost(i.id,i.name)} >
   <CardActionArea   style={{minHeight:350,backgroundImage:'linear-gradient(to bottom right,#864acf, #bd318c,red,yellow)',opacity:1}}>
    
    <CardMedia  
    component ="img"
    height="140"
    image={"https://robohash.org/"+i.name}
    alt="Image nahi disat">

</CardMedia>
 <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {i.name}
          </Typography>
          
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Email: </b>{i.email}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            <b>Contact: </b>{i.phone}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            <b>Company: </b>{i.company.name}
          </Typography>


        </CardContent>

   </CardActionArea>



       </Card>
  
     
      );

    }
    );
    return(
      <Fragment>
     

      {this.state.route?( <div>  <Router><Redirect to="/User" /> <Route exact path='/User' render={props => <User {...props} valueid = {this.state.userval} username={this.state.username}/>}></Route> </Router></div>  ):(
       <div> 
      <form>
        <button onClick={this.handlebtn1}>click</button>
      </form>   <Grid container > {details}  </Grid>  </div>
)}
   
        </Fragment>

    );
  }
}


export default App;

   
      

// <Router>

// <Route exact path='/User' component={User}>  </Route>
// <Route exact path='/' component={App}></Route>



//           {this.state.route?( <div> <Redirect to="/User" /> </div>  ):("")}




//       </Router>
    
      
      

