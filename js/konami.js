"use strict";

let userInput = [];
// let konamiCode = "38,38,40,40,37,39,37,39,66,65,13";
let sound = 0;
let konamiCode = ["38","38","40","40","37","39","37","39","66","65","13"];

$(document).keyup(function (input) {
    userInput.push(input.keyCode);
    console.log(userInput);

    // if (userInput.toString().indexOf(konamiCode) >= 0){
    //     $("#show2").fadeOut("fast").removeClass().addClass("screen");
    //     $("#show1").fadeIn("fast");
    //     $("div").unbind();
    //     sound = 0;
    //     userInput = [];
    // }
});

$(".screen").click(function () {
    if (sound === 0){
        $(".coinSound").get(0).play();
        // console.log("coin drop");
        sound++;
        $("#show1").fadeOut("slow");
        $("#show2").fadeIn("fast");
        $("#contraP1").hover(function () {
            $("#show2").addClass("Contra")
        },function(){
            $("#show2").removeClass()
        });
        $("#kirby").hover(function () {
            $("#show2").addClass("KAdventure")
        },function(){
            $("#show2").removeClass()
        });
        $("#kirbyOG").hover(function () {
            $("#show2").addClass("KDreamland")
        },function(){
            $("#show2").removeClass()
        });
        $("#mario").hover(function () {
            $("#show2").addClass("Contra")
        },function(){
            $("#show2").removeClass()
        });
        $("#bulba").hover(function () {
            $("#show2").addClass("Contra")
        },function(){
            $("#show2").removeClass()
        });
        $("#ogLink").hover(function () {
            $("#show2").addClass("ZeldaOG")
        },function(){
            $("#show2").removeClass()
        });
        $("#ootLink").hover(function () {
            $("#show2").addClass("OOT")
        },function(){
            $("#show2").removeClass()
        });
        $("#botwLink").hover(function () {
            $("#show2").addClass("BOTW")
        },function(){
            $("#show2").removeClass()
        });

    }
});
