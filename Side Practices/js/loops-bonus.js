(function () {
"use strict";


// Write a function that uses a loop to console.log "99 bottles of beer on the wall" until the passed argument number. Use a break to exit the loop, and console.log the message "Aw no, we're not doing that song again," in the event the argument is a number greater than or equal to 99, less than 0, or is not a number.

//prompt user how many beers we are starting at
    var userNumPick = parseFloat(prompt("How many we doing today?"));
    console.log(userNumPick);

//determine if what entered is number, >= 99 or < 0
    if (typeof userNumPick !== "number" || userNumPick >= 99 || userNumPick <= 0){
        console.log("Aw no, we're not doing that song again");//if not within 1 to 98
    } else {
        //sing song based on number given
        for(var i =userNumPick; i>0;i--){
            var minusOne = i - 1;
            //making sure number doesn't go negative
            if (minusOne !==0) {
                console.log(i + " bottle of beer on the wall!");
                console.log(i + " bottle of beer on the wall!");
                console.log("Take one down, pass it around, " + minusOne + " more bottles of beer on the wall");
                continue;
            }
            console.log(i + " bottle of beer on the wall!");
            console.log(i + " bottle of beer on the wall!");
            console.log("Take one down, pass it around, aww ... no more beers on the wall");
            break;
        }
    }

    // do {
    //
    //     var userNumber = parseFloat(prompt("Please enter a number between 1 and 99"));
    //
    //     if (userNumber < 1 || userNumber > 50){
    //         alert(userNumber + " is not between 1 and 50, please enter again");
    //     } else if (userNumber % 2 === 0){
    //         alert(userNumber + " is not odd, please enter again");
    //     } else if ( isNaN(userNumber)){
    //         alert(userNumber = " is not a number! Please enter again");
    //     } else {
    //         alert("Congrats, you picked the right number!");
    //         break;
    //     }
    //
    // } while(true);


})();
