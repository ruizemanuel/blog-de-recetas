import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
//import Tabla from '../components/Tabla';
import { Receta } from '../helpers/recetaClass';
import Swal from 'sweetalert2'
import '../styles.css'
import TablaItem from '../components/TablaItem';

const AdminScreen = () => {

    let recetaExistente = false;
    let recetasLocalStorage = JSON.parse(localStorage.getItem('listaRecetas')) || [];
    const [recetas, setRecetas] = useState(recetasLocalStorage);
    const [id, setId] = useState('');
    const [titulo, setTitulo] = useState('');
    const [desc, setDesc] = useState('');
    const [img, setImg] = useState('');

    useEffect(() => {
        localStorage.setItem('listaRecetas', JSON.stringify(recetas));
        cargarNumero()
    }, [recetas]);

    /////////////////////////////////////////////////

    function cargarNumero() {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        for (let i = 8; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        setId(result)
      
      }

    /////////////////////////////////////////////////

    const handleSubmit = (e) => {
        e.preventDefault();



        if (recetaExistente === false) {
            //crear producto
            crearReceta();
        } else {
            //modificar producto
            //modificarReceta();
        }



    }

    const crearReceta = () => {
        let recetaNueva = new Receta(
            id,
            titulo,
            desc,
            img,
        );

        setRecetas([...recetas, recetaNueva]);
        setId('')
        setTitulo('');
        setDesc('')
        setImg('')

        //mostrar un cartel al usuario
        Swal.fire(
            "Entrada creada!",
            "Su entrada fue creada correctamente",
            "success"
        );
        //cargar el/los productos en la tabla

        //crearFila(productoNuevo);
    }

    const actualizarRecetas = (recetas) => {
        setRecetas([...recetas]);
      };


    return (
        <div>
            <div className='mt-5 d-flex justify-content-center'>

                <Form className='ms-5 formWidth2' onSubmit={handleSubmit}>

                    <Form.Group className="mb-3 d-flex align-items-center row">
                        <Form.Label className='col-4 fw-bold'>ID</Form.Label>
                        <Form.Control className='col formWidth ms-4' type="text" placeholder="ID"
                            maxLength={15}
                            readOnly
                            required
                            onChange={(e) => setId(e.target.value)}
                            value={id}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center row">
                        <Form.Label className='col-4 fw-bold'>Titulo</Form.Label>
                        <Form.Control className='col formWidth ms-4' type="text" placeholder="Titulo"
                            maxLength={200}
                            required
                            onChange={(e) => setTitulo(e.target.value)}
                            value={titulo}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center row">
                        <Form.Label className='col-4 fw-bold' >Descripcion</Form.Label>
                        <textarea className='col formWidth ms-4 form-control' style={{ height: 100 }} type="text" placeholder="Descripcion"
                            maxLength={200}
                            required
                            onChange={(e) => setDesc(e.target.value)}
                            value={desc}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center row">
                        <Form.Label className='col-4 fw-bold'>URL de la imagen</Form.Label>
                        <Form.Control className='col formWidth ms-4' type="url" placeholder="URL de la imagen"
                            maxLength={200}
                            required
                            onChange={(e) => setImg(e.target.value)}
                            value={img}
                        />
                    </Form.Group>

                    <div className='text-center mt-4'>
                        <Button className='mb-3 centrar' variant="primary" type="submit">
                            Agregar entrada
                        </Button>
                    </div>
                </Form>
            </div>

            <div className="table-responsive">
                <table className="table my-5">
                    <thead>
                        <tr>
                            <th scope="col">Cod.</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">URL</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recetas.map((item, posicion) => <TablaItem key={posicion} receta={item} recetas={recetas} actualizarRecetas={actualizarRecetas} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminScreen;