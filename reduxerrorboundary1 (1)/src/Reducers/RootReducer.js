import { LanguageReducer } from "./LanguageReducer";
import { ThemeReducer } from "./ThemeReducer";
import {combineReducers} from "redux"

export const rootReducer = combineReducers({LanguageReducer,ThemeReducer});
