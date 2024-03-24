require('dotenv').config();
const express = require('express');

const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

app.use(express.json());

app.use(routes);

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const port = 5010;

app.listen(port, () => console.log(`API online na porta ${port}!`));