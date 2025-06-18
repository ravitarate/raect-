import { useSelector } from "react-redux";

export function ScoreCart(){
    const score = useSelector((state)=>{
        return state.ScoreReducer.score;
    })


    return(
        <h1>Virat Scores {score} runs.</h1>
    )
}