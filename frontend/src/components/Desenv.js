import React from "react";
import {Table, Button, Form} from 'react-bootstrap';

class Desenv extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            id: '',
            nome: '',
            data_nascimento: '',
            idade: 0,
            sexo: '',
            desenv: []
        }
    }

    componentDidMount(){
        this.buscarDesenv();
    }

    buscarDesenv() {
        fetch("https://localhost:3333/desenv")
        .then(resp => resp.json())
        .then(dados => {
            this.setState({ desenv : dados })
        })
    }

    deletarDesenv = (id) => {
        fetch("https://localhost:3333/desenv/" + id,{method: 'DELETE'})
        .then(resp => {
            if(resp.ok){
                this.buscarDesenv();
            }
        })
    }

    carregarDesenv = (id) => {
        fetch("https://localhost:3333/desenv/" + id,{method: 'GET'})
        .then(resp => resp.json())
        .then(desenv => {
            this.setState({ 
                id : desenv.id, 
                nome: desenv.nome,
                data_nascimento: desenv.data_nascimento,
                idade: desenv.idade,
                sexo: desenv.sexo
            })
        })
    }

    cadastraDesenv = (desenv) => {
        fetch("https://localhost:3333/desenv/",
            {method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(desenv)
        })
        .then(resp => {
            if(resp.ok){
                this.buscarDesenv();
            } else {
                alert('Desenvolvedor não cadastrado');
            }
        })
    }

    atualizarDesenv = (desenv) => {
        fetch("https://localhost:3333/desenv/",
            {method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(desenv)
        })
        .then(resp => {
            if(resp.ok){
                this.buscarDesenv();
            } else {
                alert('Não foi possível atualizar o desenvolvedor');
            }
        })
    }

    renderTabela() {
        return <Table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Data de nascimento</th>
                <th>Idade</th>
                <th>Opções</th>
            </tr>
        </thead>
        <tbody>

            {
                this.state.desenv.map((desenv) => 
                    <tr>
                        <td>{desenv.nome}</td>
                        <td>{desenv.data_nascimento}</td>
                        <td>{desenv.idade}</td>
                        <td>
                            <Button variant="danger" onClick={() => this.carregarDesenv(desenv.id)}>Atualizar</Button>
                            <Button variant="danger" onClick={() => this.deletarDesenv(desenv.id)}>Excluir</Button>
                        </td>
                    </tr>
                )
            }
            
        </tbody>
    </Table>
    }

    atualizaNome = (e) => {
        this.setState(
            {
                nome: e.target.value
            }
        )
    }

    atualizaDataNascimento = (e) => {
        this.setState(
            {
                data_nascimento: e.target.value
            }
        )
    }
    
    atualizaIdade = (e) => {
        this.setState(
            {
                idade: e.target.value
            }
        )
    }

    atualizaSexo = (e) => {
        this.setState(
            {
                sexo: e.target.value
            }
        )
    }
    
    submit() {

        if(this.state.id === ''){
            const desenv = {
                nome: this.state.nome,
                data_nascimento: this.state.data_nascimento,
                idade: this.state.idade,
                sexo: this.state.sexo,
            }
            this.cadastraDesenv(desenv);
        }else {
            const desenv = {
                id: this.state.id,
                nome: this.state.nome,
                data_nascimento: this.state.data_nascimento,
                idade: this.state.idade,
                sexo: this.state.sexo,
            }
            this.cadastraDesenv(desenv);
        }
    }

    reset = () => {
        this.setState({
            id: '',
            nome: '',
            data_nascimento: '',
            idade: 0,
            sexo: '',
        })
    }

    render(){
        return(
            <div>
                <Form>
                    <Form.Group className="mb-3">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" value={this.state.id} readOnly={true} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu nome" value={this.state.nome} onChange={this.atualizaNome} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                    <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control type="date" placeholder="Digite sua data de nascimento" value={this.state.data_nascimento} onChange={this.atualizaDataNascimento}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                    <Form.Label>Idade</Form.Label>
                    <Form.Check type="number" placeholder="Digite sua idade" value={this.state.idade} onChange={this.atualizaIdade}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                    <Form.Label>Sexo</Form.Label>
                    <Form.Check type="text" placeholder="Digite seu sexo" value={this.state.sexo} onChange={this.atualizaSexo}/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" onClick={this.submit}>
                    Salvar
                    </Button>
                    <Button variant="primary" type="submit" onClick={this.reset}>
                    Novo
                    </Button>
                </Form>

                {this.renderTabela()}
          </div>
        )
    }
    
}

export default Desenv;