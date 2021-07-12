export const SET_LOADING_SONGS="set_loading_songs";
export const GET_SONGS="get_songs";
export const SET_SONGS="set_songs";
export const SET_SELECTED_SONGS="set_selected_songs"
export const CLEAR_SELECTED_SONGS="clear_selected_songs";

export function set_loading_songs(isLoading){
    return{
        type: SET_LOADING_SONGS,
        payload:{
            isLoading: isLoading
        }
    }
}

export function get_songs(query){
    return{
        type: GET_SONGS,
        payload:{
            query: query
        }
    }
}

export function set_songs(values){
    return{
        type: SET_SONGS,
        payload:{
            values: values
        }
    }
}

export function set_selected_songs(albumIndex,songIndex,value){
    return{
        type: SET_SELECTED_SONGS,
        payload:{
            albumIndex: albumIndex,
            songIndex: songIndex,
            value: value
        }
    }
}


export function clear_selected_songs(len){
    return{
        type: CLEAR_SELECTED_SONGS,
        payload:{
            len: len
        }
    }
}