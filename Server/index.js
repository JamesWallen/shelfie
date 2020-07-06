require('dotenv').config();
const express = require('express'),
    massive = require('massive'),
    ctrl = require('./controller'),
    {SERVER_PROT, CONNECTION_STRING} = process.env,
    app = express();

app.use(express.json());


app.listen(SERVER_PORT, () => console.log('Server running on ${SERVER_PORT}'));
