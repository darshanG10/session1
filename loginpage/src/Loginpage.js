import React from 'react';

class Loginpage extends React.Component{
    render(){
        return(
            <div>
   
    <form>
      Username:<input type="text" name="uname" value={this.props.uname} onChange={this.props.handleChange}></input>
      Password:<input type='password' name="pass" value={this.props.pass || '' } onChange={this.props.handleChange}></input>
      <button onClick={this.props.check}>Click to login</button>




    </form>
    </div>
        );
    }
}

export default Loginpage;