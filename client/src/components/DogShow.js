// import { useParams } from "react-router-dom"
function DogShow({dog, handleClick}){

    // const params = useParams();
    // console.log(params)

    return(
        <div>
            <div className="card">
  <div className="image">
  <h1 className="card_name">{dog.name}</h1>
   <center><img alt="mypup"width="600"src={dog.img_url}/></center>
   </div>
   <div className="details">
   <h2>Gender: {dog.age}</h2>
   <h3>DOB: {dog.dob}</h3>
   <p className="card_description">About Me: {dog.bio}</p>
  <h3>vaccinated: {dog.vaccinated ?  'yes' : 'no'}</h3>
  <h2>{dog.adopted ? <b>'Sorry, I am adopted already'</b> : <button onClick={handleClick}className="card_btn">Adopt Me :)</button>}</h2>
  </div>

  </div>
  
        </div>
    )
}

export default DogShow