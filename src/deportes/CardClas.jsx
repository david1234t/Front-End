import React from 'react';
import Card from 'react-bootstrap/Card';
import img1 from './autos/a2017.png'

export const CardClas = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1}/>
      <Card.Body>
        <Card.Title>CLASIFICACIÓN</Card.Title>
        <Card.Text>
          Como se clasifica y que equipos lo lograron.
        </Card.Text>
      </Card.Body>
     </Card>
        </div>
    );
};

export default CardClas;