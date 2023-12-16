import React from 'react';
import Card from 'react-bootstrap/Card';
import img from './autos/r.png'
import img1 from './autos/f.png'
import img2 from './autos/m.png'
import img3 from './autos/mc.png'
import img4 from './autos/a.jpg'

export const CardAut = () => {
    return (
        <div>
            <table>
                    <tr>
                        <td>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Red Bull</Card.Title>
        <Card.Text>
          Patrocinador Red Bull

        </Card.Text>
      </Card.Body>
     </Card></td>
     <td>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Ferrari</Card.Title>
        <Card.Text>
          Patrocinador Ferrari

        </Card.Text>
      </Card.Body>
     </Card></td>
     </tr>
     <td>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Mercedez-Benz</Card.Title>
        <Card.Text>
          Patrocinador Mercedez-Benz

        </Card.Text>
      </Card.Body>
     </Card></td>
     <td>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title>McLaren</Card.Title>
        <Card.Text>
          Patrocinador McLaren

        </Card.Text>
      </Card.Body>
     </Card></td>
     <tr>
     <td>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img4} />
      <Card.Body>
        <Card.Title>Alfa Romeo</Card.Title>
        <Card.Text>
          Patrocinador Alfa Romeo

        </Card.Text>
      </Card.Body>
     </Card></td>
     </tr>
     </table>
        </div>
    );
};

export default CardAut;