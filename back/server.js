const http = require('http');
const app = require('./app');
const server = http.createServer(app);
require('dotenv').config();
const port = process.env.PORT;

app.set('port', port);
server.listen(port);
console.log(`Listening on port ${port}`);
