//FizzBuzz function
const fizzBuzz = (num) => {
  switch(true) {
    case (num % 3 == 0) && (num % 5 == 0):
      return 'FizzBuzz'
      break;
    case num % 3 == 0: 
      return 'Fizz'
      break;
    case num % 5 == 0:
      return 'Buzz';
      break;
    default: 
      return num;
      break;
  }
}

const fizzCounter = (num) => {
  let fizzArray = [];
  for(let i = num; i >= 0; i--){
    fizzArray.push(fizzBuzz(i));
  }
  return fizzArray;
}

const fizzBuzzTest = () => {
  const testInput = document.querySelector('#fizzBuzzTest');
  const testDisplay = document.querySelector('#testBox');
  const testButton = document.querySelector('#testButton');
  const clearTest = document.querySelector('#clearFizzTest')
  testInput.addEventListener('change', (ev) => {
    let inputNumber = ev.target.value;
    let result = fizzBuzz(inputNumber);
    testButton.addEventListener('click', () => {
      testDisplay.innerHTML = result;
      testButton.removeEventListener('click', () => {})
    })
  })
  clearTest.addEventListener('click', () => {
    testDisplay.innerHTML = '';
    testInput.value = '';
  })
}

const fizzBuzzCounter = () => {
  const counterInput = document.querySelector('#fizzBuzzCounter');
  const counterDisplay = document.querySelector('#counterBox');
  const counterButton = document.querySelector('#counterButton');
  const clearCounter = document.querySelector('#clearFizzCounter');
  counterInput.addEventListener('click', (ev) => {
    counterButton.addEventListener('click', () => {
      const array = fizzCounter(ev.target.value);
      for(let i = 0; i < array.length; i++){
        let li = document.createElement('li');
        let ul = document.createElement('ul')
        let node = document.createTextNode(array[i]);
        li.appendChild(node);
        counterDisplay.appendChild(li);
      }
    })
    counterInput.removeEventListener('click', () => {} )
  })
  clearCounter.addEventListener('click', () => {
    counterDisplay.innerHTML = '';
    counterInput.value = '';
  })
  }


const init = () => {
  fizzBuzzTest();
  fizzBuzzCounter();
}

init();