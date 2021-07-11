import { useState } from "react";
import Albums from "./Albums";
import Singers from "./Singers";
import Songs from "./Songs";

const Home = () => {

    const [page, setPage]=useState(1);
    const titles=['Select Singers', 'Select Albums', 'Select Songs', 'Submit Request'];

    return (
        <div className="container">
            <h2>{titles[page-1]}</h2>
            <div className="nav">
                <ul>
                    <li className={page===1 ? "selected" : ""}>1</li>
                    <li className={page===2 ? "selected" : ""}>2</li>
                    <li className={page===3 ? "selected" : ""}>3</li>
                    <li className={page===4 ? "selected" : ""}>4</li>
                </ul>
            </div>

            <div className="row">
                <div className="col-9">
                    {page===1 && <Singers></Singers>}
                    {page===2 && <Albums></Albums>}
                    {page===3 && <Songs></Songs>}
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Count</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Amount</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-secondary" onClick={()=>setPage( Math.max(page-1,1))}>Prev</button>
            <button type="button" className="btn btn-primary" onClick={()=>setPage(Math.min(page+1,4))}>Next</button>
        </div>
    );
}
 
export default Home;