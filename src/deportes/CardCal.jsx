import React from 'react';
import Card from 'react-bootstrap/Card';
import img from './carreras/ca2023.png'


export const CardCal = () => {
    return (
        <div>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>CALENDARIOS</Card.Title>
        <Card.Text>
          Todas las fechas actualizadas de las carreras del año 2023 y 2024. Las fechas y encuentros en las mejores pistas del 
          mundo donde se enfrentaran a toda marcha los mejores corredores del globo.
        </Card.Text>
      </Card.Body>
     </Card>
            
        </div>
    );
};

export default CardCal;
