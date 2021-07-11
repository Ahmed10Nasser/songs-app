export const SET_LOADING_SINGERS="set_loading_singers";
export const GET_SINGERS="get_singers";
export const SET_SINGERS="set_singers";
export const SET_SELECTED_SINGERS="set_selected_singers"

export function set_loading_singers(isLoading){
    return{
        type: SET_LOADING_SINGERS,
        payload:{
            isLoading: isLoading
        }
    }
}

export function get_singers(){
    return{
        type: GET_SINGERS
    }
}

export function set_singers(values){
    return{
        type: SET_SINGERS,
        payload:{
            values: values
        }
    }
}

export function set_selected_singers(index,value){
    return{
        type: SET_SELECTED_SINGERS,
        payload:{
            index: index,
            value: value
        }
    }
}