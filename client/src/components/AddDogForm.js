import { useState } from 'react'

function AddDogForm({dog}){

    

    const [uploadDog, setUploadDog] = useState({

        name:"",
        gender:"",
        breed:"",
        dob:"",
        vaccinated:"",
        img_url:""

    })

    // function handleChange(e){
    //     setUploadDog({...uploadDog, [e.target.name]: e.target.value})
    // }


    function handleSubmit(e){
        e.preventDefault();

        fetch("/dogs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name:"", 
            gender:"",
            breed:"",
            dob:"",
            vaccinated:"",
            img_url:""

          }),
        })
          .then(() => {
            console.log(' new dog added')
          })     
      }


    return(
        <>   

            <h1>Add Your Pup </h1>
        <form onSubmit={handleSubmit}>
            <label>Name: 
                <input type="text" value={uploadDog.name} name="Name" onChange={(e) => setUploadDog(e.target.value)} />
            </label>
            <br/>
            <label>Dob:
                <input type="text"  value={uploadDog.dob} name="DOB" onChange={(e) => setUploadDog(e.target.value)} />
            </label>
            <br/>
            <label>Breed:
                <input type="text" value={uploadDog.breed} name="breed" onChange={(e) => setUploadDog(e.target.value)} />
            </label>
            <br/>
            <label>Vaccinated:
                <input type="text" value={uploadDog.vaccinated} name="vaccinated" onChange={(e) => setUploadDog(e.target.value)} />
            </label>
            <br/>
            <label>Image:
                <input type="text" value={uploadDog.img_url} name="image" onChange={(e) => setUploadDog(e.target.value)} />
            </label>
            <br/>
            <label>
                <select onChange={(e) => setUploadDog(e.target.value)} >
                    <option value={uploadDog.gender}>Male</option>
                    <option value={uploadDog.gender}>Female</option>
                 </select>
            </label>
             :Gender<br />
                
            <button onChange={(e) => setUploadDog(e.target.value)} type="submit" value="Submit">Submit</button>
        </form>
        
        </>
    )
}

export default AddDogForm