const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currOperandTextElement = document.querySelector('[data-current-operand]');
const dotpointButton = document.querySelector('[data-dotpoint]');


var total = 0;
var currentValue = "";
var currentOperator = "+";
var equation = null;



function getDisplayNumber(number) 
{
    const floatNumber = parseFloat(number);
    if (isNaN(floatNumber)) {
        return '';
    } else {
        return floatNumber.toLocaleString('en');
    }
};



deleteButton.addEventListener('click', event => {
    total = 0;
    currentValue = currentValue.substring(0,currentValue.length - 1)
    currOperandTextElement.innerHTML = getDisplayNumber(currentValue);
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
    total = 0;
    currentValue = "";
    currentOperator = "+";
    console.log("total " + total);
    console.log("currentValue " + currentValue);
    console.log("currentOperator " + currentOperator);
});

equalsButton.addEventListener('click', event => {

    if (total === 0 || currentValue === "") {
        return;
    }


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

    total = getDisplayNumber(total);


    previousOperandTextElement.innerHTML = currOperandTextElement.innerHTML;
    currOperandTextElement.innerHTML = total;
    currentValue = "";

    console.log("total " + total);
    console.log("currentValue " + currentValue);
    console.log("currentOperator " + currentOperator);
    console.log("previousOperandTextElement.innerHTML " + previousOperandTextElement.innerHTML);
    console.log("currOperandTextElement.innerHTML " + currOperandTextElement.innerHTML);

});

numberButtons.forEach(item => {
    item.addEventListener('click', event => {
        var numAsStr = item.innerHTML;
        currentValue += numAsStr;
        currOperandTextElement.innerHTML += numAsStr;
        console.log("total " + total);
        console.log("currentValue " + currentValue);
        console.log("currentOperator " + currentOperator);

    console.log("previousOperandTextElement.innerHTML " + previousOperandTextElement.innerHTML);
    console.log("currOperandTextElement.innerHTML " + currOperandTextElement.innerHTML);

    }
    )
});

operationButtons.forEach(item => {
    item.addEventListener('click', event => {
        
        
        if (item.innerHTML == ".") {
            currOperandTextElement.innerHTML += ".";
        } else {
            if (total == 0) {
                if (currentOperator === "+") {
                    total = currentValue;
                } else {
                    total = -currentValue;
                }
                
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

