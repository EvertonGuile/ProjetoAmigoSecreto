const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const port = 5000;

app.listen(port, () => console.log(`API GATEWAY online na porta ${port}!`));