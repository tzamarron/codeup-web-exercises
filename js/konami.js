"use strict";

// let inputs = [];
// if(inputs.toString().indexOf("27") >= 0){inputs = []}
//
// let konamiCode = "38,38,40,40,37,39,37,39,66,65,13";
//
// $(document).keyup(function(input){
//     inputs.push(input.keyCode);
//     // console.log(inputs.toString());
//
//     if(inputs.toString().indexOf(konamiCode) >= 0 ) {
//         alert("You have 30 lives!");
//         // console.log(inputs);
//         $("#BSOD").fadeOut("slow",function () {
//             $(this).removeClass("slot")
//         });
//         inputs = [];
//     }
// });
let userInput = [];

let konamiCode = "38,38,40,40,37,39,37,39,66,65";

$(document).keyup(function (input) {
    userInput.push(input.keyCode);

    if (userInput.indexOf("13") !== -1){
        if (userInput.toString().indexOf(konamiCode) >= 0){

        }
    }
});

let sound = 0;
$("#screen").click(function () {
    if (sound === 0){
        $(".coin").get(0).play();
        console.log("yes");
        sound++
    }
});
