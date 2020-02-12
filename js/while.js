(function(){
"use strict";

    //exercise 1
    // var i = 2;
    // while (i<66000){
    //     console.log(i);
    //     i*=2;
    // }

    //review way
    // same way


    //exercise 2
    // This is how you get a random number between 50 and 100
    // var allCones = Math.floor(Math.random() * 50) + 50;
    // // This expression will generate a random number between 1 and 5
    // Math.floor(Math.random() * 5) + 1;

        //start of cones
//     var allCones = Math.floor(Math.random() * 50) + 50;
//     var numCustomers = 0;
//
//     do{
            //random number for cones customer wants to buy
//         var xSold = Math.floor(Math.random() * 5) + 1;
//         console.log(allCones);

            //confirm we have enough cones for person
//         if (allCones>=xSold){

                //if enough cones for customer
//             console.log(xSold + ' cones sold ...');

                //subtract cones bought from total
//             allCones-=xSold;

                //add customer to visit count
//             numCustomers+=1;
//         } else {

                //dont have enough cones for customer
//             console.log("Cannot sell you " + xSold + " I only have " + allCones + " ...");

                //add customer to visit count
//             numCustomers+=1;
//         }
//     } while (allCones !== 0); //confirm total count is not 0

    //once sold out
// console.log("Yay! I sold them all!");

    //notify customer count for the day
// console.log("Total customers today: " + numCustomers);

    //review way
    // 1. Generate the total amount of cones to sell for the day -> allCones
    // 2. Now we are in the loop - we need to generate /check how many cones the customer wants to buy -> conesPurchased
    // 3. If conesPurchased > allCones -> I don't have enough cones to sell :( sad path
    // 4. If i do have enough cones -> I can sell them! allCones = allCones -conesPurchased
    // 5. repeat this process while allCones >0
    // 6 completes the loop -> after the loop I can go home! - console.log("Yay I sold all my cones!")

    // var allCones = Math.floor(Math.random() * 50) + 50;
    //
    // do {
    //     var conesPurchased = Math.floor(Math.random() * 5) + 1;
    //
    //     if (conesPurchased > allCones){
    //         var sadMessage = "Cannot sell you " + conesPurchased + " I only have " + allCones + " left";
    //         console.log(sadMessage);
    //
    //     } else {
    //         allCones -= conesPurchased;
    //
    //         var happyMessage = conesPurchased + " cones sold ... " + allCones + " cones to go!";
    //         console.log(happyMessage);
    //     }
    // } while (allCones > 0);
    //
    // console.log("Yay I sold all my cones!");



})();