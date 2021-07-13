import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const Receipt = () => {

    let albumSongs=useSelector(state=>state.songs);
    let generalInfo=useSelector(state=>state.generalInfo);
    let form=useSelector(state=>state.form);

    return (
        <div className="container receipt mt-5">
            <div className="invoice-box">
            <tt>
			<table>
                <tbody>

                    <tr className="information">
                        <td className="bold">
                            Name<br />
                            Email<br />
                            Phone
                        </td>

                        <td>
                            {form.name}<br />
                            {form.email}<br />
                            {form.phone}
                        </td>
                    </tr>
                    <tr><td></td></tr>
                    <tr><td></td></tr>
                    <tr><td></td></tr>
                    <tr className="heading">
                        <td>Selected Songs</td>
                        <td>Album</td>
                        <td>Price</td>
                    </tr>
                    
                    {albumSongs.values.map((album, albumIndex)=>(
                        album.songs.map((song, songIndex)=>(

                            <tr className="item" key={song.id}>
                            {albumSongs.selected[albumIndex][songIndex] && 
                                <>
                                    <td>{song.name}</td>
                                    <td>{album.name}</td>
                                    <td>L.E. {song.price}</td>
                                </>
                                }
                            </tr>
                        ))
                    ))}

                    <tr><td></td></tr>
                    <tr><td></td></tr>
                    
                    <tr className="total">
                        <td>Total count: {generalInfo.songsCount}</td>
                        <td></td>
                        <td>Total amount: {generalInfo.amount}</td>
                    </tr>
                    
                </tbody>
			</table>
            </tt>
            </div>

            <div class="alert alert-success mt-5 w-25 mx-auto thanks" role="alert">
                Thank you for choosing us!
            </div>
        </div>

    );
}
 
export default Receipt;