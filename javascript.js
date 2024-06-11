const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");
const operators = document.querySelectorAll(".operators button");
let number;
let firstnum = 0;
let operator;
let boolean = false;
let checkforoperation = false;


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (boolean == true) display.textContent = "";
        boolean = false;
        if (Number.isInteger(parseInt(button.textContent))) {
            display.textContent = display.textContent + button.textContent;
            display.style.cssText = "font-size: 5vw; overflow: hidden;";
            number = display.textContent;
        } else if (button.textContent == "=") {
            display.textContent = operate(parseInt(firstnum), parseInt(number), operator);
            firstnum = 0;
            number = display.textContent;
            boolean = true;
            checkforoperation = false;
        } else if (button.textContent == "AC") {
            display.textContent = "";
            firstnum = 0;
            number = 0;
            operator = "";
            boolean = false;
        }
    })
})

operators.forEach((e) => {
    e.addEventListener('click', () => {
        if (checkforoperation == true) {
            display.textContent = operate(parseInt(firstnum), parseInt(number), operator);
            firstnum = 0;
            number = display.textContent;
            boolean = true;
        }
        else {
            display.textContent = "";
        }
        firstnum = number;
        operator = e.textContent;
        checkforoperation = true;
    })
})



function operate(num1, num2, operator) {
    switch(operator) {
        case "+":
            return add(num1,num2);
          break;

        case "-":
            return subtract(num1,num2);
          break;

        case "*":
            return multiply(num1,num2);
        break;

        case "/":
            return divide(num1,num2);
        break;
        
        default: alert("Invalid operator")
      }
}



function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2;
}
