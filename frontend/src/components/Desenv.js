import React from "react";
import {Table, Button, Form, Modal} from 'react-bootstrap';

class Desenv extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            id: 0,
            nome: '',
            nivel_id: '',
            nivel:'',
            data_nascimento: '',
            idade: 0,
            sexo: '',
            hobby: '',
            desenvs: [],
            modalAberta: false
        }
    }

    componentDidMount(){
        this.buscarDesenv();
    }

    buscarDesenv() {
        fetch("http://localhost:3333/desenv")
        .then(resp => resp.json())
        .then(dados => {
            this.setState({ desenvs : dados })
        })
    }

    deletarDesenv = (id) => {
        fetch("http://localhost:3333/desenv/" + id,{method: 'DELETE'})
        .then(resp => {
            if(resp.ok){
                this.buscarDesenv();
                alert('Desenvolvedor excluído');
            }else{
                alert('Não foi possível excluir');
            }
        })
    }

    carregarDesenv = (id) => {
        fetch("http://localhost:3333/desenv/" + id,{method: 'GET'})
        .then(resp => resp.json())
        .then(desenvs => {
            this.setState({ 
                id : desenvs.id, 
                nome: desenvs.nome,
                nivel: desenvs.nivel_id,
                data_nascimento: desenvs.data_nascimento,
                idade: desenvs.idade,
                sexo: desenvs.sexo,
                hobby: desenvs.hobby
            })
            this.abrirModal();
        })
    }

    carregarNivel = (id) => {
        fetch("http://localhost:3333/nivel/" + id,{method: 'GET'})
        .then(resp => resp.json())
        .then(level => level.nivel)
    }

    cadastraDesenv = (desenvs) => {
        fetch("http://localhost:3333/desenv",
            {method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(desenvs)
        })
        .then(resp => {
            if(resp.ok){
                this.buscarDesenv();
            } else {
                alert('Desenvolvedor não cadastrado');
            }
        })
    }

    atualizarDesenv = (desenvs) => {
        fetch("http://localhost:3333/desenv",
            {method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(desenvs)
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
        
        return <Table className="table table-striped table-dark mt-3">
           
        <thead>
            <tr>
                <th>Nome</th>
                <th>Data de nascimento</th>
                <th>Idade</th>
                <th>Hobby</th>
                <th>Nível</th>
                <th>Opções</th>
            </tr>
        </thead>
        <tbody>

            {
                this.state.desenvs.map((desenvs) => 
                    <tr>
                        <td>{desenvs.nome}</td>
                        <td>{desenvs.data_nascimento}</td>
                        <td>{desenvs.idade}</td>
                        <td>{desenvs.hobby}</td>
                        <td>{desenvs.nivel_id}</td>
                        <td>
                            <Button className="m-2" variant="danger" onClick={() => this.carregarDesenv(desenvs.id)}>Atualizar</Button>
                            <Button variant="danger" onClick={() => this.deletarDesenv(desenvs.id)}>Excluir</Button>

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

    atualizaHobby = (e) => {
        this.setState(
            {
                hobby: e.target.value
            }
        )
    }

    atualizaNivelId = (e) => {
        this.setState(
            {
                nivel_id: e.target.value
            }
        )
    }
    
    submit() {
        if(this.state.id === '' || this.state.id === undefined){
            const desenvs = {
                nome: this.state.nome,
                nivel_id: this.state.nivel_id,
                data_nascimento: this.state.data_nascimento,
                idade: this.state.idade,
                sexo: this.state.sexo,
                hobby: this.state.hobby
            }
            this.cadastraDesenv(desenvs);
        }else {
            const desenvs = {
                id: this.state.id,
                nome: this.state.nome,
                nivel_id: this.state.nivel_id,
                data_nascimento: this.state.data_nascimento,
                idade: this.state.idade,
                sexo: this.state.sexo,
                hobby: this.state.hobby
            }
            this.atualizarDesenv(desenvs);
        }
    }

    reset = () => {
        this.setState({
            id: 0,
            nome: '',
            nivel_id: '',
            data_nascimento: '',
            idade: 0,
            sexo: '',
            hobby: ''
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
                    <Modal.Title>Cadastro de Desenvolvedor</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                    <Form.Group className="mb-2">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" value={this.state.id} readOnly={true} />
                    </Form.Group>
                    <Form.Group className="mb-2">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu nome" value={this.state.nome} onChange={this.atualizaNome} />
                    </Form.Group>
                    <Form.Group className="mb-2">
                    <Form.Label>Nivel Id</Form.Label>
                    <Form.Control type="text" placeholder="Digite o ID do nivel" value={this.state.nivel_id} onChange={this.atualizaNivelId} />
                    </Form.Group>
                    <Form.Group className="mb-2">
                    <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control type="date" placeholder="Digite sua data de nascimento" value={this.state.data_nascimento} onChange={this.atualizaDataNascimento}/>
                    </Form.Group>
                    <Form.Group className="mb-2">
                    <Form.Label>Idade</Form.Label>
                    <Form.Control type="number" placeholder="Digite sua idade" value={this.state.idade} onChange={this.atualizaIdade} />
                    </Form.Group>
                    <Form.Group className="mb-2">
                    <Form.Label>Sexo</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Selecione o Sexo</option>
                        <option value="Masculino" onChange={this.atualizaSexo}>Masculino</option>
                        <option value="Feminino" onChange={this.atualizaSexo}>Feminino</option>
                        <option value="LGBTQIA" onChange={this.atualizaSexo}>LGBTQIA</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-2">
                    <Form.Label>Hobby</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu hobby favorito" value={this.state.hobby} onChange={this.atualizaHobby} />
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

                <Button className="m-2" variant="primary" type="submit" onClick={this.reset}>
                    Novo
                </Button>

                

                {this.renderTabela()}
          </div>
        )
    }
    
}

export default Desenv;