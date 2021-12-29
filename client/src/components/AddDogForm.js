import { useState } from 'react'

function AddDogForm({dog}){

    const [addDog, setAddDog] = useState(false)

    const [uploadDog, setUploadDog] = useState({

        name:"",
        gender:"",
        breed:"",
        dob:"",
        img_url:""

    })

    function handleChange(e){
        setUploadDog({
            ...uploadDog, 
            [e.target.name]: e.target.value
        })
    }


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
            img_url:""

          }),
        })
          .then((r) => r.json())
          .then((addDog) => setAddDog(addDog));
      }


    return(
        <>   

            <h1>Add Your Pup </h1>
        <form>
            <label>
                <input type="text" name="Name" onChange={handleChange}/>
            </label>
            <label>
                Name:<br/>
                <input type="text"  name="gender" onChange={handleChange}/>
            </label>
            <label>
                DOB:<br />
                <input type="text" name="breed" onChange={handleChange}/>
            </label>
            <label>
                Breed:<br/>
                <input type="text" name="dob"  onChange={handleChange}/>
            </label>
            <label>
                Image:<br />
                <input type="text" name="breed" onChange={handleChange}/>
            </label>
            <input onClick={handleSubmit} type="submit" value="Submit" />
        </form>
        </>
    )
}

export default AddDogForm