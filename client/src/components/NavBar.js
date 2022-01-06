import {NavLink} from 'react-router-dom'
import {Navbar, Nav, Container} from 'react-bootstrap';

function NavBar({user, logout, setUser}){


  // let user = localStorage.getItem("user")
    
    
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
     <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/dogs">Dogs</Navbar.Brand>
        <Nav className="mx-auto"> 
          <Nav.Link href="/about"> About </Nav.Link>
          <Nav.Link href="/dogForm"> Add Dog </Nav.Link>
          
          {user.isLoggedIn && <Nav.Link href="/profile"> Profile </Nav.Link> }
        </Nav>
        <Nav>  
          {
            user.isLoggedIn ?
            <div onClick={()=> logout()}>
              Logout
            </div>
            :
            <Nav.Link href="/login"> Login </Nav.Link>
          }
        </Nav>
      </Container>
    </Navbar>
  </>
) 
}
export default NavBar