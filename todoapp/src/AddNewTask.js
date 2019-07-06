import React,{Component} from 'react';


class AddNewTask extends Component{
constructor(props){
    super(props);
    this.justSubmitted = this.justSubmitted.bind(this); 
}


justSubmitted(event){
  event.preventDefault();  // Prevents page from reloading 
    //var text = event.target.querySelector('input').value;
//   OR 


  var input = event.target.querySelector('input');
  var value = input.value;
    input.value='';
  this.props.updateList(value);

}
render(){
    return(

<form  onSubmit={this.justSubmitted} >

   <input type="text"/>

</form>

    );
}
}


export default AddNewTask;
