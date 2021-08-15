import React from "react";
import { Card, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component"


function Cardmovie({ el }) {
  return (
    <div key={el.id}

    >
      <Card style={{ width: "18rem",
    border: "1px solid rgba(0,0,0,.125)",
    borderRadius: "0.25rem",
    boxSizing: "borderBox" ,
    minWidth: "0",
    wordWrap: "breakWord",
    backgroundColor: "#fff",
    backgroundClip: "borderBox",
    marginBottom:"20px"
     }}>
        <Card.Img variant="top" src={el.posterUrl} style={{height: "18rem"}} />
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>{el.description}</Card.Text>
          <ReactStars value={el.rate} />
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Cardmovie;