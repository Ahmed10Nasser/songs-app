import { all } from "redux-saga/effects";
import createSagaMiddleware from 'redux-saga';
import watchForSingersActions from "./singers";
import watchForAlbumsActions from "./albums";
import watchForSongsActions from "./songs";


export function* rootSaga(){
    yield all([
        watchForSingersActions(), 
        watchForAlbumsActions(),
        watchForSongsActions()
    ]);
}

export const sagaMiddleware=createSagaMiddleware();