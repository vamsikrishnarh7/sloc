import { Link } from "react-router-dom";
let AdminPage = () => {
    return(
        <>
        <div className="login-container">
            <h1>Admin Login</h1>
            <form className="login-form">
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" id="username" />
                <label htmlFor="password" >Password</label>
                <input type="password" id="password" />
                <a href="/" id="forgot-password-btn">forgot password?</a>
                <Link to='/organize-event'><input type="submit" value="Login" id="admin-login-btn"/></Link>
            </form>
        </div>
        </>
    )
}
export default AdminPage;