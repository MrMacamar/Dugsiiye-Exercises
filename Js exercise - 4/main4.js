//  Add function Declaration
// =============================================

function add1(a,b){
    return a + b;
    
}

console.log(add1(5, 10));
console.log(add1(20, 10));
console.log(add1(80, 10));
console.log(add1(150, 10));




// add function Expression
// ===============================================

let add = function(a,b){
    return a + b;
}

console.log("Your sum is: " + add(10, 20));
console.log("Your sum is: " + add(15, 60));
console.log("Your sum is: " + add(1, 0));
console.log("Your sum is: " + add(11, 22));
console.log("Your sum is: " + add(100, 200));