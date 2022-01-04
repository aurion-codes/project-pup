import { useState,useEffect} from 'react'
import './Login.css'

    
function Login({users, setUser}) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const 
  

  handleLogin = (data) => {
    setUsername({
      isLoggedIn: true,
      user: data.user
    })
  }
handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  useEffect(() => {

  

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