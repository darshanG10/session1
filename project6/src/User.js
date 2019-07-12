import React from 'react';
import { userInfo } from 'os';
import axios from 'axios';
import './user.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class User extends React.Component{

    constructor(props){
        super(props);
        this.state={
            jdata:[]
        }
        
    }
    componentWillMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts?userId="+this.props.valueid)
      .then(response => {
          console.log(response.data)

          this.setState({
              jdata:response.data
          })
      })
       }
    render(){
  
             var c = this.state.jdata

             {console.log("the jdata is ",c)}
        var co = c.map((i,k)=> {

            return(
                <Paper key={k} style={{margin:10,backgroundColor:'#42f566'}}>
        <Typography variant="h5" component="h3">
          {i.title}
        </Typography>
        <Typography component="p">
          {i.body}
        </Typography>
      </Paper>

            );
        })
        
        return(

            <div style={{textAlign:'center'}}>
            <Typography variant="h4">Post from:  <b> {this.props.username}</b></Typography>
                <Grid container>
                {co}
                </Grid>
            </div>
        );
    }
}

export default User;