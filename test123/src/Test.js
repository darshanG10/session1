import React,{Component} from 'react';


class Test extends Component{

    change(name){
        this.state.name="changed";
    }
constructor(props){
    super(props);
    this.state={};
    this.change=this.change.bind(this);

}

render(){
        return(
            <div>
            <p onClick={this.change}>Click</p>
            </div>
        );
    }
}

export default Test;