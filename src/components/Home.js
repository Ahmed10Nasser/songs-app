import { useDispatch, useSelector } from "react-redux";
import { next_page, prev_page } from "../redux/actions/generalInfo";
import Albums from "./Albums";
import Amount from "./Amount";
import Form from "./Form";
import Receipt from "./Receipt";
import Singers from "./Singers";
import Songs from "./Songs";

const Home = () => {

    const titles=['Select Singers', 'Select Albums', 'Select Songs', 'Submit Request'];

    let currentPage= useSelector(state=>state.generalInfo.currentPage);
    let dispatch=useDispatch();

    return (
        <div className="container">
            <h2>{titles[currentPage-1]}</h2>
            <div className="nav">
                <ul>
                    <li className={currentPage===1 ? "selected" : ""}>1</li>
                    <li className={currentPage===2 ? "selected" : ""}>2</li>
                    <li className={currentPage===3 ? "selected" : ""}>3</li>
                    <li className={currentPage===4 ? "selected" : ""}>4</li>
                </ul>
            </div>

            <div className="row">
                <div className="col-9">
                    {currentPage===1 && <Singers></Singers>}
                    {currentPage===2 && <Albums></Albums>}
                    {currentPage===3 && <Songs></Songs>}
                    {currentPage===4 && <Form></Form>}
                    {currentPage===5 && <Receipt></Receipt>}
                </div>
                <div className="col-3">
                    <Amount></Amount>
                </div>
            </div>
            <div className="buttons">
                {currentPage>1 && <button type="button" className="btn btn-secondary" onClick={()=>dispatch(prev_page())}>Prev</button>}
                {currentPage<4 && <button type="button" className="btn btn-primary" onClick={()=>dispatch(next_page())}>Next</button>}
            </div>
        </div>
    );
}
 
export default Home;