// import styled from "styled-components"
// import {useState, useEffect} from "react"
import "./DogCard.css";
import React, {useState} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

function DogShow({ user, dogData, handleDeleteDog, handleEditDog }) {
  const [dog, setDog] = useState({details: dogData.details, reviews: dogData.reviews})
  const [learnmore, setLearnMore] =useState(false)

  function handleLearnMore(){
    setLearnMore(!learnmore)
  }
  
  const handleReviews = ()=>{
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({user_id: user.user.id, like: true, dog_id: dog.details.id}),
      credentials: "include",
    })
    .then((r) => r.json())
    .then((data) => {
      setDog({...dog, reviews: data})
    })
    .catch(error => console.log('api errors:', error))  
  }
  const url = "editDog/"+dog.details.id
  return (
    <Card sx={{ maxWidth: 445, margin: 5, height: 905 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="440"
        image={dog.details.img_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         <h1>{dog.details.name}</h1> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h2>Breed:  {dog.details.breed}</h2>  
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h3>Gender:  {dog.details.gender}</h3>  
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h3>Birthday: {dog.details.dob}</h3> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h3>About Me:</h3> {dog.details.bio} 
        </Typography>
        <br></br>
        <Typography variant="body2" color="text.secondary">
        <h3>Adopted Status: {dog.details.adopted ? "Pending Adoption " : "Available"}</h3>
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button size="small">Adopt Me :)</Button>
        <Button size="small">Learn More</Button>
        
        <Button onClick={()=>handleReviews()}><FontAwesomeIcon icon={faHeart} /> <span className=""> {dog.reviews}</span></Button> 
        {handleDeleteDog &&
        <Button onClick={()=>handleDeleteDog(dog.details.id)}><FontAwesomeIcon icon={faTrash} /></Button> }
        {handleEditDog &&
        <a href={url}><FontAwesomeIcon icon={faEdit} /></a> }
             
      </CardActions>
    </Card>
    // <div className="cards">
    // <div className="card">
    //   <h1 className="card_name">{dog.details.name}</h1>
    //   <center>
    //     <img alt="mypup" width="600" src={dog.img_url} />
    //   </center>

    //   <div className="details">
    //     <h2>Gender: {dog.gender}</h2>
    //     <h2>DOB: {dog.dob}</h2>
    //     <p className="card_description">About Me: {dog.bio}</p>
    //     <h3>vaccinated: {dog.vaccinated ? "yes" : "no"}</h3>
    //     <h2>
    //       {dog.adopted ? (
    //         <b>'Sorry, I am adopted already'</b>
    //       ) : (
    //         <button>Adopt Me :)</button>
    //       )}
    //     </h2>
    //   </div>
    // </div>
    // </div>
  );
}

export default DogShow;

const DogCard = ({ dog }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={dog.img_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};