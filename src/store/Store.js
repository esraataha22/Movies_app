import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Reducers from "./Reducer";


export const store = createStore(Reducers, applyMiddleware(thunk))