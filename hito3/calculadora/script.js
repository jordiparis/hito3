const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');

let firstValue = null;
let operator = null;
let awaitingNextValue = false;

function calculate(first, operator, second) {
  first = parseFloat(first);
  second = parseFloat(second);

  if (operator === 'add') {
    return first + second;
  } else if (operator === 'subtract') {
    return first - second;
  } else if (operator === 'multiply') {
    return first * second;
  } else if (operator === 'divide') {
    return first / second;
  } else if (operator === 'percentage') {
    return (first / 100) * second;
  } else if (operator === 'power') {
    return Math.pow(first, second);
  } else if (operator === 'sqrt') {
    return Math.sqrt(second);
  }
}

keys.addEventListener('click', (event) => {
  const { target } = event;
  const action = target.dataset.action;
  const keyContent = target.textContent;
  const displayedNum = display.textContent;

  if (!action) {
    if (
      displayedNum === '0' ||
      awaitingNextValue
    ) {
      display.textContent = keyContent;
      awaitingNextValue = false;
    } else {
      display.textContent = displayedNum + keyContent;
    }
  }

  if (action === 'decimal') {
    if (!displayedNum.includes('.')) {
      display.textContent = displayedNum + '.';
    }
  }

  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide' ||
    action === 'percentage' ||
    action === 'power' ||
    action === 'sqrt'
  ) {
    if (firstValue && operator && !awaitingNextValue) {
      const result = calculate(firstValue, operator, displayedNum);
      display.textContent = result;
      firstValue = result;
    } else {
      firstValue = displayedNum;
    }
    operator = action;
    awaitingNextValue = true;
  }

  if (action === 'clear') {
    firstValue = null;
    operator = null;
    awaitingNextValue = false;
    display.textContent = '0';
  }

  if (action === 'calculate') {
    if (firstValue && operator && !awaitingNextValue) {
      display.textContent = calculate(firstValue, operator, displayedNum);
      firstValue = null;
      operator = null;
      awaitingNextValue = false;
    }
  }


});
