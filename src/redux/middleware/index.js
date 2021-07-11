import { all } from "redux-saga/effects";
import createSagaMiddleware from 'redux-saga';
import watchForSingersAction from "./singers";


export function* rootSaga(){
    yield all([watchForSingersAction()]);
}

export const sagaMiddleware=createSagaMiddleware();