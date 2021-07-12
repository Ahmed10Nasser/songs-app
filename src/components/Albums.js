import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_albums, set_changing_selected_albums, set_selected_albums } from "../redux/actions/albums";
import { set_changing_selected_singers } from "../redux/actions/singers";

const Albums = () => {
    

    let albums=useSelector(state=>state.albums);
    let singers=useSelector(state=>state.singers);
    let dispatch=useDispatch();

    useEffect(()=>{
        if(singers.isSelectionChanged){
            let query="";
            singers.values.forEach((el, index)=>{
                if(singers.selected[index])
                    query+=`${(query.length===0) ? '' : '&'}singer_id=${el.id}`;
            });
            dispatch(get_albums(query));
            dispatch(set_changing_selected_singers(false));
        }
    });


    return (
        <div className="container">
    
            {albums.isLoading
                ?(
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                )
                :(
                    albums.values.map((album,index)=>(
                        <div className="singer" key={album.id}>
                            <label htmlFor={album.id}>
                                <input type="checkbox" id={album.id} value={album.name}
                                checked={albums.selected[index] || false}                
                                onChange={(e)=>{dispatch(set_selected_albums(index,e.target.checked)); dispatch(set_changing_selected_albums(true));}}
                                />
                                <div className="content">
                                    <h3>{album.name}</h3>
                                </div>
                            </label>
                        </div>
                    ))
                )
            
            }
             
        </div>
    );
}
 
export default Albums;