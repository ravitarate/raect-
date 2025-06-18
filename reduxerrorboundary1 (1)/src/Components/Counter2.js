import { Component } from "react";

export class Counter2 extends Component{
    render(){
        return(
            <div>
                <h2>counter 2 is :</h2>
                <h3>{this.props.value}</h3>
                <button onClick={this.props.onClick}>ADD</button>
            </div>
        )
    }
}