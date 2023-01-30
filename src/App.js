import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen';
import AdminScreen from './pages/AdminScreen';
import NavBarMenu from './components/NavBarMenu';

function App() {
  return (
    <>

      <Container>
        {/* BrowserRouter es el contenedor de las rutas */}
        {/* Routes es el direccionador de rutas */}
        <BrowserRouter>
          <NavBarMenu />
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='admin' element={<AdminScreen />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
