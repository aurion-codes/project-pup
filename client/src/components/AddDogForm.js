import { useState } from 'react'
import './DogForm.css'


function AddDogForm(){

    const [submitted, setSubmitted] = useState(false)
    const [uploadDog, setUploadDog] = useState({

        name:"",
        gender:"",
        breed:"",
        dob:"",
        vaccinated:"",
        img_url:""

    })

    function handleChange(e){
        setUploadDog({...uploadDog, [e.target.name]: e.target.value})
    }


    return(

            
            <div width="300px" className="addpup-container">
            <h1>Add Your Pup </h1>
        <form className="dog-form">
            <div>
            {submitted ? 'Your Pup Has Been Added' : null }
            </div>
            <label>Name: 
                <input className="input-fields" onChange={handleChange} type="text" value={uploadDog.name} name="Name" onChange={(e) => setUploadDog(e.target.value)} />
            </label>
            <br/>
            <label>Dob:
                <input className="input-fields" onChange={handleChange} type="text" value={uploadDog.dob} name="DOB" onChange={(e) => setUploadDog(e.target.value)} />
            </label>
            <br/>
            <label>Breed:
                <input className="input-fields" onChange={handleChange} type="text" value={uploadDog.breed} name="breed" onChange={(e) => setUploadDog(e.target.value)} />
            </label>
            <br/>
            <label>Vaccinated:
                <input className="input-fields" onChange={handleChange} type="text" value={uploadDog.vaccinated} name="vaccinated"/>
            </label>
            <br/>
            <label>Image:
                <input className="input-fields" onChange={handleChange} type="text" value={uploadDog.img_url} name="image" />
            </label>
            <br/>
            <label>Gender:
                <select onChange={handleChange} >
                    <option value={uploadDog.gender}>Male</option>
                    <option> Female</option>
                 </select>
            </label>
             <br />
                
            <button className="input-fields" type="submit" value="Submit">Submit</button>
        </form>
        </div>
        
       
    )
}

export default AddDogForm