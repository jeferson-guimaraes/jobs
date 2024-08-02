# Aplicação cadastro de vagas de emprego - Jobs

![GitHub License](https://img.shields.io/github/license/jeferson-guimaraes/jobs)

## Sobre o projeto

Este é um projeto pessoal desenvolvido para fins de estudo e prática, abrangendo tanto a criação de uma API quanto de uma aplicação frontend para gerenciar vagas de emprego. A aplicação permite criar, ler, atualizar e deletar vagas de emprego, bem como realizar buscas por vagas usando palavras-chave.

```
/
├── api/
|   ├── prisma/
│   |   ├── schema.prisma
│   ├── src/
│   |   ├── controllers/
|   │   |   ├── CreateJobController.ts
|   │   |   ├── DeleteJobController.ts
|   │   |   ├── ListJobController.ts
|   │   |   ├── ShowJobController.ts
|   │   |   ├── ShowJobsController.ts
|   │   |   ├── UpdateJobController.ts
│   |   ├── prisma/
|   │   |   ├── index.ts
│   |   ├── service/
|   │   |   ├── CreateJobService.ts
|   │   |   ├── DeleteJobService.ts
|   │   |   ├── ListJobService.ts
|   │   |   ├── ShowJobService.ts
|   │   |   ├── ShowJobsService.ts
|   │   |   ├── UpdateJobService.ts
│   |   ├── routes.ts
│   |   ├── server.ts
│   ├── .env
│   ├── package.json
│   ├── tsconfig.json
├── frontend/
│   ├── public/
|   │   ├── capa.jpg
|   │   ├── vite.svg
│   ├── src/
│   │   ├── components/
|   |   │   ├── Header/
|   |   |   │   ├── index.tsx
|   |   |   │   ├── styles.tsx
|   |   │   ├── Inputs/
|   |   |   │   ├── Input
|   |   |   |   │   ├── index.tsx
|   |   |   |   │   ├── styles.tsx
|   |   |   │   ├── InputMoney
|   |   |   |   │   ├── index.tsx
|   |   |   │   ├── InputSearch
|   |   |   |   │   ├── index.tsx
|   |   |   |   │   ├── styles.tsx
|   |   |   │   ├── InputWithButton
|   |   |   |   │   ├── index.tsx
|   |   |   |   │   ├── styles.tsx
|   |   │   ├── JobCard/
|   |   |   │   ├── index.tsx
|   |   |   │   ├── styles.tsx
|   |   │   ├── Modals/
|   |   |   │   ├── AlertModal
|   |   |   |   │   ├── index.tsx
|   |   |   │   ├── ConfirmationModal
|   |   |   |   │   ├── index.tsx
|   |   |   │   ├── styles.tsx
|   |   │   ├── Select/
|   |   |   │   ├── index.tsx
|   |   |   │   ├── styles.tsx
|   |   │   ├── Table/
|   |   |   │   ├── index.tsx
|   |   |   │   ├── styles.tsx
|   |   │   ├── TextArea/
|   |   |   │   ├── index.tsx
|   |   |   │   ├── styles.tsx
│   │   ├── contexts/
|   |   │   ├── ModalContext.tsx
|   |   │   ├── SearchContext.tsx
|   │   ├── pages/
|   |   │   ├── Home
|   |   |   │   ├── index.tsx
|   |   |   │   ├── styles.tsx
|   |   │   ├── Job
|   |   |   │   ├── index.tsx
|   |   |   │   ├── styles.tsx
|   |   │   ├── JobEdit
|   |   |   │   ├── index.tsx
|   |   |   │   ├── styles.tsx
|   |   │   ├── NewJob
|   |   |   │   ├── index.tsx
|   |   |   │   ├── styles.tsx
|   |   │   ├── Search
|   |   |   │   ├── index.tsx
│   │   ├── services/
|   |   │   ├── api.ts
│   │   ├── styles/
|   |   │   ├── breakpoint.tsx
|   |   │   ├── global.tsx
│   │   ├── types/
|   |   │   ├── input.ts
|   |   │   ├── job.ts
|   |   │   ├── modal.ts
|   |   │   ├── select.ts
|   |   │   ├── textarea.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.app.json
│   ├── tsconfig.json
├── README.md
```

### Funcionalidades

* Cadastrar novas vagas
* Listar todas as vagas
* Editar vagas
* Deletar vagas
* Buscar por palavras chaves

### Tecnologias utilizadas

#### Backend

* Node.js
* Fastify
* Prisma
* MongoDB
* Dotenv
* TypeScript

#### Frontend

* React
* React Router
* React Modal
* React Hook Form
* Context API
* Styled CSS
* Axios
* Vite
* TypeScript

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/pt)

