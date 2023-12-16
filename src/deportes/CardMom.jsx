import React from 'react';
import Card from 'react-bootstrap/Card';
import img from './autos/a2008.png'

export const CardMom = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img}/>
      <Card.Body>
        <Card.Title>MEJORES MOMENTOS DE LAS CARRERAS</Card.Title>
        <Card.Text>
          Momentos memorables de las carreras. Los mejores momentos en las carreras de Formula 1. 
        </Card.Text>
      </Card.Body>
     </Card>
        </div>
    );
};

export default CardMom;