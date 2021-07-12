import produce from "immer";
import { NEXT_PAGE, PREV_PAGE, SET_AMOUNT, SET_COUNT } from "../actions/generalInfo";

const  defaultGeneralInfo={
    currentPage: 1,
    songsCount: 0,
    amount: 0
}


export default function generalInfo(generalInfo= defaultGeneralInfo, action){
    switch(action.type){
        case NEXT_PAGE:
            return produce(generalInfo, newGeneralInfo=>{
                newGeneralInfo.currentPage=Math.min(4,newGeneralInfo.currentPage+1);
            });
        case PREV_PAGE:
            return produce(generalInfo, newGeneralInfo=>{
                newGeneralInfo.currentPage=Math.max(1, newGeneralInfo.currentPage-1);
            });
        case SET_COUNT:
            return produce(generalInfo, newGeneralInfo=>{
                newGeneralInfo.songsCount=action.payload.songsCount;
            })
        case SET_AMOUNT:
            return produce(generalInfo, newGeneralInfo=>{
                newGeneralInfo.amount=action.payload.amount;
            });
        default:
            return generalInfo;
    }
}