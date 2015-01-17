$(function(){
  "use strict";
  var HAND_TYPE = [ "rock" , "scissors" , "paper" ];
  var RESULT_CODE = { DRAW : 0, WIN : 1, LOSE : 2, };
  var RESULT_MESSAGE = [ "draw.","You win!","You lose!" ];
  var count = [0, 0, 0];

  $(".rsp-btn").click(function(){
    var opponentHand = bobHand();
    var result = judge( $(this).attr("id"), opponentHand);
    count[result]++;
    document.getElementById("win").textContent = count[RESULT_CODE.WIN] + "勝";
    document.getElementById("lose").textContent = count[RESULT_CODE.LOSE] + "負";
    document.getElementById("draw").textContent = count[RESULT_CODE.DRAW] + "引き分け";

    document.getElementById("log").appendChild(document.createTextNode(
        "自分の手：" + $(this).attr("id") + "  相手の手：" + opponentHand + "  勝敗：" + RESULT_MESSAGE[result]));
    document.getElementById("log").appendChild(document.createElement('br'));

    $("#myrspimg").attr("src", "img/" + $(this).attr("id") + ".png");
    $("#bobrspimg").attr("src", "img/" + opponentHand + ".png");
    $("#result").text(RESULT_MESSAGE[result]);
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

  var isShowing = true;
  document.getElementById('change_show').onclick = function () {
      if (isShowing) {
          document.getElementById('specification').style.display = "none";
          isShowing = false;
          document.getElementById('change_show').value= "表示"
      } else {
          document.getElementById('specification').style.display = "block";
          isShowing = true;
          document.getElementById('change_show').value = "非表示"
      }
  }
});
