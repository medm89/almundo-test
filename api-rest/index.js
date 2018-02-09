const express = require('express');
const path = require('path');
const port = 3300;
const app = express();
const bodyParser = require('body-parser');
const hrouters = require('./api/router/hotels-routers');
const server =  require('http').createServer(app);
const morgan = require('morgan');
// morgan se usa para saber que tipo de petición se esta utilizando
app.use(morgan( 'dev' ));

app.get( '/' , (request,response) => {
    response.sendFile(path.join(__dirname,'index.html'));
});
//body parse para aceptar que entren archivos Json a la aplicación y les realice el parse inmediatamente
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

// modulo para ejecutar la aplicacion
app.use('/hotels',hrouters);


server.listen(port,() =>  {
    console.log("Server running on the port", port);
});