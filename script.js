const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currOperandTextElement = document.querySelector('[data-current-operand]');
const dotpointButton = document.querySelector('[data-dotpoint]');


var total = null;
var currentValue = "";
var currentOperator = null;
var equation = null;

deleteButton.addEventListener('click', event => {
    let currText = currOperandTextElement.innerHTML;
    currOperandTextElement.innerHTML = currText.substring(0,currText.length - 1);
});

dotpointButton.addEventListener('click', event => {

    if (currentValue === '.' || currentValue.includes('.')) return;

    currentValue += '.'
    currOperandTextElement.innerHTML += '.';
    console.log("total " + total);
    console.log("currentValue " + currentValue);
    console.log("currentOperator " + currentOperator);
});


allClearButton.addEventListener('click', event => {
    previousOperandTextElement.innerHTML = "";
    currOperandTextElement.innerHTML = "";
    total = null;
    currentValue = "";
    currentOperator = null;
    console.log("total " + total);
    console.log("currentValue " + currentValue);
    console.log("currentOperator " + currentOperator);
});

equalsButton.addEventListener('click', event => {


    switch (currentOperator) {
        case "+":
            total = parseFloat(total) + parseFloat(currentValue);
            break;
        case "-":
            total = parseFloat(total) - parseFloat(currentValue);
            break;
        case "*":
            total = parseFloat(total) * parseFloat(currentValue);
            break;
        case "/":
            total = parseFloat(total) / parseFloat(currentValue);
            break;
        case "^":
            total = Math.pow(total, currentValue);
            break;    
        default:
            total = parseFloat(currentValue);
            break;


    }

    previousOperandTextElement.innerHTML = currOperandTextElement.innerHTML;
    currOperandTextElement.innerHTML = total;
    currentValue = "";

    console.log("total " + total);
    console.log("currentValue " + currentValue);
    console.log("currentOperator " + currentOperator);

});

numberButtons.forEach(item => {
    item.addEventListener('click', event => {
        var numAsStr = item.innerHTML;
        currentValue += numAsStr;
        currOperandTextElement.innerHTML += numAsStr;
        console.log("total " + total);
        console.log("currentValue " + currentValue);
        console.log("currentOperator " + currentOperator);

    }
    )
});

operationButtons.forEach(item => {
    item.addEventListener('click', event => {
        
        
        if (item.innerHTML == ".") {
            currOperandTextElement.innerHTML += ".";
        } else {
            if (total == null) {
                total = currentValue;
            }

            if (isNaN(currentValue)) {
                switch (currentOperator) {
                    case ("+"):
                        total = parseInt(total) + parseInt(currentValue);
                        break;
                    case ("-"):
                        total = parseInt(total) - parseInt(currentValue);
                        break;
                    case ("*"):
                        total = parseInt(total) * parseInt(currentValue);
                        break;
                    case ("/"):
                        total = parseInt(total) / parseInt(currentValue);
                        break;
                    case ("^"):
                        total = Math.power(parseInt(total),parseInt(currentValue));
                        break;
    
                }
            }

            currOperandTextElement.innerHTML += " " + item.innerHTML + " ";
            currentOperator = item.innerHTML;
            currentValue = "";
        }


        console.log("total " + total);
    console.log("currentValue " + currentValue);
    console.log("currentOperator " + currentOperator);
        
    }
    )
});

