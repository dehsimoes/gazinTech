import './App.css';
import Home from './components/Home';
import Desenv from './components/Desenv';
import Nivel from './components/Nivel';
import Sobre from './components/Sobre';
import { BrowserRouter, Link,Routes, Route} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container">
      <h1>CRUD Gazin Tech</h1>
      <BrowserRouter>

      <Nav variant="tabs">
        <Nav.Link as={Link} to="/">Página Inicial</Nav.Link>
        <Nav.Link as={Link} to="/desenv">Cadastro Desenvolvedor</Nav.Link>
        <Nav.Link as={Link} to="/nivel">Cadastro Nivel</Nav.Link>
        <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
      </Nav>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/desenv" element={<Desenv/>}/>
        <Route path="/nivel" element={<Nivel/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
