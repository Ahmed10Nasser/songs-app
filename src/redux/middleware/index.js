import { all } from "redux-saga/effects";
import createSagaMiddleware from 'redux-saga';
import watchForSingersActions from "./singers";
import watchForAlbumsActions from "./albums";


export function* rootSaga(){
    yield all([watchForSingersActions(), watchForAlbumsActions()]);
}

export const sagaMiddleware=createSagaMiddleware();