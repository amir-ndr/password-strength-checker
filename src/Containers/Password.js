import React, {Component} from "react";
import Input from '../Components/Input';
import Bar from '../Components/Bar';
import zxcvbn from 'zxcvbn';


const init={
    value:'',
    bgColor:'',
    result:'Enter Your Password',
    suggestion:'',
    width:'',
    height: '6px',
}

class Password extends Component {
    constructor(props){
        super (props);
        this.state=init;
    }

    onInputChange = (e)=>{
        this.setState({value : e.target.value});
        let res=zxcvbn(e.target.value);
        if(e.target.value.length !==0){
            if(res.score === 0){
                let w=(res.score + 1) * 140;
                this.setState({bgColor:this.props.strength[res.score].bgColor ,
                    height:'6px',
                    width:w.toString()+'px',
                    result:this.props.strength[res.score].text,
                    suggestion:res.feedback.suggestions,
                })
            }
            else if(res.score === 1){
                let w=(res.score + 1) * 140;
                this.setState({bgColor:this.props.strength[res.score].bgColor ,
                    height:'6px',
                    width:w.toString()+'px',
                    result:this.props.strength[res.score].text,
                    suggestion:res.feedback.suggestions,
                })
            }
            else if(res.score === 2){
                let w=(res.score + 1) * 140;
                this.setState({bgColor:this.props.strength[res.score].bgColor ,
                    height:'6px',
                    width:w.toString()+'px',
                    result:this.props.strength[res.score].text,
                    suggestion:res.feedback.suggestions,
                })
            }
            else if(res.score === 3){
                let w=(res.score + 1) * 140;
                this.setState({bgColor:this.props.strength[res.score].bgColor ,
                    height:'6px',
                    width:w.toString()+'px',
                    result:this.props.strength[res.score].text,
                    suggestion: '',
                })
            }
            else if(res.score === 4){
                let w=(res.score + 1) * 140;
                this.setState({bgColor:this.props.strength[res.score].bgColor ,
                    height:'6px',
                    width:w.toString()+'px',
                    result:this.props.strength[res.score].text,
                    suggestion:'',
                })
            }
        }
        else{
            this.setState({bgColor:'red' ,
                height:'6px',
                width:'700px',
                result:'Enter Your Password',
                suggestion:'',
            })
        }
    }
    render() {
        return (
            <div className='wrapper'>
                <p>Password Input</p>
                <Input type={'value'} value={this.state.value} onChange={this.onInputChange}/>
                <Bar height={this.state.height} width={this.state.width} bgColor={this.state.bgColor}/>
                <p id='result'>{this.state.result}</p>
                <p id='suggestion'>{this.state.suggestion}</p>
            </div>
        )
    }
}

export default Password;