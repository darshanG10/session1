import React ,{Component,Fragment} from 'react';
import {AppBar, Toolbar,Typography, IconButton, ClickAwayListener} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar'
import { createStyles, makeStyles, Theme, createMuiTheme } from '@material-ui/core/styles';
import abc from './ano.jpg'
import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Dial from './Dial'

import { useTheme, ThemeProvider } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

import Switch from '@material-ui/core/Switch';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Grid from '@material-ui/core/Grid';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

/*  */

const drawerWidth = 240;
const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#ffffff',
        main: '#000000',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ffffff',
        main: '#ff0000',
        dark: '#ba000d',
        contrastText: '#000',
      },
     
    },
  });

const styles ={
    margin:0,
    padding:5,
    flexGrow:1
}
const styleimg={
    margin:5,
    width:60,
    height:60
}
const style={

    badgeicon:{
    color:'#40b55d'
    }

}

const flexs={
  flex:1
}
class Header extends Component{

constructor(props){
    super(props);
    this.state={

        open:false,
  check:false,
labelname:"This is from state",
clickeve:false,
toglbtn:'right',
listop:false

}
    this.handleDraweropen = this.handleDraweropen.bind(this);
    this.handleclickawy = this.handleclickawy.bind(this);
    this.handletgl = this.handletgl.bind(this);
    this.hadchan = this.hadchan.bind(this);
}

handleDraweropen(){
this.setState({open:!this.state.open,
  clickeve:"onClick"
})
} 

delete(e){
e.preventDefault();
console.log("delete called")

}

handleclickawy(e){
  e.preventDefault()
  this.setState({
    open:false
  })
}
handletgl(e){
  e.preventDefault()
  console.log("The target togl value: ",e.target.value)
  this.setState({
    toglbtn:e.target.value
  });
}

hadchan(e){
  e.preventDefault();
  this.setState({
    listop:!this.state.listop
    
  });
  console.log("The drop list is ",this.state.listop);
}
render(){


        return(
            <Fragment>
            <div>
            <ClickAwayListener onClickAway={this.handleclickawy} mouseEvent={this.state.clickeve}>

           <AppBar position="static" style={styles}  >
            <Toolbar>
            <IconButton 
             color="inherit"
             aria-label="Open drawer"
             edge="end"
             onClick={this.handleDraweropen}
             style={{marginLeft:20}}
            >
<Menu/>
</IconButton>
            <Avatar alt="anon" src={abc} style={styleimg}></Avatar>

                      <Typography  style={{margin:0,flex:1}} variant="button">Darshan</Typography>
           
          <ThemeProvider theme={theme}>
           <Badge badgeContent={200} color="secondary" style={style.badgeicon} max="300">
           <ThemeProvider theme={theme}>
           <MailIcon color="primary"/>

           </ThemeProvider>
           </Badge>

           </ThemeProvider>  

           <Dial />
           <Chip label={this.state.labelname} icon={<FaceIcon/>} onClick={this.delete} onDelete={this.delete} color="secondary"/>
                        <Switch checked={this.state.swittog} onChange={this.handleswitch} value="checkedA" />                         
            </Toolbar>
            </AppBar>
</ClickAwayListener>
            
{console.log("The state open is : ",this.state.open)}

<Fab color="primary" aria-label="Add" >
        <AddIcon />
      </Fab>




 <Drawer variant="persistance" anchor='left' open={this.state.open}>
<List subheader={<ListSubheader>Welcome !!</ListSubheader>} >
<ListItem button>
<ListItemIcon>
<SendIcon />

</ListItemIcon>
<ListItemText primary="Send Mail"/>

</ListItem>

<ListItem button>
<ListItemIcon>
<DraftsIcon />

</ListItemIcon>
<ListItemText primary="Drafts"/>

</ListItem>

<ListItem button>
<ListItemIcon>
<InboxIcon />

</ListItemIcon>
<ListItemText primary="Inbox" onClick={this.hadchan}/>
{this.state.listop? <ExpandLess onClick={this.hadchan} />:<ExpandMore onClick={this.hadchan} />}

</ListItem>





<Collapse open={this.state.listop} timeout="auto" unmountOnExit>




<ListItem button>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>



</Collapse>


</List>


 </Drawer>

 
 </div>

 <Grid container spacing={2}>
      <Grid item sm={12} md={6}>
        <div >
          <ToggleButtonGroup exclusive value={this.state.toglbtn} onChange={this.handletgl} >
            <ToggleButton value="left">
              <FormatAlignLeftIcon />
            </ToggleButton>
            <ToggleButton value="center">
              <FormatAlignCenterIcon />
            </ToggleButton>
            <ToggleButton value="right">
              <FormatAlignRightIcon />
            </ToggleButton>
            <ToggleButton value="justify" disabled>
              <FormatAlignJustifyIcon />
            </ToggleButton>
          </ToggleButtonGroup>
</div>
</Grid>
          </Grid>
          
 <TextField id="11" label="Name" margin="normal" variant="outlined"/>
</Fragment>

        );
    }
}

export default Header;
//iconClassnameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonClick={this.handleToggle}


//