import React from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import Image from "next/image";
import ReactStars from "react-stars";

const Apartment = ({ accomodation }) => {
  return (
    // <Card style={{ width: "18rem", marginBottom: "5rem" }}>
    //   <Card.Img variant="top" src={accomodation.images[0]} />
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Text>
    //       {accomodation.description}
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
    <div
      style={{
        backgroundColor: "#FFFFFF",
        padding: "10px",
        borderRadius: "10px",
        marginTop: "20px",
        boxShadow: "2px 2px 15px 2px light-grey",
      }}
    >
      <Carousel fade controls={false} interval={5000}>
        {accomodation.images.map((image, index) => {
          return (
            <Carousel.Item key={index}>
              <img
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                src={image}
              />
              <i style={{position: "absolute", top: '10px', right: '20px', cursor: 'pointer', color: 'white'}} className="bi bi-heart"></i>
            </Carousel.Item>
          );
        })}
      </Carousel>

      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col-md-4">
          <p style={{ fontWeight: "bold" }}>{accomodation.name} <i className="bi bi-patch-check-fill"></i></p>
          
        </div>
        <div className="col-md-5">
          <div style={{display: 'flex', alignItems: 'center'}}>
          <ReactStars
                  value={accomodation.stars}
                  count={5}
                  size={15}
                  color2={"#ffd700"}
                />
                <span style={{ fontSize: "10px", marginLeft: "10px"}}>{accomodation.ratings}</span>
          </div>
        </div>
        <div className="col-md-3">
          <div >
            <i className="bi bi-wifi" style={{marginRight: '5px'}}></i>
            <i className="bi bi-shield-lock" style={{marginRight: '5px'}}></i>
            <i className="bi bi-file-ppt"></i>
          </div>
          
        </div>
      </div>
      <div style={{display: 'flex'}}>
        <p style={{color: 'grey', fontSize: '12px'}}> <i className="bi bi-geo-alt"></i> {accomodation.city}, {accomodation.province}</p>
        <p style={{color: 'grey', fontSize: '12px', marginLeft: '10px'}}>{accomodation.type} • {accomodation.numBedrooms} bedroom(s)</p>
      </div>
      <div>
        <p style={{ marginTop: "1px" }}>{accomodation.description}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <p style={{fontWeight: "bold", fontSize: 18}}>Price: <span style={{color: 'orange'}}>R{accomodation.price}</span> <span style={{fontSize: '10px'}}>{accomodation.frequency}</span></p>
           <div>
            <Button style={{marginRight: '5px'}} size="sm" variant="outline-warning">Book A Viewing</Button>
            <Button style={{color: 'white'}} size="sm" variant="warning">Rent Now</Button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Apartment;
