var prev = "";
var cur = "";
var prevValue = 0;
var newValue = 0;
var prevVal = 0;
var prevOperation = "+";
var input = "";


function calculate(cur) {
    if (!isOperator(prev) && !isOperator(cur)) {
        var fullNum = parseInt(prevVal) * 10 + parseInt(cur);
        calculator.display.value = fullNum;
        newValue = fullNum;
        prev = cur;
        prevVal = fullNum;
    }
    if (isOperator(prev) && !isOperator(cur)) {
        prevOperation = prev;
        calculator.display.value = cur;
        prev = cur;
        prevVal = cur;
        newValue = cur;
    } else if (isOperator(cur)) {
        doPrevOperation(cur);
    }
}

function doPrevOperation(cur) {
    if (prev == "" && cur == "-" || (prev == "+" || prev == "-" || prev == "x") || prev == "÷") {
        alert("Wrong input! Enter a number to calculate or check negative input.");
        calculator.display.value = prevValue;
    } else {
        prev = cur;
        switch (prevOperation) {
            case "+":
                prevValue = parseInt(prevValue) + parseInt(newValue);
                prevOperation = "+"
                calculator.display.value = prevValue;
                break;
            case "-":
                prevValue = parseInt(prevValue) - parseInt(newValue);
                prevOperation = "-"
                calculator.display.value = prevValue;
                break;
            case "x":
                prevValue = parseInt(prevValue) * parseInt(newValue);
                prevOperation = "x"
                calculator.display.value = prevValue;
                break;
            case "÷":
                if (isDivideZero(newValue))
                    break;
                prevValue = Math.round(parseInt(prevValue) / parseInt(newValue));
                prevOperation = "÷"
                calculator.display.value = prevValue;
                break;
            default:
                prevOperation = cur;
                prevValue = newValue;
        }
    }
}

function getResult(input) {
    switch (prevOperation) {
        case "+":
            calculator.display.value = parseInt(prevValue) + parseInt(newValue);
            break;
        case "-":
            calculator.display.value = parseInt(prevValue) - parseInt(newValue);
            break;
        case "x":
            calculator.display.value = parseInt(prevValue) * parseInt(newValue);
            break;
        case "÷":
            if (isDivideZero(newValue))
                break;
            calculator.display.value = Math.round(parseInt(prevValue) / parseInt(newValue));
            break;
        default:
            calculator.display.value = newValue;
    }
    prevOperation = "=";
    prev = "="
    newValue = calculator.display.value
}


function isOperator(input) {
    if (input == "+" || input == "-" || input == "÷" || input == "x" || input == "=") { return true; }
    return false;
}

function isDivideZero(newValue) {
    if (parseInt(newValue) == 0) {
        alert("Cannot divide by 0");
        prevValue = 0
        calculator.display.value = 0;
        return true;
    }
    return false;
}