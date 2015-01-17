$(function(){
  "use strict";
  var HAND_TYPE = [ "rock" , "scissors" , "paper" ];
  var RESULT_CODE = { DRAW : 0, WIN : 1, LOSE : 2, };
  var RESULT_MESSAGE = [ "draw.","You win!","You lose!" ];
  var flag=false;
  var record = { WIN : 0, LOSE : 0, DRAW : 0, };

  var YOUR_HAND = [ "rock", "rock", "scissors", "scissors", "paper", "paper" ];
  var OPPONENT_HAND = [ "rock", "rock", "scissors", "scissors", "paper", "paper" ];

  displayyourhand();

  $(".your-hand").click(function(){
    var yourHand = geneHand(parseInt($(".hand").attr("id")));
    var opponentHand = bobHand();
    var result = judge( yourHand, opponentHand);
    displayyourhand();

  //  $("#bobrspimg").attr("src", "img/" + opponentHand + ".png");
    $("#result").text(RESULT_MESSAGE[result]);
    $("#win").text(record.WIN);
    $("#lose").text(record.LOSE);
    $("#draw").text(record.DRAW);
  });

  $("#show").click(function(){
     if(flag){
       $("#specification").css("display","block");
       flag=false;
     }else{
        $("#specification").css("display","none");
        flag=true;
      }
  });

  $("#start").click(function(){
    $("#start").css("display","none");
    $("#rock").css("display","inline");
    $("#scissors").css("display","inline");
    $("#paper").css("display","inline");
  });

  function displayyourhand(){
    $('.your-hand').empty();
    $('.bob-hand').empty();

    for(var i = 0; i < YOUR_HAND.length; i++) {
      $('.your-hand').append("<img id='" + i + "' class='hand' src='img/" + YOUR_HAND[i] + ".png' />");
    }

    for(var i = 0; i < OPPONENT_HAND.length; i++) {
      $('.bob-hand').append("<img src='img/rock.png' />");
    }
  }

  function bobHand() {
    var random_choise = Math.floor(Math.random() * OPPONENT_HAND.length);
    var handType = OPPONENT_HAND[random_choise];
    OPPONENT_HAND.splice(random_choise, 1);

    return handType;
  }

  function geneHand(choice){
    var handType = YOUR_HAND[choice];
    YOUR_HAND.splice(choice, 1);

    return handType;
  }

  function judge(myHand, opponentHand) {
    var result;

    if (myHand === opponentHand) {
      result = RESULT_CODE.DRAW;
      record.DRAW++;
    } else if ((myHand === HAND_TYPE[0] && opponentHand === HAND_TYPE[1]) ||
               (myHand === HAND_TYPE[1] && opponentHand === HAND_TYPE[2]) ||
               (myHand === HAND_TYPE[2] && opponentHand === HAND_TYPE[0])) {
      result = RESULT_CODE.WIN;
      record.WIN++;
    }else {
      result = RESULT_CODE.LOSE;
      record.LOSE++;
    }

    $("#history").append("<p>自分：" + myHand + "　相手：" + opponentHand + "　勝敗：" + RESULT_MESSAGE[result] + "</p>");

    return result;
  }
});
