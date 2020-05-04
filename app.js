//variable declarations
const numberBtns = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const prevOperand = document.querySelector('#prevOp');
const currentOperand = document.getElementById('currentOperand');
const equalsBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('#all-clear');
var a = '';
var b = '';
var op = '';


//part 1 -1
let add = (a, b) => {
    return currentNumber(a) + Number(b);
};
let subtract = (a, b) => {
    return Number(a) - Number(b);
}
let multiply = (a, b) => {
    return Number(a) * Number(b);
};
let divide = (a, b) => {
    return Number(a) / Number(b);
};

//part 2 - 
function operate(op, a, b){
    if (op === '+'){
        return add(a, b);
    }
    else if (op === '-'){
        return subtract(a, b);
    }
    else if (op === '*'){
        return multiply(a, b);
    }
    else {
        return divide(a, b);
    }
}

// //CLear button
// clearBtn.addEventListener('click', allClear);  //remember callback functions dont have () in them
// function allClear(){
//     currentOperand.textContent = '';
//     prevOperand.textContent = '';
//     a = ''
//     b = ''
//     return a, b
// }



//Populating the display
function populateDisplay(){
    numberBtns.forEach(number => number.addEventListener('click', () => {
        a = number.value
        currentOperand.textContent += a; 
    }));    
}


function operatorEvent(){
    let firstNumber, secondNumber, op; 
    
    operators.forEach(operator => operator.addEventListener('click', (e) => {
        firstNumber = currentOperand.textContent;
        currentOperand.textContent = '';
        op = e.currentTarget.textContent
        console.log(op)
        console.log(firstNumber)
    }));

    equalsBtn.addEventListener('click', (e) => {
        secondNumber = currentOperand.textContent;
        if (op === '+'){
            console.log(secondNumber)
            console.log(operate(op, firstNumber, secondNumber))
        }
        else if(op === '-'){
            console.log(secondNumber)
            console.log(operate(op, firstNumber, secondNumber));
        }
        else if(op === '*'){
            console.log(secondNumber)
            console.log(operate(op, firstNumber, secondNumber));
        }
        else{
            console.log(secondNumber)
            console.log(operate(op, firstNumber, secondNumber));
        }
    });

    

}



populateDisplay()
operatorEvent()
