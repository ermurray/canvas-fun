const express = require('express');
const bodyParser = require('body-parser');
const liveReload = require('livereload');
const connectLiveReload = require('connect-livereload');
require('dotenv').config();
const port = process.env.PORT || 8080

const liveReloadServer = liveReload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app = express();

app.use(connectLiveReload())
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


app.listen(port, console.log(`Server is listening on port ${port}`))