$(function(){
  "use strict";
  var HAND_TYPE = [ "rock" , "scissors" , "paper" ];
  var RESULT_CODE = { DRAW : 0, WIN : 1, LOSE : 2, };
  var RESULT_MESSAGE = [ "draw.","You win!","You lose!" ];
  var flag=false;
  var record = { WIN : 0, LOSE : 0, DRAW : 0, };

  $(".rsp-btn").click(function(){
    var opponentHand = bobHand();
    var result = judge( $(this).attr("id"), opponentHand);

    $("#myrspimg").attr("src", "img/" + $(this).attr("id") + ".png");
    $("#bobrspimg").attr("src", "img/" + opponentHand + ".png");
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


  function bobHand() {
    return HAND_TYPE[ Math.floor(Math.random() * 3) ];
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
