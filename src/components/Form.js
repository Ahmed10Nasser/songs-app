import { useDispatch, useSelector } from "react-redux";
import { set_email, set_name, set_phone } from "../redux/actions/form";

const Form = () => {

    let form=useSelector(state=>state.form);
    let dispatch=useDispatch();

    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="formName">Name</label>
                    <input type="text" className="form-control" id="formName" 
                        required
                        value={form.name}
                        onChange={(e)=>dispatch(set_name(e.target.value))}
                    />
                </div>
                <div className="form-group">
                    <label  htmlFor="formEmail">Email</label>
                    <input type="email" className="form-control" id="formEmail" aria-describedby="emailHelp"
                        required
                        value={form.email}
                        onChange={(e)=>dispatch(set_email(e.target.value))}
                    />
                </div>
                <div className="form-group">
                    <label  htmlFor="formPhone">Phone Number</label>
                    <input type="tel" className="form-control" id="formPhone" pattern="[+]{1}[0-9]{11,14}"
                        required
                        value={form.phone}
                        onChange={(e)=>dispatch(set_phone(e.target.value))}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    );
}
 
export default Form;