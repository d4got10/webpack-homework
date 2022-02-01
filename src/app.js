const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json('Вы отправили GET запрос');
});

app.post('/', (req, res) => {
    res.json('Вы отправили POST запрос');
});

app.delete('/', (req, res) => {
    res.json('Вы отправили DELETE запрос');
});

app.listen('3000', () => {
    console.log("Server started...");
});