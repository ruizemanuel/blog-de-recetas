import React from 'react';
import { ListGroup, Card, Button } from 'react-bootstrap';

const RecetaItem = (props) => {

    return (

        <ListGroup.Item className='mb-4 me-4 sinborde'>

            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={props.receta.img} />
                <Card.Body>
                    <Card.Title>{props.receta.titulo}</Card.Title>
                    <Card.Text>
                        {props.receta.desc}
                    </Card.Text>
                    <div className='d-flex justify-content-center'>
                    <Button variant="primary"   
                    >
                        Ir a la nota
                    </Button>
                    </div>
                    
                </Card.Body>
            </Card>
        </ListGroup.Item>
    );
};

export default RecetaItem;