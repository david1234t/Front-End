import React from 'react';
import Card from 'react-bootstrap/Card';
import img from './autos/au.jpg'
import img1 from './autos/cc.jpg'

const CardPis = () => {
    return (
        <div>
            <table>
                <tr>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Autodromos</Card.Title>
        <Card.Text>
          PCircuitos diseñados para las carreras
        </Card.Text>
      </Card.Body>
     </Card>
     <td>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Circuitos callejeros urbanos</Card.Title>
        <Card.Text>
          Circuitos adaptados en las cuidades para la carreras
        </Card.Text>
      </Card.Body>
     </Card>
     </td>
     </tr>
     </table>
        </div>
    );
};

export default CardPis;