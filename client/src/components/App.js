
import '../App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AboutUs from './AboutUs';
import Header from './Header';
import Login from './Login'

function App() {
  

    const [dogList,setDogList] = useState([])
    const [users, setUsers] = useState(null)
   
  
    
   
  
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
      
  
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" >
          <AboutUs />
          </Route>
          <Route exact path="/login">
          <Login />
          </Route>
      </Switch>
      </BrowserRouter>

    )
  }

      export default App