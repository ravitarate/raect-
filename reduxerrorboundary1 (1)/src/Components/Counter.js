import { useState } from "react"
import { Counter1 } from "./Counter1";
import { Counter2 } from "./Counter2";
import { ErrorBoundary } from "./ErrorBoundary";

export function Counter(){

    const[counter1,setCounter1]=useState(0);
    const incrementCounter1=()=>{
        setCounter1(counter1+1);
    }
    const[counter2,setCounter2]=useState(0);
    const incrementCounter2=()=>{
        setCounter2(counter2+1);
    }
    return(
        
        <div>
        <div>
            <ErrorBoundary>
        <Counter1 value={counter1} onClick={incrementCounter1}></Counter1>
        </ErrorBoundary>
        </div>
         <div>
        <Counter2 value={counter2} onClick={incrementCounter2}></Counter2>
        </div>
        </div>
    )
}