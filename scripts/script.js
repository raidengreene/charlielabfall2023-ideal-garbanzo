// A $( document ).ready() block.
$( document ).ready(function() {
   // put code in this place
  var bcounter = 0;
  document.getElementById("bcount").innerHTML = bcounter;
  $("#upbonk").click(
  function(
  ){
    // code here
    $("#upbonk").toggle();
    $("#downbonk").toggle();
    bcounter += 1
    document.getElementById("bcount").innerHTML = bcounter;
    var audio = new Audio("https://raidengreene.github.io/charlielabfall2023-ideal-garbanzo/assests/bonk-sound-effect.mp3");
    audio.play();
  })
  $("#downbonk").click(
  function(
  ){
  // code here
    $("#upbonk").toggle();
    $("#downbonk").toggle();
  })
});
