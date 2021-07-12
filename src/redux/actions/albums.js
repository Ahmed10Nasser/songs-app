export const SET_LOADING_ALBUMS="set_loading_albums";
export const GET_ALBUMS="get_albums";
export const SET_ALBUMS="set_albums";
export const SET_SELECTED_ALBUMS="set_selected_albums"
export const SET_CHANGING_SELECTED_ALBUMS="set_changing_selected_albums";
export const CLEAR_SELECTED_ALBUMS="clear_selected_albums";

export function set_loading_albums(isLoading){
    return{
        type: SET_LOADING_ALBUMS,
        payload:{
            isLoading: isLoading
        }
    }
}

export function get_albums(query){
    return{
        type: GET_ALBUMS,
        payload:{
            query: query
        }
    }
}

export function set_albums(values){
    return{
        type: SET_ALBUMS,
        payload:{
            values: values
        }
    }
}

export function set_selected_albums(index,value){
    return{
        type: SET_SELECTED_ALBUMS,
        payload:{
            index: index,
            value: value
        }
    }
}

export function set_changing_selected_albums(isSelectionChanged){
    return{
        type: SET_CHANGING_SELECTED_ALBUMS,
        payload:{
            isSelectionChanged: isSelectionChanged
        }
    }
}

export function clear_selected_albums(){
    return{
        type: CLEAR_SELECTED_ALBUMS
    }
}