import { combineReducers } from "redux";
import dataReducer from "./Reducer_2";

const rootReducer = combineReducers({
  datareducer: dataReducer,
});

export default rootReducer;

//setelah ini root Reducer akan ditangkap oleh index.js step tertinggi
