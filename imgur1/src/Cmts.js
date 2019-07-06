import React,{Component} from 'react';



class Cmts extends Component{

render(){
var Cs = Array.from(this.props.cdata)
var p =Cs.map((i,k) => {
       
    // console.log("--------------------------------");
    // console.log("the i is: ",i);
    return <tr key={k}>
    
    
    <td className="tdforauth"><b>{i.author} :</b></td>
    
    
    <td className="tdforcmt">{i.comment}</td>
    
    
    
    </tr> });
return(
<table>
<tbody>
    {p}

    </tbody>
</table>


);


}
}
export default Cmts;