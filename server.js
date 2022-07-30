const express = require('express');
const bodyParser = require('body-parser');
const { application } = require('express');
require('dotenv').config();
const port = process.env.PORT || 8080
app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.listen(port, console.log(`Server is listening on port ${port}`))