
import { Component } from "react";
export class Counter1 extends Component{
    render(){
        if(this.props.value>5)
            throw new Error("too many values");
        return(
            <div>
                 <h2>counter 1 is :</h2>
                <h3>{this.props.value}</h3>
                <button onClick={this.props.onClick}>ADD</button>
            </div>
        )
    }
}