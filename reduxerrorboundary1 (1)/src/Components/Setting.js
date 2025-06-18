import { useDispatch, useSelector } from "react-redux"
import { ChangeLanguage } from "../Actions/Language";
import { ChangeTheme } from "../Actions/Theme";

export function Setting(){ 
    const langauge = useSelector((state)=>{
        
        return state.LanguageReducer.lang;
    })
     const theme = useSelector((state)=>{
        
        return state.ThemeReducer.theme;
    })

    const Dispatch = useDispatch();
     const Handlelang=()=>{
         Dispatch(ChangeLanguage());
    }
    const Handletheme=()=>{
         Dispatch(ChangeTheme());
    }

    return(
        <div>
        <h1>{langauge}-----------{theme}</h1>
        <button onClick={Handlelang}> langaugeConvert</button>
        <button onClick={Handletheme}> ThemeConvert</button>
        </div>
    )
}