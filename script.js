const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let operands = ["", ""];
let operator = "";

const display = document.querySelector(".display");

function clear() {
    operands = ["", ""];
    operator = "";
    updateDisplay();
}
function changeOperands(value) {
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
    if (operands.at(0) != "") {
        operator = newOperator;
    }
    updateDisplay();
}
function operate() { 

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
    display.textContent = res;
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
