import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { clear_selected_songs, GET_SONGS, set_loading_songs, set_songs } from "../actions/songs";



function* get_songs_saga(action){
    yield put(set_loading_songs(true));
    let res=yield axios.get(`http://localhost:8000/AlbumsSongs?${action.payload.query}`);
    yield put(set_songs(res.data));
    yield put(clear_selected_songs(res.data.length));
    yield put(set_loading_songs(false));
}



export default function* watchForSongsActions(){
    yield takeEvery(GET_SONGS, get_songs_saga);
}