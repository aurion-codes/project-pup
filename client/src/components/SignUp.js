import React from 'react'

function SignUp() {
    return (
        
        <div className="login">
   
          <div>
         <h1 className="loginHeading">Login</h1>
       <div className="form-container">
        
          
         <form className="login-form">
     
           <input className="form-field" type="text" placeholder='username' value={username} onChange={(e)=> setUsername(e.target.value)} />
          
           <input className="form-field" type="password" placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
          
           <button type="button" className="form-field" onClick={onLogin}>Login</button> 
         </form>
                                             
         
         </div>
         </div>
         </div>

    
    )
}

export default SignUp
