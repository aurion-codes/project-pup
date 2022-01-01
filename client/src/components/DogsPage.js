import DogShow from "./DogShow"
import {useState} from 'react'



function DogsPage({dogs}){

    const [adopted, setAdopted]= useState(false)
    
    function handleClick(){
        setAdopted (!adopted)
        alert('Adoption Request Sent')
      }
    return (
        <>
    {dogs.map((dog) => <DogShow key={dog.id} dog={dog} handleClick={handleClick} />)}
  
        
        
     
       
    
        </>
    )
}

export default DogsPage