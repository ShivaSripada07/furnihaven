import './logo.png';
import '../styles/RegisterComponent.css'
function RegisterComponent()
{
    return(
        <>
        <div id="signupBox">
        <img src={require('./logo.png')}  alt="logo" srcset="" width="50px" height="50px" title="FurniHaven"/>
        <input id="email" type="email" placeholder="Email" />
        <input id="username" type="text" placeholder="Username" />
        <input id="mobilenumber" type="tel" placeholder="Mobile Number" />
        <input id="password" type="password" placeholder="Password" />
        <input id="confirmpassword" type="password" placeholder="Confirm Password" />
        <a id="signinLink" href="/login">Sign in instead</a>
        <button id="submitButton">Sign up</button>
    </div>
        </>
    );
}
export default RegisterComponent;