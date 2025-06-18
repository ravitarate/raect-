const  initial={theme:'light'}
export const ThemeReducer=(state=initial,action)=>{

    switch(action.type){
    case 'CHANGE_THEME':
        return state.theme==='light' ? {theme:'dark'} : {theme:'light'}
    default: return state;
    }
}