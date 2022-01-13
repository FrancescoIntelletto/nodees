const { response } = require('express');
const express = require('express');
const res = require('express/lib/response');
const app = express();
const { readFile } = require('fs');

//il browser fa una richiesta al server 
// il server elabora la risposta
// il server invia la risposta al browser

app.get('/', (request, response) => {
    readFile('home.html' , 'utf-8', (err,html) => {
        if (err) {
            response.status(500).send("[ERROR] server error! html page not found!");
        } else {
            response.send(html);
        }

    });
});

app.listen(3000, () => {
    console.log("[INFO] app on http://localhost:3000/");
});