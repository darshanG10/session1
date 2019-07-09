import React ,{Component} from 'react';
import {AppBar, Toolbar,Typography} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar'
import { createStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import abc from './ano.jpg'

const styles ={
    margin:0,
    padding:5
}
const styleimg={
    margin:5,
    width:60,
    height:60
}
class Header extends Component{
    render(){


        return(
            <AppBar position="static" style={styles} flexGrow="1">
            <Avatar alt="anon" src={abc} style={styleimg}></Avatar>
            <Toolbar>
                      <Typography  style={{margin:0}} variant="button">Header</Typography>
            </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
