import React from 'react';
import Card from 'react-bootstrap/Card';
import img1 from './carreras/c.jpg'

export const CardCar = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>CARRERAS</Card.Title>
        <Card.Text>
          Como son y por que se corre. Las carreras de Formula 1, llevadas a traves del mundo a toda velocidad estan aquí.
        </Card.Text>
      </Card.Body>
     </Card>
        </div>
    );
};

export default CardCar;