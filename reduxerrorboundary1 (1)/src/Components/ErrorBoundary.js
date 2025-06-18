import { Component } from "react";

export class ErrorBoundary extends Component{

    state={
        error:''
    }
    static getDerivedStateFromError(er){
        return{
            error:er
        }
    }
    componentDidCatch(error,info){
        console.log('error is ',error);
        console.log('info is ',info);

    }
    render(){
        if(this.state.error){
            return(
                <div>
                    <h2>some error occured</h2>
                  
                </div>
            )
        }
       return this.props.children

        }

}