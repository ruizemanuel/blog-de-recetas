import React, { useRef } from 'react';
import ListaRecetas from '../home-components/ListaRecetas';

const HomeScreen = () => {

    let recetasLocalStorage = JSON.parse(localStorage.getItem('listaRecetas')) || [];
    //const [recetas, setRecetas] = useState(recetasLocalStorage);
    const recetas = useRef(recetasLocalStorage)

    return (

        <ListaRecetas arregloRecetas={recetas.current}></ListaRecetas>

    );
};

export default HomeScreen;