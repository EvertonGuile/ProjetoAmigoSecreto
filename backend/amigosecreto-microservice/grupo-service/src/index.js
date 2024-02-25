const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());

app.use(routes);

mongoose.connect('mongodb+srv://evertinhuplayer:O93fSpTIvhf92qxL@firstcluster.vwo5uub.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(3334);