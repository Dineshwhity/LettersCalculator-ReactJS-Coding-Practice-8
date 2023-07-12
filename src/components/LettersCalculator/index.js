// Write your code here.
import {Component} from "react"
import "./index.css"
class LetterCalculator extends Component{
    state={inputPharse:"",}

    onChangeInput=event=>{
        const{value}=event.target
        this.setState({inputPharse:value})
    }
    render(){
        const {inputPharse}=this.state

        return(
            <div className="main-container">
            <div className="letters-container">
            <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
            <label className="label" htmlFor="phrase">Enter the phrase</label>
            <input className="letterinput" id="phrase" onChange={this.onChangeInput}paceholde="Enter the phrase" type="text" value={inputPharse}/>
            </div>
            <p className="letter-count">No.of letters: {inputPharse.length}</p>
            </div>
            <img  src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png " className="image" alt="letters calculator"/>
            </div>
            </div>
        )
    }

}
export default LetterCalculator