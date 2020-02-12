"use strict";

    //exercise 1
    // var i = 2;
    // while (i<66000){
    //     console.log(i);
    //     i*=2;
    // }

    //exercise 2
    // This is how you get a random number between 50 and 100
    // var allCones = Math.floor(Math.random() * 50) + 50;
    // // This expression will generate a random number between 1 and 5
    // Math.floor(Math.random() * 5) + 1;

    var allCones = Math.floor(Math.random() * 50) + 50;
    var numCustomers = 0;

    do{
        var xSold = Math.floor(Math.random() * 5) + 1;
        console.log(allCones);
        if (allCones>=xSold){
            console.log(xSold + ' cones sold ...');
            allCones-=xSold;
            numCustomers+=1;
        } else {
            console.log("Cannot sell you " + xSold + " I only have " + allCones + " ...");
            numCustomers+=1;
        }
    } while (allCones !== 0);
console.log("Yay! I sold them all!");
console.log("Total customers today: " + numCustomers);



