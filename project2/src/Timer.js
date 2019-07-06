import React,{Component} from 'react'; 


class Timer extends Component{
    componentWillMount(){
        console.log("mount");
    }

    componentDidMount(){
        this.timer =  setInterval(this.ticker,1000)
        console.log("ComponentDid mounted");
    }
    ticker(){
        console.log(this.props.start);
        this.setState({clock:new Date() - this.props.start})
        
        console.log('Ticker called');
    }
    constructor(props){
       super(props);
       this.state={
        clock:0
       };
       this.ticker = this.ticker.bind(this);
   }
    render(){
        console.log("This is from render");
        var clock = Math.round(this.state.clock / 1000); 
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




export default Timer; 


