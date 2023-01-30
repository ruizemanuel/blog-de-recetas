import React from 'react';
//import { ListGroup } from 'react-bootstrap';
import RecetaItem from './RecetaItem';

const ListaRecetas = (props) => {
    return (
        // <div className='mt-4 d-flex justify-content-center'>

        //    <ListGroup>
        //         {props.arregloRecetas.map((item, posicion) => <RecetaItem key={posicion} receta={item} />)}
        //     </ListGroup>

        // </div>

        <div className="mt-4 card-grid">
            {props.arregloRecetas.map((item, posicion) => <RecetaItem key={posicion} receta={item} />)}
        </div>
    );
};

export default ListaRecetas;