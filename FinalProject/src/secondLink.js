import "./css/secondLink.css";

let messageFirst =
  "Cегодня ваша фантазия заработает на пятерку с плюсом! Особенно если обстоятельства ее подстегнут, требуя быстрых и нестандартных решений. В случае же, если мысли будут течь сами по себе, они рискуют улететь в заоблачные дали и вылиться в обычные мечты. Так что для самого же себя лучше, если жизнь сегодня поставит перед вами пару-тройку неразрешимых задач. Ломая голову над ними,вы имеете шанс превзойти самого себя!";
let messageSecond =
  "Cегодня вам будет трудно стряхнуть с себя дремоту! Но, даже выбравшись из цепких объятий сна, вы вряд ли в срочном порядке возьмется за дела. День склоняет вас к тому, чтобы заняться одним главным делом: ничегонеделаньем. Впрочем, звезды обещают, что такая приятная тактика сегодня вам не повредит. Посмотрите фильм, поиграйте в пасьянс, назначьте приятную встречу. Потратьте этот день с удовольствием и с толком, то есть исключительно на себя!";
let messageThird =
  "Cегодня ваша активность будет не всегда уместна – ее результат может оказаться прямо противоположным тому, который вы хотите получить. Тем не менее, вы способены действовать энергично даже там, где лучше было бы отступить. Попытка влезть в чужие дела, «переломить» ситуацию через колено и другие подобные неделикатные методы решения проблем сегодня могут нанести вам вред. Чтобы этого не произошло, звезды  советуют вам снизить свою кипучую деятельность до минимума.";
var arr = [messageFirst, messageSecond, messageThird];

document.getElementById("buttonName").onclick = function () {
document.getElementById("formPredictionID").style.display = "inline";
  let Form = document.getElementById('Name')
  var rand = Math.floor(Math.random() * arr.length);
  document.getElementById("formPredictionID").innerHTML =
    Form.value + ", " + arr[rand];

};