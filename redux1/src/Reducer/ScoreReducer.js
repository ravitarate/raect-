const initial={score:0};

export const ScoreReducer =(state=initial,action)=>{

    switch(action.type){
        case 'increment':
            return{score: state.score+4};

        case 'decrement':
             return{score: state.score-1};

        default:return state;
    }
}