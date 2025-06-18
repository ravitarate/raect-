import {configureStore} from "@reduxjs/toolkit"
import { rootreducer } from "../Reducer/RootReducer"


export const store = configureStore({reducer:rootreducer})