(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // var person = {
    //     firstName: "Ted",
    //     lastName: "Zamarron"
    // };
    // console.log(person.firstName);
    // console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // person.sayHello = function(){
    //     return("Hello from " + this.firstName +" " + this.lastName);
    // };
    // console.log(person.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    // shoppers.forEach(function(name){
    //     var determineTotal = name.amount > 200;
    //     var discount = name.amount* .12;
    //     var calcDiscount = name.amount - (name.amount * .12);
    //     var discountMessage = name.name + " you received a 12% discount! Your total of $" + name.amount.toFixed(2) + " is now $" + calcDiscount.toFixed(2) + '. You saved $' + discount.toFixed(2) + "!";
    //     var noDiscountMessage = name.name + " your total is $" + name.amount.toFixed(2);
    //
    //     if(determineTotal){
    //         console.log(discountMessage);
    //     } else {
    //         console.log(noDiscountMessage);
    //     }
    // });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // var books = [
    //     {title: "It", author:{
    //         firstName: "Stephen", lastName: "King"
    //         }},
    //     {title: "Dracula", author:{
    //         firstName: "Bram", lastName: "Stoker"
    //         }},
    //     {title: "Frankenstein", author:{
    //         firstName: "Mary", lastName: "Shelley"
    //         }},
    //     {title: "Interview With A Vampire", author:{
    //         firstName: "Anne", lastName: "Rice"
    //         }},
    //     {title: "City of Bones", author:{
    //         firstName: "Cassandra", lastName: "Clare"
    //         }}
    // ];
    // console.log(books[2].title);
    // console.log(books[3].author.firstName);
    // console.log(books[3].author.lastName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // books.forEach(function (name) {
    //     console.log("Book #" + books.indexOf(name));
    //     console.log("Title: " + name.title);
    //     console.log("Author: " + name.author.firstName + " " + name.author.lastName);
    //     console.log("---");
    // });

    // review answer
    // books.forEach(function (book, index) {
    //     console.log("Book #" + (index + 1) + "\n Title: " + book.title + "\nAuthor: " + book.author.firstName + " " + book.author.lastName);
    // });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

//     var myLibrary = [];
//     function createBooks(title, firstName, lastName) {
//         myLibrary.push(
//             {
//             title: title,
//             author:{
//                 firstName: firstName,
//                 lastName: lastName
//             },
//             bookInfo:function(){
//                     console.log("Book #" + myLibrary.indexOf(this));
//                     console.log("Title: " + this.title);
//                     console.log("Author: " + this.author.firstName + " " + this.author.lastName);
//                     console.log("---");
//             }
//         })
//     }
//
//     console.log(createBooks("It", "Stephen", "King"));
//
//     console.log(myLibrary);
//     console.log(myLibrary[0].title);
//     console.log(myLibrary[0].bookInfo());
})();
