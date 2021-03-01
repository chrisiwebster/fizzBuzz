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

//Counts down from the number provides and uses the FizzBuzz against each number
const fizzCounter = (num) => {
  //Initialise array so we can manipulate it later
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
  const clearTest = document.querySelector('#clearFizzTest');
  //listens for the input
  testInput.addEventListener('change', (ev) => {
    let inputNumber = ev.target.value;
    let result = fizzBuzz(inputNumber);
    testButton.addEventListener('click', () => {
      //Changes the box so the result of FizzBuzz appears
      testDisplay.innerHTML = result;
      //Removes event listener so you can't just keep hitting the button.
      testButton.removeEventListener('click', () => {})
    })
  })
  clearTest.addEventListener('click', () => {
    //Clears the input and the box
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
     //run through each item of the fizz buzz result
      for(let i = 0; i < array.length; i++){
        //create an li
        let li = document.createElement('li');
        //create a text node out of the array item
        let node = document.createTextNode(array[i]);
        //append that node to the li
        li.appendChild(node);
        //append that li to the box
        counterDisplay.appendChild(li);
      }
    })
      //Removes event listener so you can't just keep hitting the button.
    counterInput.removeEventListener('click', () => {} )
  })
  clearCounter.addEventListener('click', () => {
    //Clears the input and the box
    counterDisplay.innerHTML = '';
    counterInput.value = '';
  })
  }


const init = () => {
  fizzBuzzTest();
  fizzBuzzCounter();
}

init();