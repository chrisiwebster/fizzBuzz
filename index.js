//FizzBuzz function
const fizzBuzz = (num) => {
  switch(true) {
    case (num % 3 === 0) && (num % 5 === 0):
      return 'FizzBuzz';
    case num % 3 === 0: 
      return 'Fizz';
    case num % 5 === 0:
      return 'Buzz';
    default: 
      return num;
  }
}

//Counts down from the number provides and uses the FizzBuzz against each number
const fizzCounter = (num) => {
  //Initialise array so we can manipulate it later
  const fizzArray = [];
  for(let i = num; i > 0; i--){
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
      testInput.value = '';
      //Removes the result so the browser doesn't remember
      result = '';
      //Removes event listener so you can't just keep hitting the button.
      testButton.removeEventListener('click', () => {})
      testInput.removeEventListener('click', () => {} )

    })
  })
  clearTest.addEventListener('click', () => {
    //Clears the box
    testDisplay.innerHTML = '';
  })
}

const fizzBuzzCounter = () => {
  const counterInput = document.querySelector('#fizzBuzzCounter');
  const counterDisplay = document.querySelector('#counterBox');
  const counterButton = document.querySelector('#counterButton');
  const clearCounter = document.querySelector('#clearFizzCounter');
  counterInput.addEventListener('click', (ev) => {
      //If someone clicks on input to enter another number, this clears it
    counterDisplay.innerHTML = '';
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
          counterInput.value = '';
        }
        //Removes event listener so you can't just keep hitting the button.
        counterButton.removeEventListener('click', () => {})
        counterInput.removeEventListener('click', () => {} )
      })
    })
    clearCounter.addEventListener('click', () => {
      //Clears the input and the box
      counterDisplay.innerHTML = '';
    })
  }


const init = () => {
  fizzBuzzTest();
  fizzBuzzCounter();
}

init();