import { useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import './Login.css'


function Login({users, setUser}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate= useNavigate()



    useEffect(() => {
      
     const user =  localStorage.getItem("user")
     if(user){
      navigate('/dogs')
     }else{
      navigate('/login')
     }
   
    }, [])

    const onLogin=()=>{ 
      // console.log(users)
      
       const currentUser= users.find((user)=> user.username===username && user.password_digest===password)
       if(currentUser){
         setUser(currentUser)
         localStorage.setItem("user", JSON.stringify(currentUser));
         console.log(currentUser)
          navigate('/dogs')
          
       }
    }

    

    return(

      
     <>
    <div className="form-container">
       
      <form className="login-form">
  
        <input className="form-field" type="text" placeholder='username' value={username} onChange={(e)=> setUsername(e.target.value)} />
       
        <input className="form-field" type="password" placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
       
        <button type="button" className="form-field" onClick={onLogin}>Login</button> 
      </form>
      </div>
      {/* <div className="form-container">
       
      <form className="signup-form">
      <input className="form-field" type="text" placeholder='fullname' value={username} onChange={(e)=> setUsername(e.target.value)} />
       
       <input className="form-field" type="password" placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
  
        <input className="form-field" type="text" placeholder='username' value={username} onChange={(e)=> setUsername(e.target.value)} />
       
        <input className="form-field" type="password" placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
       
        <button type="button" className="form-field" onClick={onLogin}>Login</button> 
      </form>
      </div>
     */}
    
    

    </>
    )
    
}

export default Login