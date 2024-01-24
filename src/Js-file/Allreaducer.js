import { combineReducers } from "redux";
import counterReducer from "./Action";



const allreducer=combineReducers({
       counter:counterReducer
});


export default allreducer;