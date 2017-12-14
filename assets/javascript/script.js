$(document).ready(function() {
  //global variables
  var goalNum = Math.floor(Math.random() * 101) + 19;
  var currentNum = 0;
  var gems = {
    gem1: Math.floor(Math.random() * 12) + 1,
    gem2: Math.floor(Math.random() * 12) + 1,
    gem3: Math.floor(Math.random() * 12) + 1,
    gem4: Math.floor(Math.random() * 12) + 1
  };
  var end = false;
  var wins = 0;
  var losses = 0;

  $("#goalNum").text("Your goal is " + goalNum);

  function restart(){
    goalNum = Math.floor(Math.random() * 101) + 19;
    gems = {
    gem1: Math.floor(Math.random() * 12) + 1,
    gem2: Math.floor(Math.random() * 12) + 1,
    gem3: Math.floor(Math.random() * 12) + 1,
    gem4: Math.floor(Math.random() * 12) + 1
  };
  currentNum = 0;
  $("#currentNum").text("Your current value is " + currentNum);  
  $("#goalNum").text("Your goal is" + goalNum);
  }

  function winCondition(x) {
    if (x > goalNum) {
      losses++;
      $("#winStatus").text("You Lose!");
      setTimeout(function(){
        restart();        
        $("#winStatus").text("Click the Gems!");
      }, 2000);
    } else if (x === goalNum) {
      wins++;
      $("#winStatus").text("You Win!");
      setTimeout(function(){
        restart();        
        $("#winStatus").text("Click the Gems!");
      }, 2000);
    }
    $("#winCounter").text("Wins: " + wins);
    $("#lossCounter").text("Losses: " + losses);
  }

  $("#gem1").on("click", function() {
    currentNum += gems.gem1;
    $("#currentNum").text("Your current value is " + currentNum);
    console.log(currentNum);
    winCondition(currentNum);
  });

  $("#gem2").on("click", function() {
    currentNum += gems.gem2;
    $("#currentNum").text("Your current value is " + currentNum);
    console.log(currentNum);
    winCondition(currentNum);
  });

  $("#gem3").on("click", function() {
    currentNum += gems.gem3;
    $("#currentNum").text("Your current value is " + currentNum);
    console.log(currentNum);
    winCondition(currentNum);
  });

  $("#gem4").on("click", function() {
    currentNum += gems.gem4;
    $("#currentNum").text("Your current value is " + currentNum);
    console.log(currentNum);
    winCondition(currentNum);
  });
  console.log(gems);
});
