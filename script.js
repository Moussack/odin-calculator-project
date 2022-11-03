// DOM QUERY
const buttonsContainer = document.querySelector('.buttonsContainer');
const buttons = document.querySelectorAll('.btn');
const screenArea = document.querySelector('.screen p');

//console.log(buttons);

buttonsContainer.addEventListener('click', (e) => {
   console.dir(e.target);
   if (e.target.id === 'equal') {
      console.log(`equal btn`);
   }
   if (e.target.id === 'clear') {
      console.log(`clear btn`);
      screenArea.textContent = '.';
   }
   if (e.target.id === 'zero') {
      console.log(`zero btn`);
      screenArea.textContent += '0';
   }
   if (e.target.id === 'one') {
      console.log(`one btn`);
      screenArea.textContent += '1';
   }
   if (e.target.id === 'two') {
      console.log(`two btn`);
      screenArea.textContent += '2';
   }
   if (e.target.id === 'three') {
      console.log(`three btn`);
      screenArea.textContent += '3';
   }
   if (e.target.id === 'four') {
      console.log(`four btn`);
      screenArea.textContent += '4';
   }
   if (e.target.id === 'five') {
      console.log(`five btn`);
      screenArea.textContent += '5';
   }
   if (e.target.id === 'six') {
      console.log(`six btn`);
      screenArea.textContent += '6';
   }
   if (e.target.id === 'seven') {
      console.log(`seven btn`);
      screenArea.textContent += '7';
   }
   if (e.target.id === 'eight') {
      console.log(`eight btn`);
      screenArea.textContent += '8';
   }
   if (e.target.id === 'nine') {
      console.log(`nine btn`);
      screenArea.textContent += '9';
   }
   if (e.target.id === 'addition') {
      console.log(`addition btn`);
      screenArea.textContent += '+';
   }
   if (e.target.id === 'substraction') {
      console.log(`substraction btn`);
      screenArea.textContent += '-';
   }
   if (e.target.id === 'times') {
      console.log(`times btn`);
      screenArea.textContent += '*';
   }
   if (e.target.id === 'division') {
      console.log(`division btn`);
      screenArea.textContent += '/';
   }
});

/* btnOne.addEventListener('click', (e) => {
   screenArea.textContent += '1';
});

btntwo.addEventListener('click', (e) => {
   screenArea.textContent += '2';
});
 */
