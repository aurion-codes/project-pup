import { useState, useEffect } from "react";
import "./DogForm.css";
import { useNavigate } from "react-router-dom";

function AddDogForm({ user, dogs, setUpdate }) {
  // const [submitted, setSubmitted] = useState(false)
  const [uploadDog, setUploadDog] = useState({
    name: "",
    gender: "",
    breed: "",
    dob: "",
    vaccinated: "",
    img_url: "",
  });
  const navigate = useNavigate();
  // const [user,setuser]= useState(false)

  useEffect(() => {
    if (user.isLoggedIn) {
      navigate("/dogForm");
    }
  }, [user]);

  function handleChange(e) {
    setUploadDog({ ...uploadDog, [e.target.name]: e.target.value });
    console.log(uploadDog);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("uploaded dog: " + JSON.stringify(uploadDog));

    fetch("/dogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(uploadDog),
      credentials: "include",
    })
      .then((r) => r.json())
      .then((data) => {
        debugger;
        setUploadDog({
          name: "",
          gender: "",
          breed: "",
          dob: "",
          vaccinated: "",
          img_url: "",
        });
        setNewDog(false);
      });
  }

  // const [editDog, setEditDog] = useState({});
  // const [editing, setEditing] = useState(false);
  const [newDog, setNewDog] = useState(false);

  // function handleEditForm(e) {
  //   setEditDog({ ...editDog, [e.target.name]: e.target.value });
  // }

  // function handleEditButtion(dogs) {
  //   setEditing(true);
  //   setEditDog(dogs);
  //   setNewDog({
  //     name: dogs.name,
  //     breed: dogs.breed,
  //     bio: dogs.bio,
  //     vaccinated: dogs.vaccinated,
  //   });
  // }

  // function handleEdit(dogs){
  //   fetch(`/dogs/${dogs.id}`,{
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type" : "application/json"
  //     },
  //     body: JSON.stringify(dogs),
  //     credentials: "include"
  //   })
  //   .then(setUpdate(true))

  // }

  return (
    <div className="auth-wrapper">
      <div width="300px" className="addpup-container form-container">
        <h1>Add Your Pup </h1>
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
          {/* {submitted ? 'You have sucessully uploaded your dog' : null}   */}
          <button className="input-fields" type="submit" value="Submit">
            Submit
          </button>
        </form>

        {/* <h1>Edit Dog:</h1>
                        <form onSubmit={() => {handleEdit(editDog); setEditDog(false)}} >
                            <label>Job Title <br/>
                                <input type="text" value={editDog.name} placeholder="Pup's Name" name="name" onChange={handleEditForm}/> 
                            </label> <br />
                            <label>Location <br/>
                                <input type="text" value={editDog.breed} placeholder="Pup's Breed" name="breed" onChange={handleEditForm}/> 
                            </label> <br />
                            <label>Description <br/>
                                <textarea type="text" value={editDog.bio} placeholder="Tell us about your pup: personality, hobbies, etc" name="bio" onChange={handleEditForm} style={{width: "1000px", height: "100px"}}/> 
                            </label> <br />
                            <label>Vaccinated ? <br/>
                                <input type="text" value={editDog.vaccinated} placeholder="Yes or No" name="vaccinated" onChange={handleEditForm}/> 
                            </label>
                            <button className='btn' >Submit</button>
                        </form>
                    </> */}
      </div>
     
    </div>
  
  );
}

export default AddDogForm;
