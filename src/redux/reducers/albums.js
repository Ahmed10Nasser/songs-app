import produce from "immer";
import { CLEAR_SELECTED_ALBUMS, SET_ALBUMS, SET_CHANGING_SELECTED_ALBUMS, SET_LOADING_ALBUMS, SET_SELECTED_ALBUMS } from "../actions/albums";

const defaultAlbums={
    isLoading: false,
    values:[],
    selected:[],
    isSelectionChanged: false
}

export default function albums(albums=defaultAlbums, action){
    switch(action.type){
        case SET_LOADING_ALBUMS:
            return produce(albums, newAlbums=>{
                newAlbums.isLoading=action.payload.isLoading;
            });
        case SET_ALBUMS:
            return produce(albums, newAlbums=>{
                newAlbums.values=action.payload.values;
            });
        case SET_SELECTED_ALBUMS:
            return produce(albums, newAlbums=>{
                newAlbums.selected[action.payload.index]=action.payload.value;
            });
        case SET_CHANGING_SELECTED_ALBUMS:
            return produce(albums, newAlbums=>{
                newAlbums.isSelectionChanged=action.payload.isSelectionChanged;
            });
        case CLEAR_SELECTED_ALBUMS:
            return produce(albums, newAlbums=>{
                newAlbums.selected=[];
            });
        default:
            return albums;
    }
}