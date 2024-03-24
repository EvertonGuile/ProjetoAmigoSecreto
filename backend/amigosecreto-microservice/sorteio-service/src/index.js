const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(routes);

mongoose.connect(process.env.URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true
});

const port = 5040;

app.listen(port, () => console.log(`API online na porta ${port}!`));