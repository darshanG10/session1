import React,{Fragment} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';



class Dial extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            open:false,
            dopen:false
        }

    }

    handleToggle = () =>{
        this.setState({
            open:!this.state.open
        })
        
console.log("the handle togle",this.state.open)
    }



    
    render(){
        return(

            <Fragment>
            
            <Button variant="fab " color="secondary" onClick={this.handleToggle} mini>

            <AddIcon />
            
            </Button>

<Dialog open={this.state.open}  aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create new Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText>
          <form>  
          Fill the form  
          <input type="text" ></input>
           </form>
          </DialogContentText>
         
        </DialogContent>
        <DialogActions>
         
          <Button  color="primary" onClick={this.handleToggle}>
            Subscribe
          </Button>

          
        </DialogActions>
      </Dialog>

        </Fragment>
        );
    }
}

export default Dial;