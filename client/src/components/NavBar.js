import {NavLink} from 'react-router-dom'

function NavBar({user, setUser}){


  // let user = localStorage.getItem("user")
    
    
      const linkstyles = {
        display: "inline-block",
        width: "160px",
        padding: "12px",
        margin: "0 6px 6px",
        textDecoration:"none",
        color: "black",
      };

      const handleLogout=()=>{
        localStorage.removeItem("user")
        setUser('')
      }
      

    return (

        <>

       {
           user ?
           <div 
           onClick={()=> handleLogout()}
            
        >
          Logout
        </div>
           :
           <NavLink 
           to="/login"
           style={linkstyles}
           activestyle={{
               background: "darblue"
           }}
        >
          Login
        </NavLink>
       }
        <NavLink
            to="/about"
            style={linkstyles}
            activestyle={{
                background: "darkblue"
            }}
        >
          About Us
        </NavLink>
        <NavLink 
            to="/dogs"
            style={linkstyles}
        >
            Dogs
        </NavLink>
        {
          user  ?  <NavLink 
          to="/dog-form"
          style={linkstyles}
      >
          AddDog
      </NavLink>   : null 
        }
        <NavLink 
            to="/profile"
            style={linkstyles}
        >
            Dogs
        </NavLink>
       

        <div>
          
        </div>
        </>
    ) 



}

export default NavBar