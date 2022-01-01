import {NavLink} from 'react-router-dom'

function NavBar({user, setUser}){

    
    
      const linkstyles = {
        display: "inline-block",
        width: "160px",
        padding: "12px",
        margin: "0 6px 6px",
        textDecoration:"none",
        color: "black",
      };
      

    return (

        <>

       {
           user ?
           <div 
           onClick={()=> setUser('')}
            
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
        <NavLink 
            to="/dog-form"
            style={linkstyles}
        >
            AddDog
        </NavLink>

        <div>
          
        </div>
        </>
    ) 



}

export default NavBar