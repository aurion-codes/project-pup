import DogShow from "./DogShow";
import { useEffect, useState } from "react";

function DogsPage({user}) {
  const [adopted, setAdopted] = useState(false);
  const [dogs, setDogs] = useState([])
  function handleClick() {
    setAdopted(!adopted);
    alert("Adoption Request Sent");
  }

  const fetchDogs = ()=>{
    fetch("/dogs")
   .then ((r) => r.json())
   .then ((dogs) =>{
    setDogs(dogs)})
  }

  useEffect(()=>fetchDogs(),[])

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {dogs?.map((dog) => (
          <DogShow key={dog.details.id} user={user} dogData={dog} handleClick={handleClick} />
        ))}
      </div>
    </>
  );
}

export default DogsPage;