"use strict";

mapboxgl.accessToken = mapboxToken;
let mapBody = new mapboxgl.Map({
    container: 'mapBody',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 11,
    center: [-98.5216, 29.4626]
});

// let favoriteFood = [
//     {
//         name: "Bei-Fang",
//         address: "11040 Frontage Rd#102, San Antonio, TX 78240",
//
//     },
//     {
//         name: "Myung Ga Won",
//         address: "4400 Rittiman Rd, San Antonio, TX 78218",
//     },
//     {
//         name: "Freebirds World Burrito",
//         address: "8603 TX-151 #213, San Antonio, TX 78245",
//     }
// ];
//
// let markerOptions = {
//     color:"rebeccapurple",
//     cursor: "pointer"
// };
//
// favoriteFood.forEach(function (food) {
//         geocode(food.address, mapboxToken).then(function (result) {
//             food.exact = result;
//             let popUp = new mapboxgl.Popup()
//                 .setText(food.name);
//             let marker = new mapboxgl.Marker(markerOptions)
//                 .setLngLat(food.exact)
//                 .addTo(mapBody)
//                 .togglePopup()
//                 .setPopup(popUp);
//         })
//     });
//
// console.log(favoriteFood);
// var nav = new mapboxgl.NavigationControl();
// mapBody.addControl(nav,);


var geojson = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-98.581, 29.546]
        },
        properties: {
            title: 'Bei-Fang',
            description: 'Chinese Food'
        }
    },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-98.656, 29.439]
            },
            properties: {
                title: 'Freebirds World Burrito',
                description: 'yes'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-98.407, 29.483]
            },
            properties: {
                title: 'Myung Ga Won',
                description: 'Korean BBQ'
            }
        }]
};

// add markers to map
geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
        .addTo(mapBody);
});
