const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.post('/', (req, res) => {
	res.send('heooloowrld');
	console.log(req.body.name)
	console.log(`${req.body.name} ${req.body.place}`)
});



app.listen(process.env.PORT || 3000, () => {
	console.log(`server started on port ${process.env.PORT}`);
});
