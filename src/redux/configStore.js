import { combineReducers, createStore } from "redux";
import {gioHangReducer} from './Reducers/gioHangReducer'
import { gameXucXacReducer } from "./Reducers/gameXucXacReducer";
//state tổng của ứng dụng



const rootReducer = combineReducers({
  //nơi chứa state của ứng dụng
  gameXucXacReducer : gameXucXacReducer,
  gioHangReducer,
  numberReducer : (state=1) => {
    return state;
  }
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
