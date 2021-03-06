import { useDispatch, useSelector } from "react-redux";
import {set_selected_singers, set_changing_selected_singers} from "../redux/actions/singers";

const Singers = () => {

    let singers=useSelector(state=>state.singers);
    let dispatch=useDispatch();



    return (

    <div className="container">

        {singers.isLoading
            ?(
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            )
            :(
                singers.values.map((singer,index)=>(
                    <div className="option" key={singer.id}>
                        <label htmlFor={singer.id}>
                            <input type="checkbox" className="checkbox" id={singer.id} value={singer.name}
                            required
                            checked={singers.selected[index] || false}                
                            onChange={(e)=>{dispatch(set_selected_singers(index,e.target.checked)); dispatch(set_changing_selected_singers(true));}}
                            />
                            <div className="content">
                                <h4>{singer.name}</h4>
                            </div>
                        </label>
                    </div>
                ))
            )
        
        }
         
    </div>
    );
}
 
export default Singers;