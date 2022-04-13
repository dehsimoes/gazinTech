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
      <img src="https://camo.githubusercontent.com/e3f98eb77e581e011354866ba9525db2f70dc28550053c1ac6b2bac190bfd158/68747470733a2f2f7777772e67617a696e2e636f6d2e62722f696d616765732f7376672f6e65772d6c6f676f2e737667" alt="Imagem responsiva"></img>
      
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
