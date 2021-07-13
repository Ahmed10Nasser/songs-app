import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_amount, set_count } from "../redux/actions/generalInfo";

const Amount = () => {
    
    let state=useSelector(state=>state);
    let dispatch=useDispatch();
    
    useEffect(()=>{
        let songsCount=0;
        let amount=0;
        switch(state.generalInfo.currentPage){
            case 1:
                state.singers.values.forEach((el,index) => {
                    if(state.singers.selected[index]){
                        songsCount+=el.count;
                        amount+=el.price;
                    }
                });
                break;
            case 2:
                state.albums.values.forEach((el,index) => {
                    if(state.albums.selected[index]){
                        songsCount+=el.count;
                        amount+=el.price;
                    }
                });
                break;
            case 3:
                state.songs.values.forEach((album, albumIndex)=>{
                    album.songs.forEach((song, songIndex)=>{
                        if(state.songs.selected[albumIndex] && state.songs.selected[albumIndex][songIndex]){
                            songsCount++;
                            amount+=song.price;
                        }
                    });
                });
                break;
            case 4:
                songsCount=state.generalInfo.songsCount;
                amount=state.generalInfo.amount;
                break;
            default:
                break;
        }
        dispatch(set_count(songsCount));
        dispatch(set_amount(amount));
    });


    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Count</h5>
                <p className="card-text">{state.generalInfo.songsCount}</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Amount</h5>
                <p className="card-text">{state.generalInfo.amount}</p>
                </div>
            </div>
        </div>
    );
}
 
export default Amount