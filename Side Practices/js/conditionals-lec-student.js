"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin
//TODO Together: Send a 20% off coupon if its users birthday
//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.

// var isAdmin = true;
// if(isAdmin) {
//     console.log("Displaying Admin Navbar");
// }
// var isBirthday = true
// ;if(isBirthday) {
//     console.log("Sending Coupon");
// }
// var isRainy = true;
// if(isRainy) {
//     console.log("It's Raining");
// }
// var currentBalance = 100000;
// var itemCost = 50000;
// if(currentBalance > itemCost) {
//     alert("You can buy it!")
// }

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
// var numLives = 0;
// if(numLives === 0) {
//     alert ("Sorry, game over.")
// }

// var isSnowing = true;
// if(isSnowing) {
//     alert("It's Snowing!")
// }

// var numberInput = 10;
// if (numberInput > 10) {
//     alert("True")
// }


//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.
//
// function gameOver(input) {
//     if (input === 0) {
//         alert("Sorry, game over.");
//     } else {
//         alert("Continue?");
//     }
// }
// gameOver(numLives);
//
// function snowing(input) {
//     if(input) {
//         alert("It's Snowing!");
//     } else {
//         alert("Maybe tomorrow.");
//     }
// }
// snowing(isSnowing);
//
// function tenPlus(input) {
//     if(input > 10) {
//         alert("True");
//     } else {
//         alert("False");
//     }
// }
// tenPlus(numberInput);
// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar

// var isAdmin = true;
// function adminNav(input) {
//     if(isAdmin) {
//         console.log("Displaying Admin Navbar");
//     } else {
//         console.log("Display reg Navbar.");
//     }
// }
// adminNav(isAdmin);
//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"

// var isRainy = true;
// function isWet(weatherCond) {
//     if (isRainy) {
//         alert("It's Raining");
//     } else {
//         alert("Have a nice day");
//     }
// }
// isWet(isRainy);



//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

// function gameOver(input) {
//     if (input === 0) {
//         alert("Sorry, game over.");
//     } else {
//         alert("Next Level!");
//     }
// }
// gameOver(numLives);

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

// var weather = "snowing";
// function snowing(input) {
//     if(input) {
//         alert("It's Snowing!");
//     } else {
//         alert("Check back later for more details!");
//     }
// }
// snowing(weather);

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

// var numberInput = 10;
// function tenPlus(input) {
//     if(input > 10) {
//         alert("True");
//     } else {
//         alert("The number is less than 10");
//     }
// }
// tenPlus(numberInput);

//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!. 

// var numberOfLives = 10;
// function checkIfGameIsOver(input) {
//     if (input === 0) {
//         return "Sorry, game over.";
//     } else {
//         return "Next Level!";
//     }
// }
// console.log(gameOver(numberOfLives));

//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

    
    
// SHOULD WE DELETE STUFF EXAMPLE




//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// var is13 = true;
// function oldEnough(userAge) {
//     if (userAge) {
//         alert("You may proceed");
//     } else {
//         alert("Sorry, you are not able to proceed.")
//     }
// }
// oldEnough(is13);

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

    

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases



//TODO Together: refactor the above statement as a function

// Together: PIZZA PREFERENCE EXAMPLE 

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

// var lightColor = "red";
// function lightstatus(color) {
//     if(lightColor === "red") {
//         return "Stop"
//     } else if ('green') {
//         return "Go"
//     } else {
//         return "Slow down"
//     }
// }
// lightstatus(lightColor);




// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.







// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!

// var weatherMessage = "rainy" ? "It's raining" : "Have a nice day!";


// =============== SWITCH STATEMENT ================
//TODO Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.



//TODO: Rewrite the intersection function from earlier as a switch statement.



// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

