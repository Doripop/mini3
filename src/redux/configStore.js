import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import login from "./module/login";
import crud from "./module/crud";

const middlewares = [thunk];
const enhencer = applyMiddleware(...middlewares); //미들웨어

const rootReducer = combineReducers({ login, crud });
//루트 리듀서를 만들어서  ----->컴바인 (리듀서 모음)을가지고 크리에이트 스토어를 만든다.
const store = createStore(rootReducer, enhencer);

export default store;
