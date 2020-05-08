//Step1 - declare all the relevant variables for the buttons, values, etc - 
const numberBtns = document.querySelectorAll('.numbers'); //this will select all the number buttons
const operatorBtns = document.querySelectorAll('.operators'); //this will select all the operator buttons 
const pendingDisplayValue = document.getElementById('pendingDisplayValue'); //this will select the top div of the calculator display
const currentDisplayValue = document.getElementById('currentDisplayValue'); //will select the second div where the current numbers will be displayed; 
const backspaceBtn = document.querySelector('.backspace');  //this will select the equals button
const equalsBtn = document.querySelector('.equals'); //this will select the equals button
const allClearBtn = document.getElementById('all-clear'); //this will select the all clear button 
const decimalPoint = document.querySelector('.decimal'); //will select the decimal point 
let displayValue = '0';  //this will store the displayValue
let pendingValue = ''; //will store displayValue
let result; //will be set to the result of the operation between num1, num2 and operator
let op = ''; //will store the corresponding operator value when they have been clicked;


//Step 2 - create functions for the operations and operate functions
let add = (num1, num2) => {
    result = Number(num1) + Number(num2);
    return result;
} 
let subtract = (num1, num2) => {
    result = Number(num1) - Number(num2);
    return result;
}
let multiply = (num1, num2) => {
    result = Number(num1) * Number(num2);
    return result;
}
let divide = (num1, num2) => {
    if (num1 === '0' || num2 === '0'){
        return 'Error you can\'t divide by zero.'
    }
    result = Math.round((Number(num1) / Number(num2)) * 100) / 100;
    return result;
}

function operate(operator, num1, num2){
    if (operator === '+'){
        add(num1, num2);
    }
    else if (operator === '-'){
        subtract(num1, num2);
    }
    else if (operator === '/'){
        divide(num1, num2);
    }
    else{
        multiply(num1, num2);
    }
}

//Step 3 - populate the display - with numbers 

let updateDisplayValue =  (e) => {
    let btnText = e.target.innerText; //this will target the textValue of the number being clicked

    if(displayValue === '0'){   //if the current displayValue is 0 then it will be cleared in order for next numbers to be inputted into the display 
        displayValue = '';
    }
    displayValue += btnText; //so will append the btnText value onto the displayValue
    currentDisplayValue.textContent = displayValue; //then the currentDisplayValue will have its textcontent set to the displayValue;
}

numberBtns.forEach(number => number.addEventListener('click', updateDisplayValue));

//Step 4 - All clear and backspace buttons
//This is the allClear button which will clear the screen and also reset the values back to their original states.
allClearBtn.addEventListener('click', (e) => {
    displayValue = '0';
    pendingValue = '';
    result; 
    operator = '';
    currentDisplayValue.innerText = displayValue
    pendingDisplayValue.innerText = '';
});

//backspaceBtn - this will delete the last character of the displayValue
function deleteBtn(e){
    let dvLength = displayValue.length; //this will store length of displayValue 
    displayValue = displayValue.slice(0, dvLength - 1); //this will remove the last characte of displayValue
    currentDisplayValue.textContent = displayValue; //we then make it visible by setting the textContent of currentDisplayValue to displayValue 
    if(displayValue === ''){
        //if we keep pressing backspace till there's no numbers left then it will set the displayValue to '0'
        currentDisplayValue.textContent = displayValue = '0';
    }
}
backspaceBtn.addEventListener('click', deleteBtn);


//Step 5 - Operator buttons - this will takeplace in a function called compute() where events for equalsBtn and operatorBtns will reside.  
//Now we will work with the operator buttons, this is the logic:
//User inputs the displayValue, - done 
//Then they will press an operator,
//When it has been pressed the displayValue will now become the pendingValue,
//Then clear the screen so that the new displayValue can be inputted by the user - the second operand in the equation
//Need to also store the value of the operator inside the operator value;


function compute(){
    
    operatorBtns.forEach(operator => operator.addEventListener('click', (e) =>{
        pendingValue = displayValue;
        if (pendingValue !== undefined){
            displayValue = '0';
            currentDisplayValue.innerText = displayValue;
            pendingDisplayValue.innerText = pendingValue;
            op = e.currentTarget.textContent;
        }
        
        
       
    }));

    //Step 6 - Equals button
    //When the user clicks - equals button the current displayValue will be stored into the displayValue;
    //Then call the operate function which will call the relevant function dependant on the value of the operator;
    equalsBtn.addEventListener('click', (e) => {
        displayValue = currentDisplayValue.textContent;
        operate(op, pendingValue, displayValue);
        if(op === '/' && (displayValue === '0' || pendingValue === '0')){
            currentDisplayValue.textContent = 'Error';
            
        }
        console.log(result);
        pendingValue = '';
        pendingDisplayValue.innerText = pendingValue
        currentDisplayValue.textContent = displayValue;
        displayValue = result;
        if (result === 0){
            return displayValue = result.toString(); //this will convert the result to string so that backspace can be used on it;
        }
        displayValue = result.toString()
        currentDisplayValue.textContent = displayValue;
        
        

       
    });
    
}

compute();




