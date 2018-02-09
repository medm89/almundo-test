/**
 * Created by emto on 02/02/2018.
 */
const path = require('path');
const fs = require('fs');
var conts = fs.readFileSync("./data/data.json");
var hotel = JSON.parse(conts);

module.exports = {
    hotels: {
        getAllHotel: function (callback) {
            callback(null, hotel);
        },
        saveHotel: function (nhotel, callback) {
            hotel.push(nhotel);
            callback(null, hotel);
        },
        searchByStars: function (_stars, callback) {
            var arr_stars = _stars.split(",");
            var encontrados = hotel.filter(function (prod) {
                if(arr_stars[6] != 6) {
                    for (var i = 1; i <= arr_stars.length; i++){
                        if (prod.stars == arr_stars[i]) {
                            return prod;
                        }
                    }
                }else{
                    return prod;
                }
            });

            if (!encontrados.length) {
                callback(null, []);
             }
            callback(null, encontrados);
        },
        searchByName: function (_name, callback) {
            var encontrados = hotel.filter(function (prod) {
                if (prod.name.toLowerCase().indexOf(_name.toLowerCase()) != -1 ) {
                    return prod;
                }
            });
            if (!encontrados.length) {
                callback(null, []);
                 return;
            }
            callback(null, encontrados);
        },
        delHotel : function (_id,callback) {
            let existe= false;
            var encontrados = hotel.filter(function (prod) {
                if (prod.id != _id) {
                    return prod;
                }else{
                    existe= true;
                }
             });
            hotel = encontrados;
            if(existe){
                callback(null, {"Message": "The Hotel was removed correctly"});
            }else {
                callback(null, {"Message": "The Hotel does not exist"});
            }
        },
        updateHotel: function (_id, request, callback) {
            let newInfo = request.body;
            var encontrados = hotel.filter(function (prod) {
                    if (prod.id == _id) {
                        prod.name =newInfo.name;
                        prod.stars =newInfo.stars;
                        prod.price =newInfo.price;
                        prod.image =newInfo.image;
                        prod.amenities =newInfo.amenities;
                        callback(null, {"menssage" : `The Hotel ${newInfo.name} was uploaded`});
                    }
              });
            callback(null, {"menssage" : `An error has occurred`});
        }

    }
};
