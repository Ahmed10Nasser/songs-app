export const NEXT_PAGE="next_page";
export const PREV_PAGE="prev_page";
export const SET_COUNT="set_count";
export const SET_AMOUNT="set_amount";

export function next_page(){
    return{
        type: NEXT_PAGE
    }
}

export function prev_page(){
    return{
        type: PREV_PAGE
    }
}

export function set_count(songsCount){
    return{
        type: SET_COUNT,
        payload:{
            songsCount: songsCount
        }
    }
}

export function set_amount(amount){
    return{
        type: SET_AMOUNT,
        payload:{
            amount: amount
        }
    }
}