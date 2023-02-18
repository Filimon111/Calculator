/*for (var i=0; i<document.querySelectorAll(".key").length; i++){
document.querySelectorAll(".key")[i].addEventListener("click", function(){

  var buttonInnerHTML = this.innerHTML;

  keys(buttonInnerHTML);


  });

}
function keys(key){
  case '1':
    var one = 1;
    document.getElementbyID("answer-button").innerHTML = "hey";

}*/

var y = document.querySelector(".answer-button");
var num1 = '', num2 = '';
var operand = '';
function operation(event){

  if(event === 'AC'){
    y.textContent = '0';
    num1 = '';
    num2 = '';
    operand = '';
  }
  else if(event == '+'){
    operand = event;
    y.textContent = y.textContent + event;
  }

  else if(event == '-'){
    operand = event;
    y.textContent = y.textContent + event;
  }

  else if(event == '/'){
    operand = event;
    y.textContent = y.textContent + event;
  }

  else if(event == '*'){
    operand = event;
    y.textContent = y.textContent + event;
  }

  else if(event == '='){
    if(operand === '+'){
      y.textContent = parseFloat(num1) + parseFloat(num2);
    }

  else if(operand === '-'){
    y.textContent = parseFloat(num1) - parseFloat(num2);
  }

  else if(operand === '*'){
    y.textContent = parseFloat(num1) * parseFloat(num2);
  }

  else if(operand === '/'){
      y.textContent = parseFloat(num1) / parseFloat(num2);
    }
    num1 = y.textContent;
    num2 = '';
    operand = '';
  }
}

function number(num){
  if(operand == '' || num1 == ''){
    y.textContent =num1 + num;
    num1 += num;
  }

  else if(num === 'AC'){
    num1 = '';
    num2 = '';
    operand = '';
    y.textContent = '0';
  }
  else{
    num2 += num;
    y.textContent = y.textContent + num;
  }
}
