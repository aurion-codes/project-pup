import {NavLink} from 'react-router-dom'

function NavBar({user, setUser}){
    
      const linkStyles = {
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
           user?
           <div 
           onClick={()=> setUser('')}
            
        >
          Logout
        </div>
           :
           <NavLink 
           to="/login"
           exact
           style={linkStyles}
           activeStyle={{
               background: "darblue"
           }}
        >
          Login
        </NavLink>
       }
        <NavLink
            to="/about"
            exact
            style={linkStyles}
            activeStYle={{
                background: "darkblue"
            }}
        >
          About Us
        </NavLink>
        <NavLink 
            to="/dogs"
            exact
            style={linkStyles}
        >
            Dogs
        </NavLink>
        <NavLink 
            to="/dog-form"
            exact
            style={linkStyles}
        >
            AddDog
        </NavLink>

        <div>
            {/* name */}
        </div>
        </>
    ) 



}

export default NavBar