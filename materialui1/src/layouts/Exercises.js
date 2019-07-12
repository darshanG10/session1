import React ,{Component,Fragment} from 'react';
import {Paper,Grid, Typography, Collapse} from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
//import {Links} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar'
import { createStyles, makeStyles, Theme, createMuiTheme } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import { useTheme, ThemeProvider } from '@material-ui/styles';
import '/home/gten/Documents/ReactProjects/materialui1/src/App.css';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';



import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';

import MoreVertIcon from '@material-ui/icons/MoreVert';

import pasta from './pasta.jpeg';
import Checkbox from '@material-ui/core/Checkbox';
import SpeedDial from '@material-ui/lab/SpeedDial';

import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import DeleteIcon from '@material-ui/icons/Delete';
import './App2.css'
const theme = createMuiTheme({
  palette:{
align:'right'  }
})
const style1={
  maxWidth:345,
  height:0,
  paddingTop:'56.25%',
  
}
const crdimg={
  height:20,
  paddingTop:'80%'
}
const flexpro={
  flexGrow:1
}
const fle={
  align:'right'
}

class Exercise extends Component{
  constructor(props){
    super(props)
    this.state={
      change:false,
      check:false,
      todis:false,
      opensped:false,
      clicked:false,
      snkopen:true
    }
    this.expandcollapse = this.expandcollapse.bind(this);
    this.handlecheck = this.handlecheck.bind(this);
    this.handleSpeedial = this.handleSpeedial.bind(this);
    this.fav = this.fav.bind(this);
    this.setsnak = this.setsnak.bind(this);
  }

  expandcollapse(props){
    this.setState({
      change:!this.state.change
    })
  }

  handlecheck(e){
    e.preventDefault()
    this.setState({check:!this.state.check});
  console.log("value after change: ",this.state.check);
  }
  handleSpeedial(e){
    e.preventDefault();
    this.setState({
      opensped:!this.state.opensped
    })
  }
  fav(e,value){
    e.preventDefault()
    console.log("the facv ois ",value)
    this.setState({
      clicked:!this.state.clicked
    })
  }
  setsnak(e){
    this.setState({snkopen:!this.state.snkopen})
  }
    render(){
        return(
          <Fragment>
          <div>
          <Grid container>
          <Grid item sm>

          <Paper style={{margin:2}}>This is Left pane</Paper>

          </Grid>
          <Grid item sm>

          <Paper style={{margin:2}}>This is Left pane</Paper>

          </Grid>
          </Grid>
          <Paper>
          <Breadcrumbs>

          <p>
          <HomeIcon style={{height:20}}/>
          Material-UI
        </p>

          </Breadcrumbs>
          </Paper>
          
<Grid container>
<div style={{float:'right',position:'right'}}>
         <Card style={{maxWidth:345,align:"right"}} color="secondary" >
           <CardHeader avatar={<Avatar color="secondary">D</Avatar>} action={<IconButton aria-label="Settings"><MoreVertIcon /></IconButton>} title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016" />

        <CardMedia 
          image={pasta} style={crdimg}       />

          <CardContent>
<Typography>
  This is pasta. It look like in the above picture. 
</Typography>

          </CardContent>

          <IconButton>
            <ShareIcon/>
          </IconButton>
          <IconButton style={flexpro}>
            <FavoriteIcon color={this.state.clicked?"secondary":""} onClick={this.fav}/>
          </IconButton>
          <ThemeProvider theme={theme}>
         <IconButton onClick={this.expandcollapse}  align='right'>
            <ExpandMoreIcon/>
          </IconButton>
          </ThemeProvider>  
          
<Collapse in={this.state.change} >
<CardContent>
<Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to lets rest for 10 minutes, and then serve.
          </Typography>
</CardContent>

</Collapse>
          
         </Card>
         </div>
        </Grid>
        </div>

         <Checkbox
       onChange={this.handlecheck}
        value="checkb"
      />



<SpeedDial icon={<SpeedDialIcon />} open={this.state.opensped} ariaLabel="this" direction="right" onClick={this.handleSpeedial}>

<SpeedDialAction key="copy" icon={<FileCopyIcon />}></SpeedDialAction>
<SpeedDialAction key="copy1" icon={<FileCopyIcon />}></SpeedDialAction>
<SpeedDialAction key="copy2" icon={<FileCopyIcon />}></SpeedDialAction>

</SpeedDial>
<Snackbar open={this.state.snkopen}  bodyStyle={{ backgroundColor: 'teal', color: 'coral' }}>
  <SnackbarContent VariantType="warning" message={<span id="sb">This is snackbar</span>} color="primary" action={<IconButton key="close" color="inherit" onClick={this.setsnak} ><CloseIcon /></IconButton>} />
</Snackbar>

          </Fragment>
          
        );
    }
}



export default Exercise;

/* */
