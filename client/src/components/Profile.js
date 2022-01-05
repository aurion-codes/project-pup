import React, {useState, useEffect} from 'react'
import DogShow from "./DogShow";
import { useNavigate } from "react-router-dom";




function Profile({user}) {
 const navigate = useNavigate();
  const [adopted, setAdopted] = useState(false);
  const [dogs, setDogs] = useState([])
  function handleClick() {
    setAdopted(!adopted);
    alert("Adoption Request Sent");
  }

  const fetchMyDogs = ()=>{
    fetch("/dogs/user_dogs")
   .then ((r) => r.json())
   .then ((data) => {
debugger
   	setDogs(data)})
   .catch(error => console.log('api errors:', error))
  }


  useEffect(()=>{    
    if (user.isLoggedIn) {
      fetchMyDogs()
    } 
  }, [user]);
  if(	!user.isLoggedIn){navigate("/login");}
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {dogs?.map((dog) => (
          <DogShow key={dog.details.id} dogData={dog} handleClick={handleClick} />
        ))}
      </div>
    </>
    )
}

export default Profile
