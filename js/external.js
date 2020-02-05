"use strict";

// alert("Welcome to my Website!");
//
// var userFavColor = prompt("What is your favorite color?");
// var favColorResp = "Great, " + userFavColor + ' is my favorite color too!';
// alert(favColorResp);

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

// var rentalPrice = parseFloat(prompt("What is the daily rental fee?"));
// var littleMermaidRental = parseInt(prompt("How many days did you rent The Little Mermaid for?"));
// var brotherBearRental = parseInt(prompt("How many days did you rent Brother Bear for?"));
// var herculesRental = parseInt(prompt("How many days did you rent Hercules for?"));
// var rentalTotal = (littleMermaidRental + brotherBearRental + herculesRental) * rentalPrice;
// alert("Your total amount for your rentals is $" + rentalTotal + ".");

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

// var googlePay = parseFloat(prompt("What is your hourly pay for Google?"));
// var amazonPay =parseFloat( prompt("What is your hourly pay for Amazon?"));
// var fbPay = parseFloat( prompt("What is your hourly pay for Facebook?"));
// var googleHours = parseFloat( prompt("How many hours did you work for Google this week?")) * googlePay;
// var amazonHours = parseFloat( prompt("How many hours did you work for Amazon this week?")) * amazonPay;
// var fbHours = parseFloat( prompt("How many hours did you work for Facebook this week?")) * fbPay;
// var totalPayment = (googlePay * googleHours) + (amazonPay * amazonHours) + (fbHours * fbPay);
// alert("Your total payment this week is $" + totalPayment + ".");

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

// var classFull = confirm("Is the class your trying to enroll in full?");
// var timeConflict = confirm("The class your enrolling in starts at 9am. Do you have anything scheduled that may conflict with this?");
// var canIEnroll = classFull === false && timeConflict === false;
// var enrollStatus = function statusResponse () {
//     if (canIEnroll === true) {
//         return "You have enrolled in class!";
//     } else {
//         return "You are unable to enroll to this class at this time.";
//     }
// };
// alert(enrollStatus());

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
// var isPrimMem = confirm("Are you a prime member?");
// var amountPurch = parseFloat(prompt("How many items are you purchasing?"));
// var isOffer = confirm("Is the offer your using expired?");
// var ableToSave = (amountPurch > 2 || isPrimMem === true) && isOffer === false;
// var tellCustomer = function saver() {
//     if(ableToSave === true) {
//         return "Product offer applied!"
//     } else {
//         return "Product offer not valid."
//     }
// };
// alert(tellCustomer());

