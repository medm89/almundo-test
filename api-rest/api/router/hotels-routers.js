const hotelsRouter = require('express').Router();

var datos = require('./hotels.data');

// Obtener todos los elementos
hotelsRouter.get('/', (request, response, next) => {
    datos.hotels.getAllHotel(function (err, hotel) {
        if (err) {
            next(err);
            response.send([]);
        }
        response.json(hotel);
    });
});
//Obtengo todos los hoteles filtrando por el numero de estrellas que hay seleccionado el usuario
hotelsRouter.get('/getHotelByStars/:stars', (request, response, next) => {
    var stars = request.params.stars;
    datos.hotels.searchByStars(stars,function (err,hotel) {
        if (err) {
            next(err);
            response.send([]);
        }
        response.json(hotel);
    });
});
//Obtengo todos los hoteles filtrando por nombre de estrellas que hay seleccionado el usuario
hotelsRouter.get('/getHotelByName/:name', (request, response, next) => {
    var name = request.params.name;
    datos.hotels.searchByName(name,function (err,hotel) {
        if (err) {
            next(err);
            response.send([]);
        }
        response.json(hotel);
    });
});
hotelsRouter.post('/', (request,response,next) => {
    datos.hotels.saveHotel(request.body,function (err, hotel) {
        if (err) {
            next(err);
            response.send([]);
        }
        response.json(hotel);
    });
});
// Eliminar un hotel de la lista
hotelsRouter.delete('/delHotel/:id', (request,response) => {
   var _id = request.params.id;
    datos.hotels.delHotel(_id,function (err, hotel) {
        if (err) {
            next(err);
            response.send([]);
        }
        response.json(hotel);
    });

});
// Modificar un hotel de la lista
hotelsRouter.put('/updateHotel/:idHotel', (request, response) => {
    var _id = request.params.idHotel;
    datos.hotels.updateHotel(_id,request,function (err, hotel) {
        if (err) {
            next(err);
            response.send([]);
        }
        response.json(hotel);
    });
});



module.exports = hotelsRouter;


