import "../App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Header from "./Header";
import Login from "./Login";
import DogsPage from "./DogsPage";
import AddDogForm from "./AddDogForm";
import Profile from "./Profile";

function App() {
  

  const [dogList,setDogList] = useState([])
  const [user, setUser] = useState({LoggedIn: false, user: {}})
  const [update, setUpdate] = useState(false)
  
  
  handleLogin = (data) => {
      setUser({
      isLoggedIn: true,
      user: data.user
    })
  }
handleLogout = () => {
      setUser({
    isLoggedIn: false,
    user: {}
    })
  }


  loginStatus = () => {
    fetch('http://localhost:3001/logged_in', 
   {withCredentials: true})    
.then(response => {
      if (response.data.logged_in) {
        handleLogin(response)
      } else {
        handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  useEffect(() => (
    fetch("/dogs")
    .then ((r) => r.json())
    .then ((dogs) => setDogList(dogs))
  ), []);

  

 
  useEffect(() => {
    fetch("/users")
    .then ((r) => r.json())
    .then ((users) => {
      setUsers(users)
      setUpdate(false)
    })
    // setUser(localStorage.getItem("user"))s
  }, [update]);


  

  
  
//   const renderDogs = dogs.().map((dogID) => (
//     <li key={dogID}>
       
//     </li>
// ))
  
 
  
  return (
    

    <div>
    <Header user={user} setUser={setUser} />
    <Routes>
    
      <Route path="/about" element={<AboutUs />} />
      <Route path="/login" element={<Login users={users} setUser={setUser}/>} />
     
      <Route path="/dogs" element={<DogsPage dogs={dogList}/>} />
      <Route path="/dog-form" element={<AddDogForm users={users} dogs={dogList} setUpdate={setUpdate} />} />
      <Route path="/profile" element={<Profile users={users}dogs={dogList}/>} />
       
    </Routes>
    </div>

  )
}

    export default App
