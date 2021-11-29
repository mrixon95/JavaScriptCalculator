const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currOperandTextElement = document.querySelector('[data-current-operand]');

var currentValue = 0
var currentOperator = null;

equalsButton.addEventListener('click', event => {
    currOperandTextElement.innerHTML = currentValue;
    currentValue = 0;

});

numberButtons.forEach(item => {
    item.addEventListener('click', event => {
        var numAsStr = item.innerHTML;
        var num = parseInt(numAsStr);

        currOperandTextElement.innerHTML += item.innerHTML;
        if (currentOperator != null) {
            switch(currentOperator) {
                case '+':
                    currentValue += num;
                    break;
                case '-':
                    currentValue -= num;
                    break;
                case '*':
                    currentValue *= num;
                    break;
                case '/':
                    currentValue /= num;
                    break;
            }
            currentOperator = null;
        }
    }
    )
});

operationButtons.forEach(item => {
    item.addEventListener('click', event => {
        
        if (item.innerHTML == ".") {
            currOperandTextElement.innerHTML += ".";
        } else {
            currOperandTextElement.innerHTML += " " + item.innerHTML + " ";
            currentOperator = currOperandTextElement.innerHTML;
        }
        
    }
    )
});


deleteButtons.addEventListener('click', event => {
    let currText = currOperandTextElement.innerHTML;
    currOperandTextElement.innerHTML = currText.substring(0,currText.length - 1);
});

deleteButtons.addEventListener('click', event => {
    let currText = currOperandTextElement.innerHTML;
    currOperandTextElement.innerHTML = currText.substring(0,currText.length - 1);
});


deleteButtons.addEventListener('click', event => {
    let currText = currOperandTextElement.innerHTML;
    currOperandTextElement.innerHTML = currText.substring(0,currText.length - 1);
});

allClearButton.addEventListener('click', event => {
    currOperandTextElement.innerHTML = "";
});