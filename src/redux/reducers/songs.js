import produce from "immer";
import { CLEAR_SELECTED_SONGS, SET_LOADING_SONGS, SET_SELECTED_SONGS, SET_SONGS } from "../actions/songs";

const defaultSongs={
    isLoading: false,
    values:[],
    selected:[]
}

export default function songs(songs=defaultSongs, action){
    switch(action.type){
        case SET_LOADING_SONGS:
            return produce(songs, newSongs=>{
                newSongs.isLoading=action.payload.isLoading;
            });
        case SET_SONGS:
            return produce(songs, newSongs=>{
                newSongs.values=action.payload.values;
            });
        case SET_SELECTED_SONGS:
            return produce(songs, newSongs=>{
                newSongs.selected[action.payload.albumIndex][action.payload.songIndex]=action.payload.value;
            });
        case CLEAR_SELECTED_SONGS:
            return produce(songs, newSongs=>{
                newSongs.selected=new Array(action.payload.len).fill([]);
            });
        default:
            return songs;
    }
}