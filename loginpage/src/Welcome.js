import React from 'react'


class Welcome extends React.Component{

    render(){
        return(<div>
   {console.log(this.props.uname)} 

            <h1>Welcome {this.props.uname}</h1>
        </div>);
    }
}

export default Welcome;