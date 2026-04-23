// Callback function by applying calculator

function operate(a, b , Callback){
    return Callback(a, b)
}


function add(a, b ){
    return a + b
}

function subs(a, b ){
    return a - b
}

function div(a, b ){
    return a / b
}

function mult(a, b ){
    return a * b
}


console.log("Additoin ", operate(30, 10, add));
console.log("Subs ", operate(30, 10, subs));
console.log("Division ", operate(30, 10, div));
console.log("Multiplication ", operate(30, 10, mult));