"use strict";

//Creates Map
mapboxgl.accessToken = mapboxToken;
let mapBody = new mapboxgl.Map({
    container: 'mapBody',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 11,
    center: [-98.5216, 29.4626]
});

//Initial Array
let favoriteFood = [
    {
        name: "Bei-Fang",
        address: "11040 Frontage Rd#102, San Antonio, TX 78240",

    },
    {
        name: "Myung Ga Won",
        address: "4400 Rittiman Rd, San Antonio, TX 78218",
    },
    {
        name: "Freebirds World Burrito",
        address: "8603 TX-151 #213, San Antonio, TX 78245",
    }
];

//function to get geolocation for array
favoriteFood.forEach(function (food) {
        geocode(food.address, mapboxToken).then(function (result) {

            //adds coords to array using address
            food.exact = result;

            //variable to creat divs and adds class for markers
            let makeMarker = document.createElement("div");
            makeMarker.className = "marker";

            //variable to creat divs and adds class for markers
            let makePopup = document.createElement("div");
            makePopup.className = "popup";

            //creates popups
            let popUp = new mapboxgl.Popup(makePopup)
                .setText(food.name);

            //creates markers
            let marker = new mapboxgl.Marker(makeMarker)
                .setLngLat(food.exact)
                .addTo(mapBody)
                .togglePopup()
                .setPopup(popUp);
                document.getElementById('markersBtn').addEventListener('click',function(){
                    marker.remove()
                })
            });

        });

// adds controls to map
let nav = new mapboxgl.NavigationControl();
mapBody.addControl(nav);




