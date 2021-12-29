
import '../App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AboutUs from './AboutUs';
import Header from './Header';
import Login from './Login'
import DogsPage from './DogsPage'
import AddDogForm from './AddDogForm';

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
          <Login setUser={setUsers}/>
        </Route>
        <Route exact path="/dogs">
            <DogsPage dogs={dogList}/>
        </Route>
        <Route exaxt path="/dog-form">
          <AddDogForm />
        </Route>
      </Switch>
      </BrowserRouter>

    )
  }

      export default App