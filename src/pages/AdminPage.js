import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {auth} from "../firebase-config"
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
let AdminPage = () => {
    const [error, setError] = useState(false);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext);

    const handleLogin = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,username,password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({type:"LOGIN", payload:user});
                navigate("/organize-event/abstract");
            })
            .catch((error)=>{
                console.log(error);
                setError(true);
            })
    }
    return(
        <>
        <div className="login-container">
            <h1>Admin Login</h1>
            <form className="login-form" onSubmit={handleLogin}>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" id="username" onChange={(e)=>setUserName(e.target.value)}/>
                <label htmlFor="password" >Password</label>
                <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)} />
                <input type="submit" value="Login" id="admin-login-btn"/>
                {error && <span className="login-error">Wrong password or username</span>}
            </form>
        </div>
        </>
    )
}
export default AdminPage;