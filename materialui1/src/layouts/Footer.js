import React ,{Component} from 'react';
import {Paper,Tabs} from '@material-ui/core' 
import Tab from '@material-ui/core/Tab'
class Footer extends Component{
    render(){
        return(
            <Paper>       
                 <Tabs 
            value={0}
        indicatorColor="primary"
        textColor="primary"
        centered
            >
              <Tab label="Item one"/>
              <Tab label="Item one"/>
              <Tab label="Item one"/>
                  
              
            </Tabs>

            </Paper>

        );
    }
}

export default Footer;
