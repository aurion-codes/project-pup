import { useState } from 'react'
import './DogForm.css'


function AddDogForm({users}, {dogs}){

    // const [submitted, setSubmitted] = useState(false)
    const [uploadDog, setUploadDog] = useState({
        name:"",
        gender:"",
        breed:"",
        dob:"",
        vaccinated:"",
        img_url:""

    })



    function handleChange(e){
        setUploadDog({...uploadDog,
            [e.target.name]: e.target.value
        })
        console.log(uploadDog)
        
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("uploaded dog: "+JSON.stringify(uploadDog)) 

            fetch("/dogs",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
             body: JSON.stringify(uploadDog),
             credentials: "include"
        })
            .then((r) =>r.json())
            .then(data =>{
                setUploadDog({
                    name:"",
                    gender:"",
                    breed:"",
                    dob:"",
                    vaccinated:"",
                    img_url:""                  

                })
        
            })
        }

                    

    return(

            
            <div width="300px" className="addpup-container">
            <h1>Add Your Pup </h1>
        <form onSubmit={handleSubmit} className="dog-form">
            <div>
            {/* {submitted ? 'Your Pup Has Been Added' : null } */}
            </div>
            <label>Name: 
                <input className="input-fields" type="text" value={uploadDog.name} name="name" onChange={handleChange} />
            </label>
            <br/>
            <label>Dob:
                <input className="input-fields" type="text" value={uploadDog.dob} name="dob" onChange={handleChange} />
            </label>
            <br/>
            <label>Breed:
                <input className="input-fields" type="text" value={uploadDog.breed} name="breed" onChange={handleChange} />
            </label>
            <br/>
            <label>Vaccinated:
                <input className="input-fields" type="text" value={uploadDog.vaccinated} onChange={handleChange}  name="vaccinated"/>
            </label>
            <br/>
            <label>Image:
                <input className="input-fields" onChange={handleChange}  type="text" value={uploadDog.img_url} name="img_url" />
            </label>
            <br/>
            <label>Gender:
            <input className="input-fields" onChange={handleChange}  type="text" value={uploadDog.gender} name="gender" />
            </label>
             <br />
              {/* {submitted ? 'You have sucessully uploaded your dog' : null}   */}
            <button className="input-fields" type="submit" value="Submit">Submit</button>
        </form>
        </div>
        
       
    ) 
}

export default AddDogForm