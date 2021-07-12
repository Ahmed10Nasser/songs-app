import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';
import { GET_SINGERS, set_loading_singers, set_singers } from '../actions/singers';


function* get_singers_saga(action){
    yield put(set_loading_singers(true));
    let res= yield axios.get('http://localhost:8000/singers');
    yield put(set_singers(res.data));
    yield put(set_loading_singers(false));
}

export default function* watchForSingersActionds(){
    yield takeEvery(GET_SINGERS, get_singers_saga);
}