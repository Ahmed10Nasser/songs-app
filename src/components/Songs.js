import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_changing_selected_albums } from "../redux/actions/albums";
import { get_songs, set_selected_songs } from "../redux/actions/songs";

const Songs = () => {

    let songs=useSelector(state=>state.songs);
    let albums=useSelector(state=>state.albums);
    let dispatch=useDispatch();


    useEffect(()=>{
        if(albums.isSelectionChanged){
            let query="";
            albums.values.forEach((el, index)=>{
                if(albums.selected[index])
                    query+=`${(query.length===0) ? '' : '&'}id=${el.id}`;
            });
            dispatch(get_songs(query));
            dispatch(set_changing_selected_albums(false));
        }
    });
    return (
        <div className="container">
    
            {songs.isLoading
                ?(
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                )
                :(
                    songs.values.map((album,albumIndex)=>(
                        <div className="card bg-light mb-3" key={album.id}>
                            <div className="card-header">{album.name}</div>
                            <div className="card-body">
                                {album.songs.map((song,songIndex)=>(
                                    <div  key={song.id}>
                                        <input type="checkbox" id={song.id} value={song.name}
                                            checked={songs.selected[albumIndex][songIndex] || false}                
                                            onChange={(e)=>dispatch(set_selected_songs(albumIndex, songIndex,e.target.checked))}
                                        />
                                        <label htmlFor={song.id}>{song.name}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )
            
            }
        </div>
    );
}
 
export default Songs;