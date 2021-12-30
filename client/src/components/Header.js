import NavBar from "./NavBar";

function Header({user, setUser}) {

    return(
        <>
        <NavBar user={user} setUser={setUser} />
        </>
    )
}

export default Header;