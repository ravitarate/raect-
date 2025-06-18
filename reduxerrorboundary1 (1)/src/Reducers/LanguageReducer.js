

const  initial={lang:'english'}
export const LanguageReducer=(state=initial,action)=>{

    switch(action.type){
    case 'CHANGE_LANGUAGE':
        return state.lang==='english' ? {lang:'marathi'} : {lang: 'english'}
    default: return state;
    }
}