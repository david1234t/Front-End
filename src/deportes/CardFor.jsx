import React from 'react';
import Card from 'react-bootstrap/Card';
import auto from './autos/a2023.jpg'

export const CardFor = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={auto} />
      <Card.Body>
        <Card.Title>FORMULA 1</Card.Title>
        <Card.Text>
          Las carreras a más alta velocidad. Vive la Fórmula 1 con todas las ganas y la info que necesitas.
            
        </Card.Text>
      </Card.Body>
     </Card>
        </div>
    );
};

export default CardFor;