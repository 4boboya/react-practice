import React from 'react';
import useRate from './useRate.js'

/*
import React, {Component} from 'react';
class ProgressDIY extends Component{

    constructor(props){
        super(props);
        this.state={
            percent:0,
        }
    }

    increase=()=>{
        const percent = this.state.percent +1;

        this.setState({percent},()=>{
            if (this.state.percent >= this.props.value){
                return;
            }
            this.tm = setTimeout(this.increase,20)
        })
    }

    decrease=()=>{ 
        const percent = this.state.percent -1;
        this.setState({percent},()=>{
            if (this.state.percent <= this.props.value){
                return;
            }
            this.tmTwo = setTimeout(this.decrease,20)
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevProps,this.props.value)
        if(prevProps.value > this.props.value){
            if(this.tm)
                clearTimeout(this.tm)
            this.decrease()
        }
        else if(prevProps.value < this.props.value){
            if(this.tmTwo)
                clearTimeout(this.tmTwo)
            this.increase()
        }
    }

    componentDidMount(){
        this.setState({percent:this.props.value})
    }

    render(){
        return(
            <div>
                <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
                    <div className="progress-bar" style={{backgroundColor:"#fe5196",width:this.state.percent.toString()+"%",height:"100%",borderRadius:"10px"}}/>
                </div> 
                目前比率:{this.state.percent.toFixed(0)}%
                <button value={90} onClick={this.props.onClick}>增加比率至90</button>
                <button value={10} onClick={this.props.onClick}>減少比率至10</button>
            </div>
        );
    }
}
*/

const ProgressDIY=(props)=>{
    
    const percent = useRate(props.value)
    
    return(
        <div>
            <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
                <div className="progress-bar" style={{backgroundColor:"#fe5196",width:percent.toString()+"%",height:"100%",borderRadius:"10px"}}/>
            </div> 
            目前比率:{percent}%
            <button value={90} onClick={props.onClick}>增加比率至90</button>
            <button value={10} onClick={props.onClick}>減少比率至10</button>
        </div>
    );
}
export default ProgressDIY;