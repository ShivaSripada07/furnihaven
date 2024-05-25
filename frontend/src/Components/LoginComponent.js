import './logo.png';
import '../styles/LoginComponent.css';
function LoginComponent()
{
    return(
    <>
        <div id="loginBox">
            <img src={require('./logo.png')}  alt="logo" srcset="" width="50px" height="50px" title="FurniHaven"/>
            <input id="email" type="email" placeholder="Email" />
            <input id="password" type="password" placeholder="Password" />
            <button id="submitButton">Login</button>
            <a id="signinLink" href="/signup">Sign up instead</a>
        </div>
    </>
    );
}
export default LoginComponent;