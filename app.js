const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

require('./routes/editor')(app, {});



app.listen(process.env.PORT || 3000, () => {
	console.log(`server started on port ${process.env.PORT}`);
});
