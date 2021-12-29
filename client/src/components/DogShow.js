    import styled from "styled-components"
    // import {useState, useEffect} from "react"

    

    function DogShow({dog}){

        // const [getDog, setGetDog] = useState(null)
        // useEffect(() => {
        //     fetch(`/dogs/${dogId}`)
        //       .then((r) => r.json())
        //       .then((getDog) => setGetDog(getDog));
        //   }, [dogId]);
          
        //   console.log(getDog)

    return(
        <>
        <div>
            <div className="card">
  <div className="image">
  <h1 className="card_name">{dog.name}</h1>
   <center><img alt="mypup"width="600"src={dog.img_url}/></center>
   </div>
   <div className="details">
   <h2>Gender: {dog.age}</h2>
   <h2>DOB: {dog.dob}</h2>
   <p className="card_description">About Me: {dog.bio}</p>
  <h3>vaccinated: {dog.vaccinated ?  'yes' : 'no'}</h3>
  <h2>{dog.adopted ? <b>'Sorry, I am adopted already'</b> : <button className="card_btn">Adopt Me :)</button>}</h2>
  </div>

  </div>
  
        </div>
        </>
    )
}

export default DogShow