Além disso, é bom ter um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/).

### Como executar o projeto

#### 1. Clone o repositório
```
git clone https://github.com/jeferson-guimaraes/jobs.git
```

#### 2. Acesse o diretório do projeto
```
cd jobs/backend
```

#### 3. Instale as dependências
```
npm install
```

#### 4. Configure as variáveis de ambiente
Renomeie o arquivo _.env-exemple_ para _.env_ e coloque a URL da conexão com seu banco de dados MongoDB

>**Obs:** Pode ser preciso inserir o nome do banco de dados entre a '/' e o '?' após 'mongodb.net' na URL fornecida pelo MongoDB. Ex:
``` mongodb+srv://<user-name>:<passwrod>@<db-name>.qfy4xz1.mongodb.net/<inserir-db-name>?retryWrites=true&w=majority&appName=<db-name> ```

```
DATABASE_URL=your_database_url_here
```

#### 5. Gere o prisma client
```
npx prisma generate
```

#### 5. Execute o backend
```
npm run dev
```

#### 6. Acesse o diretório do frontend
```
cd ../frontend
```

#### 7. Acesse o diretório do frontend em outro terminal
```
cd jobs/frontend
```

#### 8. Instale as dependências
```
npm install
```

#### 9. Execute o frontend
```
npm run dev
```

### Endpoints da API

#### Cadastrar Vaga
```
POST /job
```

##### Body:
```
{
    "title": "Título da vaga",
    "company": "Empresa",
    "location": "Localização",
    "summary": "Resumo da vaga",
    "description": "descrição completa da vaga",
    "requirements": [
			"Requisito 1",
			"Requisito 2",
			"Requisito 3",
			...
    ],
    "salary": 3000,
    "benefits": [
			"Beneficio 1",
			"Beneficio 2",
			"Beneficio 3",
			...
    ],
    "type": "Home Office",
    "employment_regime": "CLT"
}
```

##### Resposta:
```
{
    "id": "iddavaga",
    "title": "Título da vaga",
    "company": "Empresa",
    "location": "Localização",
    "summary": "Resumo da vaga",
    "description": "descrição completa da vaga",
    "requirements": [
			"Requisito 1",
			"Requisito 2",
			"Requisito 3"
    ],
    "salary": 3000,
    "benefits": [
			"Beneficio 1",
			"Beneficio 2",
			"Beneficio 3"
    ],
    "type": "Home Office",
    "employment_regime": "CLT"
		"status": true,
    "created_at": "2024-06-30T16:14:34.014Z",
    "updated_at": "2024-06-30T16:14:34.014Z"
}
```

#### Listar Vagas
```
GET /jobs
```
##### Resposta:
```
[	
	{
		"id": "iddavaga",
		"title": "Título da vaga",
		"company": "Empresa",
		"location": "Localização",
		"summary": "Resumo da vaga",
		"description": "descrição completa da vaga",
		"requirements": [
			"Requisito 1",
			"Requisito 2",
			"Requisito 3"
		],
		"salary": 3000,
		"benefits": [
			"Beneficio 1",
			"Beneficio 2",
			"Beneficio 3"
		],
		"type": "Home Office",
		"employment_regime": "CLT"
		"status": true,
		"created_at": "2024-06-30T16:14:34.014Z",
		"updated_at": "2024-06-30T16:14:34.014Z"
	},
	{
		"id": "iddavaga2",
		"title": "Título da vaga",
		"company": "Empresa",
		"location": "Localização",
		"summary": "Resumo da vaga",
		"description": "descrição completa da vaga",
		"requirements": [
			"Requisito 1",
			"Requisito 2",
			"Requisito 3"
		],
		"salary": 3000,
		"benefits": [
			"Beneficio 1",
			"Beneficio 2",
			"Beneficio 3"
		],
		"type": "Home Office",
		"employment_regime": "CLT"
		"status": true,
		"created_at": "2024-06-30T16:14:34.014Z",
		"updated_at": "2024-06-30T16:14:34.014Z"
	}
]
```

