import React from 'react';
import Card from 'react-bootstrap/Card';
import img from './pilotos/1.jpg'

export const CardPil = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Pilotos</Card.Title>
        <Card.Text>
          Corredores a gran velocidad y los mejores podios del mundo. Los mejores pilotos que ha 
          tenido el deporte a lo largo de la historia.
        </Card.Text>
      </Card.Body>
     </Card>
        </div>
    );
};

export default CardPil;