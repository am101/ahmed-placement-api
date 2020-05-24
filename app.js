const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();



app.listen(process.env.PORT || 3000, () => {
	console.log(`server started on port ${process.env.PORT}`);
});
