import produce from "immer";
import { SET_SELECTED_SINGERS, SET_LOADING_SINGERS, SET_SINGERS } from "../actions/singers";

const defaultSingers={
    isLoading: false,
    values:[],
    selected:[]
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
        default:
            return singers;
    }
}