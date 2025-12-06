
//TESTING BUTTONS//

// One button

const oneButton = document.getElementById("one");

oneButton.addEventListener ("click", function(event) {

    const oneButtonValue = event.target.value;
    console.log("One Button Value:", oneButtonValue);


})

// Two button

const twoButton = document.getElementById ("two")

twoButton.addEventListener ('click', e => {
    console.log (e.target.innerHTML)
})

// Three button

const threeButton = document.getElementById ("three")

threeButton.addEventListener ('click', e => {
    console.log (e.target.innerHTML)
})

// Four button

const fourButton = document.getElementById ("four")

fourButton.addEventListener ('click', e => {
    console.log (e.target.innerHTML)
})

// Five button

const fiveButton = document.getElementById ("five")

fiveButton.addEventListener ('click', e => {
    console.log (e.target.innerHTML)
})

// Six button

const sixButton = document.getElementById ("six")

sixButton.addEventListener ('click', e => {
    console.log (e.target.innerHTML)
})

// Seven button

const sevenButton = document.getElementById ("seven")

sevenButton.addEventListener ('click', e => {
    console.log (e.target.innerHTML)
})

// Eight button

const eightButton = document.getElementById ("eight")

eightButton.addEventListener ('click', e => {
    console.log (e.target.innerHTML)
})

// Nine button

const nineButton = document.getElementById ("nine")

nineButton.addEventListener ('click', e => {
    console.log (e.target.innerHTML)
})

// Zero button

const zeroButton = document.getElementById ("zero")

zeroButton.addEventListener ('click', e => {
    console.log (e.target.innerHTML)
})

// Addition button

const additionButton = document.getElementById ("addition")

additionButton.addEventListener ('click', e => {
    console.log (e.target.innerHTML)
})

// Subtraction button

const subtractionButton = document.getElementById ("subtraction")

subtractionButton.addEventListener ('click', e => {
    console.log (e.target.innerHTML)
})

// Multiplication button

const multiplicationButton = document.getElementById ("multiplication")

multiplicationButton.addEventListener ('click', e => {
    console.log (e.target.innerHTML)
})

// Division button

const divisionButton = document.getElementById ("division")

divisionButton.addEventListener ('click', e => {
    console.log (e.target.innerHTML)
})

// Point button

const pointButton = document.getElementById ("point")

pointButton.addEventListener ('click', e => {
    console.log (e.target.innerHTML)
})

// Equals button

const equalsButton = document.getElementById ("equals")

equalsButton.addEventListener ('click', e => {
    console.log (e.target.innerHTML)
})

// allClear button

const allClearButton = document.getElementById ("all-clear")

allClearButton.addEventListener ('click', e => {
    console.log (e.target.innerHTML)
})

// Delete button

const deleteButton = document.getElementById ("deleteNumber")

deleteButton.addEventListener ('click', e => {
    console.log (e.target.innerHTML)
})


// CALCULATIONS //

const historyArray = [];
const display = document.getElementById ("display"); 

function appendToDisplay (input) {
    display.value += input;
}


function clearDisplay () {    
    display.value = ""
}


function calculate () {

    try{
        display.value = eval(display.value);
        historyArray.push(display.value);
        console.log (historyArray);
    }

    catch (error) {
        display.value = "Error"
    }
}
 
function deleteNo () {
    display.value = display.value.slice (0,-1);
}

function calulationHistory () {
    appendToDisplay (historyArray);
}