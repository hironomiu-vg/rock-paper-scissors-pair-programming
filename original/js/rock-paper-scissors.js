$(function(){
  "use strict";
  var HAND_TYPE_STR = [ "rock" , "scissors" , "paper" ];
  var RSP_RESULT_CODE = { DRAW : 0, WIN : 1, LOSE : 2, };
  var RSP_RESULT_MESSAGE = [ "draw.","You win!","You lose!" ];

  $(".rsp-btn").click(function(){
    var opponentHand = bobHand();
    var result = judge( $(this).attr("id"), bobHand);

    $("#myrspimg").attr("src", "img/" + $(this).attr("id") + ".png");
    $("#bobrspimg").attr("src", "img/" + opponentHand + ".png");
    $("#result").text(RSP_RESULT_MESSAGE[result]);
  });

  function bobHand() {
    return HAND_TYPE_STR[ Math.floor(Math.random() * 3) ];
  }

  function judge(myHand, opponentHand) {
    var result;
    if (myHand === opponentHand) {
      result = RSP_RESULT_CODE.DRAW;
    } else if ((myHand === HAND_TYPE_STR[0] && opponentHand === HAND_TYPE_STR[1]) ||
               (myHand === HAND_TYPE_STR[1] && opponentHand === HAND_TYPE_STR[2]) || 
               (myHand === HAND_TYPE_STR[2] && opponentHand === HAND_TYPE_STR[0])) {
      result = RSP_RESULT_CODE.WIN;
    }else {
      result = RSP_RESULT_CODE.LOSE;
    }
    return result;
  }
});
