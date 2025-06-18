import { useSelector ,useDispatch } from "react-redux"
import { DecrementScore, IncrementScore } from "./Action/ScoreAction";

export function ScoreBoard(){

    const score = useSelector((state)=>{
        return state.ScoreReducer.score;
    })

    const dispatch=useDispatch();
    const handleadd=()=>{
        dispatch(IncrementScore());
    }
    const handleminus=()=>{
        dispatch(DecrementScore());
    }
    return(
        <div>
            <h1>{score}</h1>
            <button onClick={handleadd}>+</button>
            <button onClick={handleminus}>-</button>
        </div>
    )
}