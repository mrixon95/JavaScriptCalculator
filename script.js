const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButtons = document.querySelector('[data-equals]');
const deleteButtons = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currOperandTextElement = document.querySelector('[data-current-operand]');


numberButtons.forEach(item => {
    item.addEventListener('click', event => {
        currOperandTextElement.innerHTML += item.innerHTML;
    }
    )
});


deleteButtons.addEventListener('click', event => {
    let currText = currOperandTextElement.innerHTML;
    currOperandTextElement.innerHTML = currText.substring(0,currText.length - 1);
});

allClearButton.addEventListener('click', event => {
    currOperandTextElement.innerHTML = "";
});