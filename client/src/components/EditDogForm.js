import { useState, useEffect } from "react";
import "./DogForm.css";
import { useNavigate, useParams } from "react-router-dom";

function EditDogForm({ user}) {

  const {id} = useParams()
  const navigate = useNavigate();
  const [uploadDog, setUploadDog] = useState({
    name: "",
    gender: "",
    breed: "",
    dob: "",
    vaccinated: "",
    img_url: "",
  });
  
 
  const fetchMyDog = ()=>{
    fetch(`/dogs/${id}`)
    .then ((r) => r.json())
    .then ((data) => 
      setUploadDog({name: data.name, gender: data.gender, breed: data.breed, dob: data.dob, vaccinated: data.vaccinated, img_url: data.img_url})
    )
   .catch(error => console.log('api errors:', error))
  
  }


  function handleChange(e) {
    setUploadDog({ ...uploadDog, [e.target.name]: e.target.value });
    console.log(uploadDog);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("uploaded dog: " + JSON.stringify(uploadDog));

    fetch(`/dogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(uploadDog),
      credentials: "include",
    })
    .then((r) => r.json())
    .then((data) => {
      setUploadDog({
          name: "",
          gender: "",
          breed: "",
          dob: "",
          vaccinated: "",
          img_url: "",
        })
    })
   .catch(error => console.log('api errors:', error))
  }

  useEffect(() => fetchMyDog(), [user]);

  return (
    <div width="300px" className="addpup-container">
      
      <h1>Edit Your Pup </h1>
      <form onSubmit={handleSubmit} className="dog-form">
        <div>{/* {submitted ? 'Your Pup Has Been Added' : null } */}</div>
        <label>
          Name:
          <input
            className="form-control"
            type="text"
            value={uploadDog.name}
            name="name"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Dob:
          <input
            className="form-control"
            type="text"
            value={uploadDog.dob}
            name="dob"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Breed:
          <input
            className="form-control"
            type="text"
            value={uploadDog.breed}
            name="breed"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Vaccinated:
          <input
            className="form-control"
            type="text"
            value={uploadDog.vaccinated}
            onChange={handleChange}
            name="vaccinated"
          />
        </label>
        <br />
        <label>
          Image:
          <input
            className="form-control"
            onChange={handleChange}
            type="text"
            value={uploadDog.img_url}
            name="img_url"
          />
        </label>
        <br />
        <label>
          Gender:
          <input
            className="form-control"
            onChange={handleChange}
            type="text"
            value={uploadDog.gender}
            name="gender"
          />
        </label>
        <br />
        <button className="input-fields" type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
    
  );
}

export default EditDogForm;