import React ,{Component} from 'react';
import {AppBar, Toolbar,Typography} from '@material-ui/core';


class Header extends Component{
    render(){
        return(
            <AppBar style={{margin:20}} >
            <Toolbar>
                      <Typography variant="button">Header</Typography>
            </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
