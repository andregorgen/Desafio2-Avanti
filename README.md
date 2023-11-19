# Gerenciador de Eventos

## 🎯 Objetivo
Criar uma plataforma de gerenciamento de eventos culturais com foco no
desenvolvimento do backend. A plataforma permitirá aos organizadores de eventos
criar e listar eventos, e aos participantes explorar, pesquisar e filtrar eventos com
base em categorias, locais e datas.


## 📘 Descrição
Desenvolvemos o backend de uma aplicação web de gerenciamento de eventos culturais, onde é possível registrar um usuário e autenticá-lo via login, além de criar, deletar, atualizar e listar eventos, categorias e lugares.

Lista com as funcionalidades:
- [X] Registrar usuário
- [X] Login 
- [X] Criar
- [X] Listar
- [X] Atualizar
- [X] Deletar
- [X] Filtrar

![Gerando token](https://github.com/andregorgen/desafio_2/blob/master/assets/Print%20Insomnia.png)

## 🔧 Instalação
1. Após clonar este repositório, instale as dependências com o seguinte comando:

```
npm install
```
2. Crie o arquivo .env e edite o DATABASE_URL, o KEY SERVER e o PORT:

```
DATABASE_URL="postgresql://<USER>:<PASSWORD>@localhost:5432/<DATABASE>?schema=public"
KEY_SERVER={KEY_SERVER}
PORT={PORT}

________________________________________________________
<USER>: "Nome do usuário para conectar o banco de dados"
<PASSWORD>: "Senha para conectar ao banco de dados"
<DATABASE>: "Nome do banco de dados"

KEY_SERVER: "Sua chave secreta"

PORT: "A porta em que o seu servidor irá rodar"
```

3. Execute a criação BD e as migrações das tabelas:
```
npx prisma migrate dev
```

4. Você precisará rodar o servidor:
```
npm run dev
```

## Rotas do CRUD

Registro e login
 - `POST - http://localhost:<PORT>/register` ➔ Registrar usuário
 - `POST - http://localhost:<PORT>/login` ➔ Login do usuário

Eventos
 - `GET - http://localhost:<PORT>/event` ➔ Listar eventos
 - `POST - http://localhost:<PORT>/event` ➔ Criar evento
 - `PUT - http://localhost:<PORT>/event/:id` ➔ Atualizar evento
 - `DELETE - http://localhost:<PORT>/event/:id` ➔ Deletar evento

 Categorias
 - `GET - http://localhost:<PORT>/category` ➔ Listar categorias
 - `POST - http://localhost:<PORT>/category` ➔ Criar categoria
 - `PUT - http://localhost:<PORT>/category/:id` ➔ Atualizar categorias
 - `DELETE - http://localhost:<PORT>/category/:id` ➔ Deletar categoria

  Lugares
 - `GET - http://localhost:<PORT>/listPlace` ➔ Listar lugares
 - `POST - http://localhost:<PORT>/place` ➔ Criar lugar
 - `PUT - http://localhost:<PORT>/place/:id` ➔ Atualizar lugares
 - `DELETE - http://localhost:<PORT>/place/:id` ➔ Deletar lugar

  Filtros
 - `GET - http://localhost:<PORT>/categories/:category_id` ➔ Por categoria
 - `GET - http://localhost:<PORT>/places/:place_id` ➔ Por lugar
 - `GET - http://localhost:<PORT>/dates/:date` ➔ Por data
 - `GET - http://localhost:<PORT>/events/:id` ➔ Por evento


## 🛠️ Tecnologias & Dependências

* Node.js
* Prisma
* PostgreSQL
</br>
@prisma/client, @types/express, bcrypt, dotenv, express, jsonwebtoken, nodemon, pg, ts-node-dev, typescript


## ✒️ Autores

* **[André Gorgen](https://github.com/andregorgen)** - Desenvolvedor
* **[Ewerton Bertoldo](https://github.com/EwertonRafael)** - Desenvolvedor
* **[Herik Erberth](https://github.com/herikerbeth)** - Desenvolvedor
* **[Jéssica Vieira](https://github.com/jessicavsampaio)** - Desenvolvedora
* **[Luiz Felipe Moraes](https://github.com/luizfelipemoraessantos)** - Desenvolvedor
* **[Paulo Victor Rocha](https://github.com/PauloVictorRocha)** - Desenvolvedor
