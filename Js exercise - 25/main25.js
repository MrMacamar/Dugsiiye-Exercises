// Spread section

console.log("------------------ Spread section-------------------------");

const numbers = [1,2,3];
const Allnumbers = [...numbers, 4,5,6];

console.log(Allnumbers);


console.log("------------------ Rest section-------------------------");

function sum(...numbers){
    return numbers.reduce((total, numb)=> total * numb, 1);
}

console.log(sum(10,2,5,3));


