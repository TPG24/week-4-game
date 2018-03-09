
$(document).ready(function () {


//variable crystals
var wins = 0;

var losses = 0;

var counter;

var targetNumber;



var crystalSelection= [];

function init() {
    targetNumber = Math.floor((Math.random() * 101) +19);
    counter = 0;
    $("#number-place-holder").text(targetNumber);
    $("#your-score").text(counter);
    while (crystalSelection.length < 4){
        var num = (Math.floor(Math.random() * 11) +1);
        if (crystalSelection.indexOf(num) == -1) {
            crystalSelection.push(num);
        }
    }
    var choice = 0;
    for (var i = 1; i <= 4; i++) {
        console.log("for loop");
        console.log(crystalSelection[choice]);
        $("#crystal-" + i).attr("value", crystalSelection[choice]);
        choice++;
    }

console.log(counter);
}
   init();
    // $(".crystal").on("click", function() {
    //     counter += $(this).val();
    //     $("#your-score").text(counter);
    //     console.log(counter);
    // });
    $(".crystal").on("click", function() {
        console.log(counter);
        console.log("crystal click");
        console.log($(this).val());
        counter += parseInt($(this).val());
        $("#your-score").text(counter);
        console.log(counter);
        if (counter === targetNumber) {
            wins++;
            $("#win-score").text(wins);
            alert ("You WIN!");
            init();

        }
        if (counter > targetNumber) {
            losses++;
            $("#loss-score").text(losses);
            alert ("You LOSE!");
            init();
        }
    });



console.log(crystalSelection);
console.log($("#crystal-1").val());
console.log($(this).val());








});
