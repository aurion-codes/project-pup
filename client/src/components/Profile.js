import React, {useState, useEffect} from 'react'
import DogShow from "./DogShow";
import { useNavigate } from "react-router-dom";




function Profile({user}) {
 const navigate = useNavigate();
  const [adopted, setAdopted] = useState(false);
  const [dogs, setDogs] = useState([])
  const [likeDogs, setLikeDogs] = useState([])
  function handleClick() {
    setAdopted(!adopted);
    alert("Adoption Request Sent");
  }

  const handleDeleteDog = (id)=>{
    fetch(`/dogs/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
    .then((r) => r.json())
    .then((data) => {
      if (data) {
        setDogs(data)
      } 
    })
    .catch(error => console.log('api errors:', error))  
  }

  const fetchDogs = ()=>{
    fetch("/dogs/user_dogs")
   .then ((r) => r.json())
   .then ((data) => {
   	setDogs(data)})
   .catch(error => console.log('api errors:', error))
  }
  
  const fetchMyDogs = ()=>{
  	fetch("/dogs/like_dogs")
   .then ((r) => r.json())
   .then ((data) => {
   	setLikeDogs(data)})
   .catch(error => console.log('api errors:', error))
  
  }
  useEffect(()=>{    
    if (user.isLoggedIn) {
    	fetchDogs()
      fetchMyDogs()
    } 
  }, [user]);
  if(	!user.isLoggedIn){navigate("/login");}
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {dogs?.map((dog) => (
          <DogShow user={user} key={dog.details.id} dogData={dog} handleClick={handleClick} handleDeleteDog={handleDeleteDog} handleEditDog="true" />
        ))}
      </div>
      <h2> My Liked Pupi</h2>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {likeDogs?.map((dog) => (
          <DogShow user={user} key={dog.details.id} dogData={dog} handleClick={handleClick}/>
        ))}

      </div>
    </>
    )
}

export default Profile
