import React from "react";

import Card from 'react-bootstrap/Card';
import myCss from "./Card.module.css"


const MyCard =()=>{
return(
    <>
 
 <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      
        <button className={myCss.btn}>Go somewhere</button>
      </Card.Body>

    </Card>
    
    </>
)


}
export default MyCard