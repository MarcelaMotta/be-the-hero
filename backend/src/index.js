const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express(); //instanciando a aplicação, variavel que vai armazenar a aplicacao

app.use(cors());
app.use(express.json());
app.use(routes);       //para suprir a rota q foi reposicionada em routes.js

app.listen(3333); //mandar a aplicação ouvir a porta 3333