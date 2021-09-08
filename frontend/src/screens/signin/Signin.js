import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signin } from '../../redux/actions/userActions'

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("Email:", email, "Password:", password);
        dispatch(signin(email, password));
    }

    return (
       <div className="signin">
           <form className="form__signin" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    <label>Email Adress</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <button type="submit" className="signin__button">Sign In</button>
                <div className="register__signig">
                    New Customer? <Link to="/to">Create an account</Link>
                </div>
           </form>
       </div>

    )
}

export default Signin
