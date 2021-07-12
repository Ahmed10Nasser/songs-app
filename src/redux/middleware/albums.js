import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';
import { clear_selected_albums, GET_ALBUMS, set_albums, set_loading_albums } from '../actions/albums';


function* get_albums_saga(action){
    yield put(set_loading_albums(true));
    let res= yield axios.get(`http://localhost:8000/AlbumsInfo?${action.payload.query}`);
    yield put(set_albums(res.data));
    yield put(clear_selected_albums(res.data.lenght));
    yield put(set_loading_albums(false));
}

export default function* watchForAlbumsActions(){
    yield takeEvery(GET_ALBUMS, get_albums_saga);
}