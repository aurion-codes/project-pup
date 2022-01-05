import "../App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Header from "./Header";
import Login from "./Login";
import DogsPage from "./DogsPage";
import AddDogForm from "./AddDogForm";
import Profile from "./Profile";
import EditDogForm from "./EditDogForm"
function App() {
  

  const [user, setUser] = useState({isLoggedIn: false, user: {}})
  
  const handleLogin = (data) => {
      setUser({
      isLoggedIn: true,
      user: data.user
    })
  }
  
  const handleLogout = () => {

    fetch("/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
    .then((r) => r.json())
    .then((data) => {
      if (data.logged_out) {
        setUser({user: {}, isLoggedIn: false})
      }
    }) 
    
  }


  const loginStatus = () => {

    fetch('/logged_in', 
      {withCredentials: true})    
    .then((r) => r.json())
    .then((data) => {
      if (data.logged_in) {
        handleLogin(data)
      } else {
        handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  };
  
  useEffect(()=> loginStatus(),[setUser])

  return ( 

    <>
      <Header user={user} logout={handleLogout} setUser={setUser}/>
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login user={user} setUser={setUser} logout={handleLogout}/>} />
       
        <Route path="/dogs" element={<DogsPage user={user}/>} />
        <Route path="/dogForm" element={<AddDogForm user={user}  />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/editDog/:id" element={<EditDogForm user={user}/>} />
         
      </Routes>
    </>

  )
}

    export default App
