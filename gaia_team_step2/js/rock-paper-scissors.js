$(function(){
  "use strict";
  var HAND_TYPE = [ "rock" , "scissors" , "paper" ];
  var RESULT_CODE = { DRAW : 0, WIN : 1, LOSE : 2, };
  var RESULT_MESSAGE = [ "draw.","You win!","You lose!" ];
  var resultSummary = {win: 0, lose: 0, draw: 0},
      $resultSummary = $('#result_summary'),
      $resultHistory = $('#result_history');


  $(".rsp-btn").click(function(){
    var opponentHand = bobHand(),
        myHand = $(this).attr("id");

    var result = judge(myHand, opponentHand);
    var resultString;
    if (result === RESULT_CODE.DRAW) {
        resultSummary.draw++;
        resultString = 'draw';
    } else if (result=== RESULT_CODE.WIN) {
        resultSummary.win++;
        resultString = 'win';
    } else if (result === RESULT_CODE.LOSE) {
        resultSummary.lose++;
        resultString = 'lose';
    }

    $("#myrspimg").attr("src", "img/" + $(this).attr("id") + ".png");
    $("#bobrspimg").attr("src", "img/" + opponentHand + ".png");
    $("#result").text(RESULT_MESSAGE[result]);

    $resultSummary.text(resultSummary.win + '勝' + resultSummary.lose + '敗' + resultSummary.draw + '分');
    var resultRecord = "<p>" + "[自分]" + myHand + " ,[相手]" + opponentHand + " ,[結果]" + resultString;
    $resultHistory.prepend("<p>" + resultRecord + "</p>");
  });

  $('#rule_description_toggle').on('click', function() {
      $('#rule_description').toggle();
  });

  function bobHand() {
    return HAND_TYPE[ Math.floor(Math.random() * 3) ];
  }

  function judge(myHand, opponentHand) {
    var result;
    if (myHand === opponentHand) {
      result = RESULT_CODE.DRAW;
    } else if ((myHand === HAND_TYPE[0] && opponentHand === HAND_TYPE[1]) ||
               (myHand === HAND_TYPE[1] && opponentHand === HAND_TYPE[2]) || 
               (myHand === HAND_TYPE[2] && opponentHand === HAND_TYPE[0])) {
      result = RESULT_CODE.WIN;
    }else {
      result = RESULT_CODE.LOSE;
    }
    return result;
  }
});
