import { useState} from 'react'
import { useNavigate } from "react-router-dom";
import './Login.css'


function Login({users, setUser}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate= useNavigate()
    const onLogin=()=>{
      // console.log(users)
      
       const currentUser= users.find((user)=> user.username===username && user.password_digest===password)
       console.log(currentUser)
       if(currentUser){
         setUser(currentUser)
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
       
        <button type="text" className="form-field" onClick={onLogin}>Login</button>    
    
      </form>
    </div>

    </>

    
  );
    // return(
    //    <div className='Login' >
    //      <input placeholder='username' value={username} onChange={(e)=> setUsername(e.target.value)} />
    //      <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
    //     <div className='loginBtnWrapper'>
    //     <button onClick={onLogin}  >Login</button>
    //     </div>
    //    </div>
    // )
}

export default Login