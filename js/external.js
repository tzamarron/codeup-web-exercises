"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

let userFavColor = prompt("What is your favorite color?");
alert("Great, " + userFavColor + ' is my favorite color too!');

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
let littleMermaidRental = prompt("How many days did you rent The Little Mermaid for?") *3;
let brotherBearRental = prompt("How many days did you rent Brother Bear for?") *3;
let herculesRental = prompt("How many days did you rent Hercules for?") *3;
let rentalTotal = littleMermaidRental + brotherBearRental + herculesRental;
alert("Your total amount for your rentals is " + rentalTotal + ".");

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
let googleHours = prompt("How many hours did you work for Google this week?") * 400;
let amazonHours = prompt("How many hours did you work for Amazon this week?") * 380;
let facebookHours = prompt("How many hours did you work for Facebook this week?") * 350;
alert("Your total payment this week is " + (googleHours + amazonHours + facebookHours) + ".");

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.


// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

