const express = require('express');
const bodyParser = require('body-parser');
const liveReload = require('livereload');
const connectLiveReload = require('connect-livereload');
const open = require('better-opn');

require('dotenv').config();
const port = process.env.PORT || 8080
const hostBaseUrl = process.env.HOST_BASE_URL || 'http://localhost:'
const environment = process.env.ENVIROMENT || 'dev'


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

// if dev open browser to dev url and if tab is already open refresh that tab with better-opn, only works on mac and chrome browser
if (environment === 'dev') {
  try {
    open(`${hostBaseUrl}${port}`)
  }
  catch(err) {
    console.log(err)
  }
}