import React ,{Component,Fragment} from 'react';
import {Paper,Tabs, BottomNavigation, BottomNavigationAction} from '@material-ui/core' 
import Tab from '@material-ui/core/Tab'
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Popover from '@material-ui/core/Popover';

import Typography from '@material-ui/core/Typography';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { RadioGroup } from '@material-ui/core';

import Radio from '@material-ui/core/Radio';

class Footer extends Component{

    constructor(props){
        super(props);
        this.state={
            tabval:0,
            popbol:false,
            radval:'female'

        }
        this.changetab = this.changetab.bind(this);
        this.handlepop = this.handlepop.bind(this);
        this.handlerad = this.handlerad.bind(this);

    }
    handlepop(e){
        console.log("the handle pop called ")
        this.setState({popbol:!this.state.popbol})
    }
    changetab(e,valu){
        var val = e.target.value
        console.log("The tab value ",e.target.value,"...",valu)
        this.setState({tabval:valu})
    }

    handlerad(e,vale){

        console.log("the rad vale",vale)
        this.setState({radval:vale})
    }

    render(){
        return(
            <Fragment>
            <Paper>       
                 <Tabs 
            value={this.state.tabval}
            onChange={this.changetab}
        indicatorColor="primary"
        textColor="primary"
        centered
            >
              <Tab label="Item one"/>
              <Tab label="Item Two"/>
              <Tab label="Item Three"/>
                  
              
            </Tabs>
       {this.state.tabval===0 && <Typography id="one">one</Typography>}
       {this.state.tabval===1 && <Typography id="two">two</Typography>}
       {this.state.tabval===2 && <Typography id="three">Three</Typography>}
       
       
            </Paper>

            <BottomNavigation>
                <BottomNavigationAction label="Recents" icon={<RestoreIcon /> }/>
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/> }/>
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/> }/>
            </BottomNavigation>

            <Typography OnMouseEnter={this.handlepop} OnMouseLeave={this.handlepop} disableRestoreFocus> Hover Me !!!!!</Typography>
            <Popover open={this.state.popbol}><Typography>I use Popover.</Typography></Popover>


<FormControl>
    <FormLabel>Gender</FormLabel>
    <RadioGroup value={this.state.radval}
    onChange={this.handlerad}>
    <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />

    </RadioGroup>
</FormControl>
</Fragment>
        );
    }
}

export default Footer;
