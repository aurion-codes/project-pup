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
                Image:<br/>
                <select>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                 </select>
            </label>
             :Gender<br />
                
            <button onClick={handleSubmit} type="submit" value="Submit">Submit</button>
        </form>
        </>
    )
}

export default AddDogForm