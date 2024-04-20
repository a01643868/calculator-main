let fullOperation = "";
let result = "";
let arrHistory = [];

function pressButton(number) {
  if (number === "CE") {
    fullOperation = "";
    showNumber();
    return;
  }
  console.log("hello world" + number);
  fullOperation = fullOperation + number;
  showNumber();
}

function pressOperation(op) {
  console.log(op);
  let [operando1, operador, operando2] = fullOperation
    .toString()
    .split(/(\+|-|\x|\/|\^)/);
  if (operador) return;
  fullOperation = fullOperation + op;
  showNumber();
}

function calculateResult() {
  const values = fullOperation.split(/(\+|-|\x|\/|\^)/);

  console.log(values);
  let [number1, operador, number2] = fullOperation.split(/(\+|-|\x|\/|\^)/);

  console.log(number1);
  console.log(number2);
  console.log(operador);

  number1 = parseFloat(number1);
  number2 = parseFloat(number2);

  switch (operador) {
    case "x":
      fullOperation = multiplication(number1, number2);
      break;
    case "+":
      fullOperation = sum(number1, number2);
      break;
    case "-":
      fullOperation = subtraction(number1, number2);
      break;
    case "/":
      fullOperation = division(number1, number2);
      break;
    case "^":
      fullOperation = power(number1, number2);
      break;
    default:
      break;
  }

  console.log("l");
  showHistory(fullOperation);
  showNumber();
}

function sum(number1, number2) {
  return number1 + number2;
}

function subtraction(number1, number2) {
  return number1 - number2;
}

function multiplication(number1, number2) {
  return number1 * number2;
}

function division(number1, number2) {
  return number1 / number2;
}

function power(number1, number2) {
  return Math.pow(number1, number2);
}
function showNumber() {
  document.getElementById("operand1Display").innerHTML = fullOperation;
}

function showHistory(result) {
  const hist = document.getElementById("historial");
  hist.innerHTML = "";
  arrHistory.push(result);
  for (var i = 0; i < arrHistory.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `${arrHistory[i]}`;
    hist.appendChild(listItem);
  }
}

showNumber();
