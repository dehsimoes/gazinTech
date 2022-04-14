<h1 align="center">
  <img src="https://www.gazin.com.br/images/svg/new-logo.svg" alt="Logo">
</h1>

## Tecnologias

- Node.js
- React.js
- Express
- TypeScript
- Docker
- PostgreSQL
- Yarn
- Axios
- TypeORM
- Celebrate

Utilizei a Stack: Node.js (backend) e React.js (Front-end) por ser as tecnologias utilizadas na empresa. 

## Rodando

### **Baixando o repositório**

```bash
git clone https://github.com/dehsimoes/gazintech.git
```


### **Back-end**


```bash
cd backend
```

### Instalar dependências 

```bash
yarn
ou
npm install
```

### Buildar e rodar docker-compose
```bash
docker-compose up -d --build
```

### Rodar as migrations 

```bash
yarn typeorm migration:run
```


### Insomnia
Utilizei o Insomnia para testar as rotas

## End-points

### **Desenvolvedores**

**Create [POST]**
```bash
/desenv
```

**Update [PUT]**
```bash
/desenv/{id}
```

**Delete [DELETE]**
```bash
/desenv/{id}
```

**Listar todos [GET]**
```bash
/desenv
```

**Listar um desenvolvedor[GET]**
```bash
/desenv/{id}
```

**Find By Name [GET]**
```bash
/desenv/?name=
```

### **Níveis**
**Create [POST]**
```bash
/nivel
```

**Update [PUT]**
```bash
/nivel/{id}
```

**Delete [DELETE]**
```bash
/nivel/{id}
```

**Listar todos [GET]**
```bash
/nivel
```

**Listar um desenvolvedor[GET]**
```bash
/nivel/{id}
```

### **Front-end**


```bash
cd frontend
```
### Instalar dependências 

```bash
yarn
ou
npm install
```

### Para start 

```bash
yarn start
```