#### Recuperar Vaga
```
GET /job?id=:id
```
##### Query Parameter:
- `id`: ID da vaga a ser recuperada

##### Resposta:
```
{
  "id": "iddavaga",
	"title": "Título da vaga",
	"company": "Empresa",
	"location": "Localização",
	"summary": "Resumo da vaga",
	"description": "descrição completa da vaga",
	"requirements": [
		"Requisito 1",
		"Requisito 2",
		"Requisito 3"
	],
	"salary": 3000,
	"benefits": [
		"Beneficio 1",
		"Beneficio 2",
		"Beneficio 3"
	],
	"type": "Home Office",
	"employment_regime": "CLT"
	"status": true,
	"created_at": "2024-06-30T16:14:34.014Z",
	"updated_at": "2024-06-30T16:14:34.014Z"
}
```

#### Pesquisar por Vagas
```
GET /jobs/search?query=:query
```
##### Query Parameter:
- `query`: Palavas chaves a serem buscadas nas vagas

##### Resposta:
```
[
	{
		"id": "iddavaga",
		"title": "Título da vaga",
		"company": "Empresa",
		"location": "Localização",
		"summary": "Resumo da vaga",
		"description": "descrição completa da vaga",
		"requirements": [
			"Requisito 1",
			"Requisito 2",
			"Requisito 3"
		],
		"salary": 3000,
		"benefits": [
			"Beneficio 1",
			"Beneficio 2",
			"Beneficio 3"
		],
		"type": "Home Office",
		"employment_regime": "CLT"
		"status": true,
		"created_at": "2024-06-30T16:14:34.014Z",
		"updated_at": "2024-06-30T16:14:34.014Z"
	},
	{
		"id": "iddavaga",
		"title": "Título da vaga",
		"company": "Empresa",
		"location": "Localização",
		"summary": "Resumo da vaga",
		"description": "descrição completa da vaga",
		"requirements": [
			"Requisito 1",
			"Requisito 2",
			"Requisito 3"
		],
		"salary": 3000,
		"benefits": [
			"Beneficio 1",
			"Beneficio 2",
			"Beneficio 3"
		],
		"type": "Home Office",
		"employment_regime": "CLT"
		"status": true,
		"created_at": "2024-06-30T16:14:34.014Z",
		"updated_at": "2024-06-30T16:14:34.014Z"
	}
]
```

#### Atualizar Vaga
```
PUT /job
```

##### Body:
```
{
    "title": "Título da vaga",
    "company": "Empresa",
    "location": "Localização",
    "summary": "Resumo da vaga",
    "description": "descrição completa da vaga",
    "requirements": [
			"Requisito 1",
			"Requisito 2",
			"Requisito 3",
			...
    ],
    "salary": 3000,
    "benefits": [
			"Beneficio 1",
			"Beneficio 2",
			"Beneficio 3",
			...
    ],
    "type": "Home Office",
    "employment_regime": "CLT"
}
```

##### Resposta:
```
{
    "id": "iddavaga",
    "title": "Título da vaga",
    "company": "Empresa",
    "location": "Localização",
    "summary": "Resumo da vaga",
    "description": "descrição completa da vaga",
    "requirements": [
			"Requisito 1",
			"Requisito 2",
			"Requisito 3"
    ],
    "salary": 3000,
    "benefits": [
			"Beneficio 1",
			"Beneficio 2",
			"Beneficio 3"
    ],
    "type": "Home Office",
    "employment_regime": "CLT"
		"status": true,
    "created_at": "2024-06-30T16:14:34.014Z",
    "updated_at": "2024-06-30T16:14:34.014Z"
}
```

#### Deletar Vaga
```
DELETE /job?id=:id
```
##### Query Parameter:
- `id`: ID da vaga a ser deletado

##### Resposta:
```
{
	"mensage": "Deletado com sucesso",
}
```