import './logo.png';
import '../styles/LoginComponent.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function LoginComponent()
{   
    const navigate=useNavigate();

    const handleLogin=async()=>{
        try{
            const user={
                "email" : document.getElementById("email").value,
                "password" : document.getElementById("password").value
            }
            console.log("hii")
            axios.post("http://localhost:3001/login",user)
            .then((response)=>{
                console.log(response.data)
                localStorage.setItem("token" , response.data.token)
                //axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
                console.log(`Bearer ${response.data.token}`)
                localStorage.setItem("role" , response.data.role)
                navigate((response.data.role=='admin') ? "/admindashboard" : "/dashboard")
                return ;
            })
            .catch(error=>{
                
                navigate("/signup")
            })
        }
        catch(error){
            //navigate("/signup")
            //console.error(error)
        }
    }

    return(
    <>
        <div id="loginBox">
            <img src={require('./logo.png')}  alt="logo" srcset="" width="50px" height="50px" title="FurniHaven"/>
            <input id="email" type="email" placeholder="Email" />
            <input id="password" type="password" placeholder="Password" />
            <button id="submitButton" onClick={handleLogin}>Login</button>
            <Link to="/signup"   id="signinLink">Sign up instead</Link>
        </div>
    </>
    );
}
export default LoginComponent;