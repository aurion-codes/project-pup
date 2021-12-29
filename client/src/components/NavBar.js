import {NavLink} from 'react-router-dom'

function NavBar(){

    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };

    return (

        <>

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
        <NavLink
            to="/"
            exact
            style={linkStyles}
            activeStYle={{
                background: "darkblue"
            }}
        >
          About Us
        </NavLink>
        </>
    ) 



}

export default NavBar