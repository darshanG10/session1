import React,{Component} from 'react';


class Frm extends Component{

    render(){
        return(


    <form onSubmit={this.props.getImage}>
       <input type="text" name="imageid"></input>
      <button>Click</button>
      </form>
        );
    }
}

export default Frm;
