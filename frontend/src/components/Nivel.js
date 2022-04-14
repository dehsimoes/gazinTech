import React from "react";
import {Table, Button, Form, Modal} from 'react-bootstrap';

class Nivel extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            id: '',
            nivel: '',
            level: [],
            modalAberta: false
        }
    }

    componentDidMount() {
        this.buscarNivel();
    }

    buscarNivel() {
        fetch("http://localhost:3333/nivel")
        .then(resp => resp.json())
        .then(dados => {
            this.setState({ level : dados })
        })
    }

    deletarNivel = (id) => {
        fetch("http://localhost:3333/nivel/" + id,{method: 'DELETE'})
        .then(resp => {
            if(resp.ok){
                this.buscarNivel();
            }
        })
    }

    carregarNivel = (id) => {
        fetch("http://localhost:3333/nivel/" + id,{method: 'GET'})
        .then(resp => resp.json())
        .then(level => {
            this.setState({ 
                id : level.id, 
                nivel: level.nivel,
            })
            this.abrirModal();
        })
    }

    cadastraNivel = (level) => {
        fetch("http://localhost:3333/nivel",
            {method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(level)
        })
        .then(resp => {
            alert(resp);
            if(resp.ok){
                this.buscarNivel();
            } else {
                alert('Nivel não cadastrado');
            }
        })
    }

    atualizarLevel = (level, id) => {
        fetch("http://localhost:3333/nivel/" + id,
            {method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(level)
        })
        .then(resp => {
            if(resp.ok){
                this.buscarNivel();
            } else {
                alert('Não foi possível atualizar o nivel');
            }
        })
    }

    renderTabela() {
        return <Table className="table table-striped table-dark mt-3">
    
        <thead>
            <tr>
                <th>Nivel</th>
                <th>Numero de desenvolvedores</th>
                <th>Opções</th>
            </tr>
        </thead>
        <tbody>

            {
                this.state.level.map((level) => 
                    <tr>
                        <td>{level.nivel}</td>
                        <td>{level.numero_desenv}</td>
                        <td>
                            <Button className="m-2" variant="danger" onClick={() => this.carregarNivel(level.id)}>Atualizar</Button>
                            <Button variant="danger" onClick={() => this.deletarNivel(level.id)}>Excluir</Button>
                        </td>
                    </tr>
                )
            }
            
        </tbody>
        
    </Table>
    }

    atualizaNivel = (e) => {
        this.setState(
            {
                nivel: e.target.value
            }
        )
    }

    
    submit= () => {
       
        if(this.state.id === '' || this.state.id === undefined){
            const level = {
                nivel: this.state.nivel,
            }
            
            this.cadastraNivel(level);
        }else {
            const level = {
                nivel: this.state.nivel,
            }
            this.atualizarLevel(level, this.state.id);
        }
    }

    reset = () => {
        this.setState({
            id: '',
            nivel: ''
        })
        this.abrirModal();
    }

    fecharModal = () => {
        this.setState({
            modalAberta: false
        })
    }

    abrirModal = () => {
        this.setState({
            modalAberta: true
        })
    }

    render(){
        return(
            <div>
                <Modal show={this.state.modalAberta} onHide={this.fecharModal}>
                    <Modal.Header closeButton>
                    <Modal.Title>Cadastro de Nivel</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                    <Form.Group className="mb-2">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" value={this.state.id} readOnly={true} />
                    </Form.Group>
                    <Form.Group className="mb-2">
                    <Form.Label>Nivel</Form.Label>
                    <Form.Control type="text" placeholder="Digite o nivel a ser cadastrado" value={this.state.nivel} onChange={this.atualizaNivel} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.submit}>
                        Salvar
                    </Button>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.fecharModal}>
                        Fechar
                    </Button>
                    
                    </Modal.Footer>
                </Modal>

                

                    
                <Button variant="primary" type="submit" onClick={this.reset}>
                    Novo
                </Button>
                

                {this.renderTabela()}
          </div>
        )
    }
    
}

export default Nivel;