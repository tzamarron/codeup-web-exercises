"use strict"

function isOdd(number){
    return number % 2 !== 0;
}
// console.log(isOdd(10));
// console.log(isOdd(11));

function isEven(number) {
    return number % 2 === 0
}
// console.log(isEven(10));
// console.log(isEven(11));

function identity(input) {
    return input;
}
// console.log(identity(100));

function isFive(input) {
    return input === 5
}

function addFive(input) {
    return input + 5;
}
// console.log(addFive(5));

function isMultipleOfFive(input) {
    return input % 5 === 0;
}
// console.log(isMultipleOfFive(5));
// console.log(isMultipleOfFive(11));

function isThree(input) {
    return input === 3;
}

function isMultipleOfThree(input) {
    return input % 3 === 0;
}
// console.log(isMultipleOfThree(9));
// console.log(isMultipleOfThree(10));

function isMultipleOfThreeAndFive(input) {
    return input % 3 === 0 || input % 5 === 0;
}
// console.log(isMultipleOfThreeAndFive(21));
// console.log(isMultipleOfThreeAndFive(40));
// console.log(isMultipleOfThreeAndFive(71));

function isMultipleOf(target, n) {
    return target % n === 0;
}
// console.log(isMultipleOf(100, 5));
// console.log(isMultipleOf(20, 3));

function isTrue(boolean) {
    return typeof boolean === "boolean";
}
// console.log(isTrue(true));
// console.log(isTrue(5));

function isFalse(boolean) {
    return boolean === false;
}
// console.log(isFalse(false));
// console.log(isFalse("true"));

function isTruthy(input) {
    return input === true;
}

function isFalsy(input) {
    return input === false;
}