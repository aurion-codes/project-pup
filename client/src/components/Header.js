import NavBar from "./NavBar";
import "./Header.css";
function Header({ user, setUser, logout }) {
  return (
    <>
      <NavBar user={user} logout={logout} setUser={setUser} />
    </>
  );
}

export default Header;
