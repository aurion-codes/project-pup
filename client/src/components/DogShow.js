// import styled from "styled-components"
// import {useState, useEffect} from "react"
import "./DogCard.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function DogShow({ dog }) {
 

  return (
    <Card sx={{ maxWidth: 445, margin: 5, height: 905 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="440"
        image={dog.img_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         <h1>{dog.name}</h1> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h2>Gender:  {dog.gender}</h2>  
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h2>Birthday: {dog.dob}</h2> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h2>About Me:</h2> {dog.bio} 
        </Typography>
        <br></br>
        <Typography variant="body2" color="text.secondary">
        <h3>Vaccinated: {dog.vaccinated ? "yes" : "no"}</h3>
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button size="small">Adopt Me :)</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    // <div className="cards">
    // <div className="card">
    //   <h1 className="card_name">{dog.name}</h1>
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
