(function () {
    "use strict";

    //bonus 1
    // var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
    //
    // function allIndexesOf(array,value){
    //     var timesInArray = [];
    //     for(var i = 0; i < array.length; i++){
    //         if(array[i] === value) {
    //             timesInArray.push(i)
    //         }
    //     }
    //     return timesInArray;
    // }
    // console.log(allIndexesOf(fruits, 'apple'));//[0,3]
    // console.log(allIndexesOf(fruits, 'guava'));//[]
    // console.log(allIndexesOf(fruits, 'pineapple'));//[4]


    //Bonus 2
    // var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
    //
    // function removeAll(array, value){
    //     var newArray = [];
    //     for (var i = 0;i < array.length; i++) {
    //         if (array[i]!== value){newArray.push(array[i])}
    //     }
    //     return newArray;
    // }
    //
    // console.log(removeAll(bugs, "ant"));//["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]
    // console.log(removeAll(bugs, "mosquito"));//["ant", "scorpion", "ant",   "ant", "typo", "reference error", "type error"]
    // console.log(removeAll(bugs, "roach"));//["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"]


    // Bonus 3
    // function randomIntBetween(min, max) {
    //     return Math.floor(Math.random() * (max-min)) + min;
    // }
    // console.log(randomIntBetween(1, 10));


    // // Bonus4
    // function coinFlip(){
    //     // var toss =Math.random();
    //     // var flip = toss < 0.5 ? toss = Math.floor(toss) : toss = Math.ceil(toss);
    //     // return flip;
    //     var array = [0, 1];
    //     return Math.floor(Math.random() * array.length);
    //
    // }
    // console.log(coinFlip());


    // Bonus 5
    // function twoDice() {
    //     var sixSidedDice = [1, 2, 3, 4, 5, 6];
    //     var dice1 = Math.floor(Math.random() * sixSidedDice.length);
    //     console.log(dice1);
    //     var dice2 = Math.floor(Math.random() * sixSidedDice.length);
    //     console.log(dice2);
    //     return dice1 + dice2;
    // }
        // console.log(twoDice());


    // Bonus 6
    // function twentySideDie() {
    //         // return Math.floor(Math.random()*21);
    //         var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    //         return Math.floor(Math.random() * array.length);
    // }
    // console.log(twentySideDie());


    // Bonus 7
    // function twelveSidedDie() {
    //     // return Math.floor(Math.random()*13);
    //     var array = [1,2,3,4,5,6,7,8,9,10,11,12];
    //     return Math.floor(Math.random() * array.length);
    // }
    // console.log(twelveSidedDie());


    // Bonus 8
    // function tetrahedron() {
    //     // return Math.floor(Math.random()*5);
    //     var array = [1,2,3,4];
    //     return Math.floor(Math.random() * array.length);
    // }
    // console.log(tetrahedron());

    // Bonus 9
    // function rollDie() {
    //     // return Math.floor(Math.random()*7);
    //     var array = [1,2,3,4,5,6];
    //     return Math.floor(Math.random() * array.length);
    // }
    // console.log(rollDie());


    // Bonus 10
    // function listOfRolls(num) {
    //     var totalRolls = [];
    //     for (var i =1; i<=num;i++){
    //         totalRolls.push(Math.floor(Math.random() * 7))
    //     }
    //     return totalRolls;
    // }
    // console.log(listOfRolls(5));


    // Bonus 11
    // function listOfDieRollsFromDieFunc(numberOfRolls, diceFunction) {
    //     var total = [];
    //     for (var i = 1; i <= numberOfRolls; i++){
    //         total.push(diceFunction);
    //     }
    //     return total;
    // }
    // console.log(listOfDieRollsFromDieFunc(1, tetrahedron()));


    // Bonus 2-1
    // function first(array) {
    //     return array[0];
    // }


    // Bonus 2-2
    // function secondToLast(array) {
    //     return array[array.length - 2];
    // }


    // Bonus 2-3
    // function rest(array) {
    //     return array.pop;
    // }


    // Bonus 2-4
    // var tests = ["ad", "bbb", "c", "dddd", "ee"];
    // function getLongestString(array) {
    //     var short = array.sort(function (a, b) {
    //         return b.length - a.length
    //     });
    //     return short[0];
    // }
    // console.log(getLongestString(tests));


    // Bonus 2-5
    // var tests = ["ad", "bbb", "c", "dddd", "ee"];
    // function getShortestString(array) {
    //     var short = array.sort(function (a, b) {
    //         return a.length - b.length
    //     });
    //     return short[0];
    // }
    // console.log(getShortestString(tests));


    // Bonus 2-6
    // var test1s = [1,2,3];
    // var test2s = [4,5,6];
    // function addTwoArrays(array1, array2) {
    //     return array1.concat(array2);
    // }
    // console.log(addTwoArrays(test1s, test2s));


    // Bonus 2-7
    // var tests = [1,2,3,4,5,5,6,2,2,4,3];
    // var tests = ["a",'b','a','b','c','c'];
    // function getUniqueValues(array) {
    //     return [...new Set(array)]
    //     // return array.filter((a,b) => array.indexOf(a) === b);
    // }
    // console.log(getUniqueValues(tests));


    // Bonus 2-8
    // var test1s = [1,2,3];
    // var test2s = [4,5,6];
    // function addTwoArrays(array1, array2) {
    //     return array1.concat(array2);
    // }
    // console.log(addTwoArrays(test1s, test2s));


    // Bonus 2-9
    // function getRandomQuote() {
    //     var inspire = [
    //         "I am not afraid of an Army of lions lead by a sheep; I am afraid of sheep lead by a lion.  -  Alexander the Great", "We all make choices, but in the end our choices make us.  -  Andrew Ryan (BioShock)", "Don’t ever stop. Always keep going, no matter what happens and is taken from you. Even when life is so unfair, don’t give up.  -  Ezio(AC2)", "A journey of a thousand miles begins with a single step. So just take it step by step.  -  Waka (Okami)", "No matter how dark the night, the morning always comes.  -  Lulu (FFX)"];
    //     return inspire[Math.floor(Math.random() * inspire.length)];
    // }
    // console.log(getRandomQuote());


    // Bonus 2-10
    // function getIndexesOf(input1, string) {
    //     var result = [];
    //     for (var i =0;i < string.length; i++){
    //         if (string[i] === input1){
    //             result.push(i);
    //         }
    //     }
    //     return result;
    // }
    // console.log(getIndexesOf("a", "banana")); // [1, 3, 5]
    // console.log(getIndexesOf("z", "banana")); // []


    // Bonus 2-11
    // function removeAll(array, value){
    //     var newArray = [];
    //     for (var i = 0;i < array.length; i++) {
    //         if (array[i]!== value){newArray.push(array[i])}
    //     }
    //     return newArray;
    // }
    // console.log(removeAll([1, 2, 3], 2)); //[1,3]
    // console.log(removeAll([2,2,3,4,5,2,2], 2)); // [3,4,5]


    // Bonus 2-12
    // function firstTenFibonacciNumbers() {
    //     var fib = [0,1];
    //     for(var i = fib.length; i <= 9; i++){
    //         var calcNext = (fib[i - 2]) + (fib[i - 1]);
    //         fib.push(calcNext);
    //     }
    //     return fib;
    // }
    // console.log(firstTenFibonacciNumbers());


    // Bonus 2-13
    // function getNFibonacci(num) {
    //     var fib = [0,1];
    //     if (num === 1 || num === 0){
    //         fib.pop();
    //         return fib;
    //     } else if (num === 2){
    //         return fib;
    //     } else {
    //         for (var i = fib.length; i < num; i++) {
    //             fib[i] = fib[i-2] + fib[i-1];
    //         }
    //         return fib;
    //     }
    // }
    // console.log(getNFibonacci(0));
    // console.log(getNFibonacci(1));
    // console.log(getNFibonacci(2));
    // console.log(getNFibonacci(3));
    // console.log(getNFibonacci(10));


    // Bonus 2-14
    // var test = [1,2,3,4];
    // function moveFirstToLast(array) {
    //     var first = array.shift();
    //     array.push(first);
    //     return array;
    // }
    // console.log(moveFirstToLast(test)); // [2,3,4,1]


    // Bonus 2-15
    // var test1 = [1,2,3];
    // var test2 = [4,5,6];
    // var test3 = ['a','b','c'];
    // var test4 = ['x','y','z'];
    // function zip(array1, array2) {
    //
    // }
})();

