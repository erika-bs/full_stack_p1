## Como rodar

### Pré-requisitos:
- docker instalado
- vs code instalado
- extensão do Thunder Client instalada no vs code

## 1 - clonar o repositório

```bash
git clone https://github.com/erika-bs/full_stack_p1.git
```

## 2 - Subir os containers

```bash
docker-compose up --build
```
<img src="./images/1.png">

## 3 - Aguardar inicialização

A aplicação irá:

- Conectar ao MySQL
- Criar tabelas automaticamente
- Conectar ao MongoDB

<img src="./images/2.png">

## 4 - Acessar a API 

http://localhost:3000/artistas

<img src="./images/3.png">

http://localhost:3000/albums

<img src="./images/4.png">

## 5 - Testar endpoints com ThunderClient

## 5.1 - Inserir artistas 

POST http://localhost:3000/artistas 

<img src="./images/5.png" height="300">

<img src="./images/6.png" height="300">

<img src="./images/7.png" height="300">

## 5.2 - Atualizar artista

PUT http://localhost:3000/artistas/:id 

Corrigindo erro de digitação no nome:

<img src="./images/8.png" height="300">

## 5.3 - Listar artistas 

GET http://localhost:3000/artistas 

<img src="./images/9.png" height="300">

## 5.4 - Deletar artista 

DELETE http://localhost:3000/artistas/:id

<img src="./images/10.png">

<img src="./images/11.png" height="300">

## 5.5 - Inserir albums

POST http://localhost:3000/albums 

<img src="./images/12.png" height="300">

<img src="./images/13.png" height="300">

<img src="./images/14.png" height="300">

## 5.6 - Atualizar album

PUT http://localhost:3000/albums/:id

Corrigindo data de lançamento

<img src="./images/15.png" height="300">

## 5.7 - Listar albums

<img src="./images/16.png" height="300">

## 5.8 - Deletar album 

DELETE http://localhost:3000/albums/:id

<img src="./images/17.png">

<img src="./images/18.png" height="300">
