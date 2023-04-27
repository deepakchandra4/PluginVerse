// import express
const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Working fine');
});

app.get('/home', (req, res) => {
    res.send('Response from home');
})


// add
// delete


app.listen( port, () => { console.log('server started') } );