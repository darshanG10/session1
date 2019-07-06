import React,{Component} from 'react';


class ToDoAppList extends Component{
constructor(props){
    super(props);
    this.remove = this.remove.bind(this)
}

remove(item){
    var value = item.target.parentNode.querySelector('span').innerText;
    this.props.remove(value);


}
render(){

    var items = this.props.tasks.map((item,i) => {
        return <li key={i}><span>{item}</span><button onClick={this.remove}>X</button></li>
   });
    return(

<ul>
{items}
</ul>

    );
}
}


export default ToDoAppList;
 