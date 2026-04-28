const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let operands = ["", ""];
let operator = "";
let pastAnswer = false;

const display = document.querySelector(".display");

function clear() {
    operands = ["", ""];
    operator = "";
    pastAnswer = false;
    updateDisplay();
}
function changeOperands(value) {
    if (pastAnswer) {
        clear();
    }
    if (operands.at(0) === "") { //case 1: operator 1 is empty
        operands[0] += value;
    }
    else if (operator === "") { //case 2: working on operator 1
        operands[0] += value;
    }
    else {
        operands[1] += value;
    }
    updateDisplay();
}
function changeOperator(newOperator) {
    if (pastAnswer) {
        pastAnswer = false;
    }
    if (operands.at(0) != "") { 
        if (operands.at(1) === "") {
            operator = newOperator;
        }
        else {
            operate();
            operator = newOperator;
        }
        

    }
    updateDisplay();
}
function isOperationValid() {
    if (operands.at(0) === "" || operands.at(1) === "") {
        return false;
    } 
    if (operator === "/" && operands.at(1) === "0") {
        alert("i know what you are.");
        return false;
    }
    return true;
}
function operate() { 
    if (isOperationValid()) {
        let answer = 0;
        let a = Number(operands.at(0));
        let b = Number(operands.at(1));
        switch (operator) {
            case "+":
                answer = add(a, b);
                break;
            case "-":
                answer = subtract(a, b);
                break;
            case "/":
                answer = divide(a, b);
                break;
            case "x":
                answer = multiply(a, b);
                break;
        }
        answer = String(Number(answer.toFixed(5)));
        operands = [answer, ""];
        operator = "";
        pastAnswer = true;
        updateDisplay();
    }
    else {
        console.log("INVALID OPERATION");
    }
}
function updateDisplay() {
    let res = ""
    if(operands && operands.length > 1) {
        res += operands.at(0);
    }
    if(operator) {
        res += ` ${operator} `;
    }
    if(operands && operands.length === 2) {
        res += operands.at(1);
    }
    console.log(res);
    checkDecimal();
    display.textContent = res;
}
function addDecimal() {
    if (!checkDecimal()) {
        changeOperands(".");
    }
}
function checkDecimal() {
    if (operands.at(1) === "") { //case 1: working on first number
        if (operands.at(0).includes(".")) {
            decimal.disabled = true;
            return true
        }
    }
    else {
        if (operands.at(1).includes(".")) {
            decimal.disabled = true;
            return true;
        }
    }
    decimal.disabled = false;
    return false;
}


//-------------------

const equal = document.querySelector(".operate")
equal.addEventListener('click', operate);

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
  number.addEventListener('click', (event) => {
    changeOperands(number.textContent);
  });
});

const symbol = document.querySelectorAll(".operator");
symbol.forEach(button => {
    button.addEventListener('click', (event) => {
        changeOperator(button.textContent);
    });
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener('click', addDecimal);

const clearBtn = document.querySelector(".clear");
if (clearBtn) {
    clearBtn.addEventListener('click', clear);
}