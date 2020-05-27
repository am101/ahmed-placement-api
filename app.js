const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const connectionString = process.env.DB_URL

mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, (err, database) => {
	if(err) return console.log(err);
	require('./routes/editor')(app, database);
	require('./routes/general')(app, database);
	require('./routes/user')(app, database);
	
	

	app.listen(process.env.PORT || 3000, () => {
		console.log(`server started on port ${process.env.PORT}`);
	});
});


