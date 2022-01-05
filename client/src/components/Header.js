import NavBar from "./NavBar";

function Header({user, setUser, logout}) {

    return(
        <>
        <NavBar user={user} logout={logout} setUser={setUser} />
        </>
    )
}

export default Header;