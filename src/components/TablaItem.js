import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2'

const TablaItem = (props) => {

 

    //let recetasLocalStorage = JSON.parse(localStorage.getItem('listaRecetas')) || [];
    //const [recetas, setRecetas] = useState(recetasLocalStorage);

    let recetasLocalStorage = props.recetas
    const [recetas, setRecetas] = useState(recetasLocalStorage);

   

    const [id, setId] = useState(props.receta.id);
    const [titulo, setTitulo] = useState(props.receta.titulo);
    const [desc, setDesc] = useState(props.receta.desc);
    const [img, setImg] = useState(props.receta.img);

    const [show, setShow] = useState(false);

    useEffect(() => {
        localStorage.setItem('listaRecetas', JSON.stringify(recetas));
    }, [recetas]);

    const handleCambios = () => {

        Swal.fire({
            title: "¿Seguro qué desea modificar esta entrada?",
            text: "Esta acción no podra ser revertida!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar!",
        }).then((result) => {
            if (result.isConfirmed) {
                let indiceReceta = recetasLocalStorage.findIndex((itemReceta) => {
                    return itemReceta.id === props.receta.id;
                });

                recetasLocalStorage[indiceReceta].id = id;
                recetasLocalStorage[indiceReceta].titulo = titulo;
                recetasLocalStorage[indiceReceta].desc = desc;
                recetasLocalStorage[indiceReceta].img = img;

                //actualizar el localStorage

                setRecetas([...recetasLocalStorage]);

                //mostrar cartel al usuario
                Swal.fire(
                    "Entrada modificada!",
                    "Su entrada fue modificada correctamente",
                    "success"
                );
                setShow(false)
            }
        });

    }

    const handleDelete = () => {
     
        Swal.fire({
            title: "¿Seguro qué desea borrar esta entrada?",
            text: "Esta acción no podra ser revertida!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar!",
        }).then((result) => {
            if (result.isConfirmed) {
                //encontrar la posicion del elemento en el array y borrarlo
                //opcion 1 encontrar el indice con findIndex y usar splice(indice,1);
                //opcion 2 usando filter
                let nuevasRecetas = recetasLocalStorage.filter((itemReceta) => {
                    return itemReceta.id !== props.receta.id;
                });

                setRecetas([...nuevasRecetas]);
                props.actualizarRecetas(nuevasRecetas)

                //mostrar cartel al usuario
                Swal.fire(
                    "Entrada eliminada!",
                    "Su entrada fue eliminada correctamente",
                    "success"
                );
            }
        });
    }

    const handleClose = () => {

        setShow(false)
    };
    const handleShow = () => setShow(true);

    return (

        <tr>
            <th>{props.receta.id}</th>
            <td>{props.receta.titulo}</td>
            <td>{props.receta.desc}</td>
            <td>{props.receta.img}</td>
            <td>
                <Button variant="warning" onClick={handleShow}>
                    Modificar
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Borrar
                </Button>
            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar receta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='mx-3 ' >

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
                                maxLength={50}
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
                                maxLength={50}
                                required
                                onChange={(e) => setImg(e.target.value)}
                                value={img}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleCambios}>
                        Guardar Cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </tr>



    );
};

export default TablaItem;