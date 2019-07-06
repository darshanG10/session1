import React,{Component} from 'react'; 


class Timer2 extends Component{

    componentDidMount(){
        this.timer =  setInterval(this.ticker,1000)
        console.log("ComponentDid mounted");
    }
    ticker(){
        Timer2.defaultProps.clock=new Date() - this.props.start;
    }
    constructor(props){
       super(props);
    
       this.ticker = this.ticker.bind(this);
   }
    render(){
        var clock = Math.round(this.props.clock / 1000); 
        console.log(this.props.start);
    
      return(
    <div>
    <h1>Welcome to Timer App</h1>
    <p>
        You have been on this site:
    </p><br />
    <span>{clock}
    </span>
    <p>Seconds.</p>
      
    </div>
      );
    }
}
export default Timer2; 


