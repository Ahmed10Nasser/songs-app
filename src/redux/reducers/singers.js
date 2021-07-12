import produce from "immer";
import { SET_SELECTED_SINGERS, SET_LOADING_SINGERS, SET_SINGERS, SET_CHANGING_SELECTED_SINGERS } from "../actions/singers";

const defaultSingers={
    isLoading: false,
    values:[],
    selected:[],
    isSelectionChanged: false
}

export default function singers(singers=defaultSingers, action){
    switch(action.type){
        case SET_LOADING_SINGERS:
            return produce(singers, newSingers=>{
                newSingers.isLoading=action.payload.isLoading;
            });
        case SET_SINGERS:
            return produce(singers, newSingers=>{
                newSingers.values=action.payload.values;
            });
        case SET_SELECTED_SINGERS:
            return produce(singers, newSingers=>{
                newSingers.selected[action.payload.index]=action.payload.value;
            });
        case SET_CHANGING_SELECTED_SINGERS:
            return produce(singers, newSingers=>{
                newSingers.isSelectionChanged=action.payload.isSelectionChanged;
            });
        default:
            return singers;
    }
}