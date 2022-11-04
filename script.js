// DOM QUERY
const buttonsContainer = document.querySelector('.buttonsContainer');
const buttons = document.querySelectorAll('.btn');
const screenArea = document.querySelector('.screenArea');
const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const operator = document.querySelector('.operator');

console.dir(num1);

// Functions
function addition(a, b) {
   return a + b;
}

function subs(a, b) {
   return a - b;
}

function multiply(a, b) {
   return a * b;
}

function division(a, b) {
   return a / b;
}

function operate(op, a, b) {
   if (op == '+') {
      return addition(a, b);
   }
   if (op == '-') {
      return subs(a, b);
   }
   if (op == '*') {
      return multiply(a, b);
   }
   if (op == '/') {
      return division(a, b);
   }
}

function display(operator) {
   const screenOneValue = num1.textContent;
   num2.textContent += `${screenOneValue} ${operator}`;
   num1.textContent = '';
}

//console.log(operate('+', 5, 4));

buttonsContainer.addEventListener('click', (e) => {
   if (e.target.id === 'equal') {
      let valueOne = +num1.textContent;
      let valueTwoStr = num2.textContent.trim().replace(/\s/g, '');
      let valueTwoNum = +valueTwoStr.substring(0, valueTwoStr.length - 1);

      num2.textContent = `${valueTwoNum} + ${valueOne} =`;
      num1.textContent = `${valueOne + valueTwoNum}`;
      console.log(valueOne);
      console.log(valueTwoNum);
   }
   if (e.target.id === 'clear') {
      //console.dir(screenArea);
      //screenArea.textContent = '';
   }
   if (e.target.id === 'zero') {
      //console.dir(screenArea);
      //screenArea.textContent += '0';
      num1.textContent += '0';
   }
   if (e.target.id === 'one') {
      //console.dir(screenArea);
      num1.textContent += '1';
   }
   if (e.target.id === 'two') {
      //console.dir(screenArea);
      //screenArea.textContent += '2';
   }
   if (e.target.id === 'three') {
      //console.dir(screenArea);
      //screenArea.textContent += '3';
   }
   if (e.target.id === 'four') {
      //console.dir(screenArea);
      //screenArea.textContent += '4';
   }
   if (e.target.id === 'five') {
      //console.dir(screenArea);
      //screenArea.textContent += '5';
   }
   if (e.target.id === 'six') {
      //console.dir(screenArea);
      //screenArea.textContent += '6';
   }
   if (e.target.id === 'seven') {
      //console.dir(screenArea);
      //screenArea.textContent += '7';
   }
   if (e.target.id === 'eight') {
      //console.dir(screenArea);
      //screenArea.textContent += '8';
   }
   if (e.target.id === 'nine') {
      //console.dir(screenArea);
      //screenArea.textContent += '9';
   }
   if (e.target.id === 'addition') {
      display('+');
      /*  console.log(screenOneValue);
      console.log(num2.textContent); */
   }
   if (e.target.id === 'substraction') {
      //console.dir(screenArea);
      //screenArea.textContent += '-';
   }
   if (e.target.id === 'multiply') {
      //console.dir(screenArea);
      //screenArea.textContent += '*';
   }
   if (e.target.id === 'division') {
      //console.dir(screenArea);
      //screenArea.textContent += '/';
   }
});
