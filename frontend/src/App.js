import './App.css';
import Home from './components/Home';
import Desenv from './components/Desenv';
import Nivel from './components/Nivel';
import Sobre from './components/Sobre';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>CRUD Gazin Tech</h1>
      <BrowserRouter>
      <Nav variant="tabs">
        <Nav.Link as={Link} to="/">Página Inicial</Nav.Link>
        <Nav.Link as={Link} to="/desenv">Cadastro Desenvolvedor</Nav.Link>
        <Nav.Link as={Link} to="/nivel">Cadastro Nivel</Nav.Link>
        <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
      </Nav>
      
      <Routes>
        <Route path="/" component={<Home/>}/>
        <Route path="/desenv" component={<Desenv/>}/>
        <Route path="/nivel" component={<Nivel/>}/>
        <Route path="/sobre" component={<Sobre/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
