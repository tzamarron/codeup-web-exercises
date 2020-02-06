"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

function evenOdd (number) {
    if (number % 2 === 0) {
        alert("Your number is even.");
    } else {
        alert("Your number is odd.");
    }
}
function plus100 (number) {
    alert(number + 100);
}
function negPos (number) {
    if(number >= 0) {
        alert("Your number is positive.");
    } else {
        alert("Your number is negative.");
    }
}
function isNum (){
    var userNumberSelect = +(prompt("Sweet, pick a whole number please."));
    if(/^\d+$/.test(userNumberSelect)) {
        return [evenOdd(userNumberSelect), plus100(userNumberSelect), negPos(userNumberSelect)]
    } else {
        alert("If you didn't want to pick a number if you didn't want too.");
    }
}
function areWePlaying() {
    var wannaPlay = confirm("Do you want to pick a number?");
    if (wannaPlay) {
        return isNum()
    } else {
        alert("Have a great day!");
    }

}
areWePlaying();

//confirm if user wants to pick number
//if no then end conversation-----END
//If yes the have user select number
//determine is what user entered is a number
//use alert to inform them if not a number
//if it is a number then:
//use number to determine whether even or odd
//use number to determine whether negative or postive
// add 100 to number

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color) {
//     if (color === "blue") {
//         return "blue is the color of a sky on a clear day.";
//     } else if (color === "red") {
//         return "red is the color of my favorite Gatorade flavor.";
//     } else if (color === "orange"){
//         return "Orange is the color of fruit I love most.";
//     } else if (color === "yellow" ){
//         return "Yellow is the color of the submarine.";
//     } else if (color === "green") {
//         return "Green is one of the color of my old high school.";
//     } else if (color === "indigo") {
//         return "Indigo is my sister's favorite color.";
//     } else if (color === "violet") {
//         return 'Violet looks like purple to me.';
//     } else {
//         return "I'm not sure what to say for that one.";
//     }
// }
// console.log(analyzeColor("orange"));
// console.log(analyzeColor("red"));
// console.log(analyzeColor("pencil"));
// console.log(analyzeColor("blue"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// switch (randomColor) {
//     case ('blue'):
//         alert("blue is the color of a sky on a clear day.");
//         break;
//     case ('red'):
//         alert("red is the color of my favorite Gatorade flavor.");
//         break;
//     case ('orange'):
//         alert("Orange is the color of fruit I love most.");
//         break;
//     case ('yellow'):
//         alert("Yellow is the color of the submarine.");
//         break;
//     case ('green'):
//         alert("Green is one of the color of my old high school.");
//         break;
//     case ('indigo'):
//         alert("Indigo is my sister's favorite color.");
//         break;
//     case ('violet'):
//         alert('Violet looks like purple to me.');
//         break;
//     default:
//         alert("I dont know anything about that");
//         break;
// }
// console.log(randomColor);

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var userColor = prompt("What is your favorite color?");
// var userAnswer = analyzeColor(userColor);
// alert(userAnswer);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// var personalDis = parseInt(prompt('Enter your lucky number'));
// var totalPrice = parseFloat(prompt("How much is your total without discount?"));
// function calculateTotal(luckyNum, totalAmt) {
//     var userDiscountTotal;
//     switch (luckyNum) {
//         case 1:
//             userDiscountTotal = .1;
//             break;
//         case 2:
//             userDiscountTotal = .25;
//             break;
//         case 3:
//             userDiscountTotal = .35;
//             break;
//         case 4:
//             userDiscountTotal = .5;
//             break;
//         case 5:
//             userDiscountTotal = 1;
//             break;
//         default:
//             userDiscountTotal = 0;
//             break;
//     }
//     var calcUserDiscount = totalAmt * userDiscountTotal;
//     return totalAmt - calcUserDiscount;
// }
// alert("Your total amount is $" + (calculateTotal(personalDis, totalPrice)).toFixed(2) + ".");

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

// var userBill = parseFloat(prompt("What is your total bill?"));
// alert("Your Lucky number today was " + luckyNumber + ".");
// alert("Your total of $" + userBill + " is now $" + calculateTotal(luckyNumber, userBill) + " thanks to your lucky number.");




