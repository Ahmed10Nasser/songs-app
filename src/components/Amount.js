import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_amount, set_count } from "../redux/actions/generalInfo";

const Amount = () => {
    
    let generalInfo=useSelector(state=>state.generalInfo);
    let singers=useSelector(state=>state.singers);
    let dispatch=useDispatch();
    
    useEffect(()=>{
        let songsCount=0;
        let amount=0;
        switch(generalInfo.currentPage){
            case 1:
                singers.values.forEach((el,index) => {
                    if(singers.selected[index]){
                        songsCount+=el.count;
                        amount+=el.price;
                    }
                });
                break;
            default:
                songsCount+=0;
                amount+=0;
        }
        dispatch(set_count(songsCount));
        dispatch(set_amount(amount));
    });


    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Count</h5>
                <p className="card-text">{generalInfo.songsCount}</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Amount</h5>
                <p className="card-text">{generalInfo.amount}</p>
                </div>
            </div>
        </div>
    );
}
 
export default Amount