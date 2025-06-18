import { rootReducer } from "../Reducers/RootReducer";
import {configureStore} from "@reduxjs/toolkit";

export const Store = configureStore({reducer:rootReducer})