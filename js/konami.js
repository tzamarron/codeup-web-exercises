"use strict";

let userInput = [];
let konamiCode = "38,38,40,40,37,39,37,39,66,65,13";
let sound = 0;
let konami = ["38","38","40","40","37","39","37","39","66","65","13"];

$(document).keyup(function (input) {
    userInput.push(input.keyCode);
    // console.log(userInput);

    if (userInput.toString().indexOf(konamiCode) >= 0){
        $("#show2").fadeOut("fast").removeClass().addClass("screen");
        $("#iframe").fadeOut("fast").removeClass().addClass("screen");
        $("#show1").fadeIn("fast");
        $("div").unbind();
        $("#pp7").fadeIn("fast").click(function () {
            $(".cheatEnable").get(0).play();
            $(this).fadeOut("fast");
            $("#show1").fadeOut('fast').removeClass().addClass("screen");
        });
        sound = 0;
        userInput = [];
    }
});

$(".screen").click(function () {
    if (sound === 0){
        $(".coinSound").get(0).play();
        // console.log("coin drop");
        sound++;
        $("#show1").fadeOut("slow");
        $("#show2").fadeIn("fast");
        $("#contraP1").hover(function () {
            $("#show2").addClass("Contra");
            $(".contraSound").get(0).play();
        },function(){
            $("#show2").removeClass();
            $(".contraSound").get(0).pause();
        });
        $("#kirby").hover(function () {
            $("#show2").addClass("KAdventure");
            $(".kirbySound").get(0).play();
        },function(){
            $("#show2").removeClass();
            $(".kirbySound").get(0).pause();
        });
        $("#kirbyOG").hover(function () {
            $("#show2").addClass("KDreamland");
            $(".kirbyOGSound").get(0).play();
        },function(){
            $("#show2").removeClass();
            $(".kirbyOGSound").get(0).pause();
        });
        $("#mario").hover(function () {
            $("#show2").addClass("mario");
            $(".marioSound").get(0).play();
        },function(){
            $("#show2").removeClass();
            $(".marioSound").get(0).pause();
        });
        $("#bulba").hover(function () {
            $("#show2").addClass("pokemon");
            $(".pokemonSound").get(0).play();
        },function(){
            $("#show2").removeClass();
            $(".pokemonSound").get(0).pause();
        });
        $("#ogLink").hover(function () {
            $("#show2").addClass("ZeldaOG");
            $(".linkSound").get(0).play();
        },function(){
            $("#show2").removeClass();
            $(".linkSound").get(0).pause();
        });
        $("#ootLink").hover(function () {
            $("#show2").addClass("OOT");
            $(".ootSound").get(0).play();
        },function(){
            $("#show2").removeClass();
            $(".ootSound").get(0).pause();
        });
        $("#tetrisBlock").hover(function () {
            $("#show2").addClass("tetris");
            $(".tetrisSound").get(0).play();
        },function(){
            $("#show2").removeClass();
            $(".tetrisSound").get(0).pause();
        });

    }
});
