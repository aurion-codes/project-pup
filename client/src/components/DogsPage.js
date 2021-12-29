import DogShow from "./DogShow"
import DogsList from "./DogsList"
import {useState} from 'react'
// import { useRouteMatch} from "react-router-dom"
// import {Route} from "react-router-dom"

function DogsPage({dogs}){

    const [adopted, setAdopted]= useState(false)
    
    function handleClick(){
        setAdopted (!adopted)
        alert('Adoption Request Sent')
      }
    return (
        <>
    {dogs.map((dog) => <DogShow key={dog.id} dog={dog} handleClick={handleClick} />)}
  
        
        
        <DogsList dogs ={dogs}/>
    
        </>
    )
}

export default DogsPage