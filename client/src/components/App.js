
import '../App.css';
import { useState, useEffect } from 'react';
import {Routes, Route, Naivigate} from 'react-router-dom';
import AboutUs from './AboutUs';
import Header from './Header';
import Login from './Login'
import DogsPage from './DogsPage'
import AddDogForm from './AddDogForm';


function App() {
  

    const [dogList,setDogList] = useState([])
    const [users, setUsers] = useState(null)
    const [user, setUser]= useState('')
   
  
    
   
  
    useEffect(() => (
      fetch("/dogs")
      .then ((r) => r.json())
      .then ((dogs) => setDogList(dogs))
    ), []);
  
    
  
   
    useEffect(() => (
      fetch("/users")
      .then ((r) => r.json())
      .then ((users) => setUsers(users))
    ), []);
  

    
  
    
    
    
    
   
    
    return (
      
  
      <div>
      <Header user={user} setUser={setUser} />
      <Routes>
      
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login users={users} setUser={setUser}/>} />
       
        <Route path="/dogs" element={<DogsPage dogs={dogList}/>} />
        <Route path="/dog-form" element={<AddDogForm />} />
         
      </Routes>
      </div>

    )
  }

      export default App