//calculator - js code

//1.
function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b; 
}

//2. 
function operate(op, x, y){
    if(op === '+'){
        return add(x, y);
    }

    else if (op === '-'){
        return subtract(x, y);
    }

    else if (op === '*'){
        return multiply(x, y);
    }

    else{
        return divide(x,y);
    }
}