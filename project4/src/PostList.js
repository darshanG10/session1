import React, {Component} from 'react';
import axios from 'axios';


class PostList extends Component{

    constructor(props){

        super(props);

        this.state={
            post:[]
        }
    }


    componentDidMount(){
        //axios.get('https://jsonplaceholder.typicode.com/posts')
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=41265d18ef9072f1b53254f68347d51e')
        .then(response=>{
            console.log(response)
            //this.setState({post:response.Product_Name})

        })
        .catch(error => {
            console.log(error)
        })

    }
render(){
    const {post} = this.state
    console.log(post.length)
     return (
<div>
List of posts
{
    post.length ?
    post.map(post =><div key={post.id}>{post.title}</div>):
    null
}
</div>
    );
}

}

export default PostList;