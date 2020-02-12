(function () {
    "use strict";

    //bonus 1
    var fruits = ["apple", "banana", "orange", "apple", "pineapple"];

    function allIndexesOf(array,value){
        var timesInArray = [];
        for(var i = 0; i < array.length; i++){
            if(array[i] === value){timesInArray.push(i)}
        }
        return timesInArray;
    }
    console.log(allIndexesOf(fruits, 'apple'));//[0,3]
    console.log(allIndexesOf(fruits, 'guava'));//[]
    console.log(allIndexesOf(fruits, 'pineapple'));//[4]


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
    function getLongestString(array) {
        return array[0];
    }


})();
