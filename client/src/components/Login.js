import { useState,useEffect} from 'react'
import './Login.css'
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/auth-bg1.jpg";

    
function Login({user, setUser, logout}) {

  const navigate = useNavigate();
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)


  const onLogin = ()=>{
    const userParams ={
      username: username,
      password: password
    }

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userParams),
      credentials: "include",
    })
    .then((r) => r.json())
    .then((data) => {
      if (data.logged_in) {
        setUser({...user, user: data.user, isLoggedIn: data.logged_in})
      } 
    })
    .catch(error => console.log('api errors:', error))
  }

  useEffect(()=>{
    if(user.isLoggedIn){
      navigate("/dogs");
    }
  },[user])

  return(

    
   <>
   
  <div class="auth-wrapper" style={{backgroundImage:`url(${bgImage})`}}>
  <div className="form-container">
    
     <form className="login-form" logo="../logo.png" >

       <input className="form-field" type="text" placeholder='username' value={username} onChange={(e)=> setUsername(e.target.value)} />
      
       <input className="form-field" type="password" placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
      
       <button type="button" className="form-field" onClick={()=>onLogin()}>Login</button> 
     </form>
   </div>
  </div>
  </>
  )
  
}

export default Login