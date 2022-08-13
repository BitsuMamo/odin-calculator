const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const decimal = document.getElementById("decimal");
const back = document.getElementById("back");
const clear = document.getElementById("clear");

const div = document.getElementById("div");
const mul = document.getElementById("mul");
const sub = document.getElementById("sub");
const sum = document.getElementById("sum");
const equal = document.getElementById("equal");


const display = document.getElementById("display");

let displayValue = "";
let prevCalc = null;
let operator = null;


function refreshDisplay() {
    display.textContent = displayValue;
}

refreshDisplay();

function checkDecimalLength() {
    if (checkDecimal()) {
        let substr = displayValue.substring(displayValue.indexOf("."));
        if (substr.length == 2) {
            return false;
        }
    }

    return true;
}

function checkDecimal() {
    return displayValue.includes(".");
}

function checkInput(input) {
    if ((input.charCodeAt(0) >= 48 && input.charCodeAt(0) <= 57) || input == ".") {
        return true;
    }
    return false;
}

function addValue(value) {
    if (checkDecimalLength() && checkInput(value)) {
        displayValue += value;
        refreshDisplay();
    }
}

zero.addEventListener('click', () => {
    addValue("0");
})
one.addEventListener('click', () => {
    addValue("1");

})
two.addEventListener('click', () => {
    addValue("2");

})
three.addEventListener('click', () => {
    addValue("3");

})
four.addEventListener('click', () => {
    addValue("4");

})
five.addEventListener('click', () => {
    addValue("5");

})
six.addEventListener('click', () => {
    addValue("6");

})
seven.addEventListener('click', () => {
    addValue("7");
})
eight.addEventListener('click', () => {
    addValue("8");

})
nine.addEventListener('click', () => {
    addValue("9");

})

decimal.addEventListener('click', () => {
    if (!checkDecimal()) {
        addValue(".");
    }
})

clear.addEventListener('click', () => {
    displayValue = "";
    prevCalc = null;
    operator = null;
    refreshDisplay();
})

back.addEventListener('click', () => {
    let substr = displayValue.substring(0, displayValue.length - 1);
    displayValue = substr;
    refreshDisplay();
})

function evaluate(sign) {
    if (prevCalc == null || operator == null) {
        prevCalc = displayValue;
        operator = sign;
        return;
    }

    let pCalc = parseFloat(prevCalc);
    let dValue = parseFloat(displayValue);

    switch (operator) {
        case "/":
            pCalc /= dValue;
            dValue = pCalc;
            break;
        case "*":
            pCalc *= dValue;
            dValue = pCalc;
            break;
        case "+":
            pCalc += dValue;
            dValue = pCalc;
            break;
        case "-":
            pCalc -= dValue;
            dValue = pCalc;
            break;
    }
    prevCalc = pCalc.toString();
    displayValue = dValue.toString();

    operator = sign;
}

div.addEventListener('click', () => {
    evaluate("/");
    displayValue = "";
    refreshDisplay();
})
mul.addEventListener('click', () => {
    evaluate("*");
    displayValue = "";
    refreshDisplay();
})
sub.addEventListener('click', () => {
    evaluate("-");
    displayValue = "";
    refreshDisplay();
})
sum.addEventListener('click', () => {
    evaluate("+");
    displayValue = "";
    refreshDisplay();
})

equal.addEventListener('click', () => {
    displayValue = prevCalc;
    refreshDisplay();
})
