import React,{Component} from 'react';


class Addcmt extends Component{
    
   
    render(){
        return(<div>
            <form>
                <input type="text" name="Addcmt"></input>
                <button  onClick={this.props.AddComment}>Add comments</button>
            </form>
        </div>);
    }


}


export default Addcmt;

