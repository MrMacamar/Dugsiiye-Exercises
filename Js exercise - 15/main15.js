
// For in loop and for of loop

const people = [
    {name: "Alice", age: 25, city: "Wonderland"},
    {name: "Bob", age: 30, city: "Builderland"},
    {name: "Charlie", age: 35, city: "Chocolate Factory"}

  
];



console.log("Propeties and values of each person:");
console.log("--------------------------------------");

const person = {name: "Alice", age: 25, city: "Wonderland"};
const person2 = {name: "Bob", age: 30, city: "Builderland"};
const person3 = {name: "Charlie", age: 35, city: "Chocolate Factory"};

for(let key in person){
    console.log(key + " : " + person[key]);
}

console.log("-----------------------")

for(let key2 in person2){
    console.log(key2 + " : " + person[key2])
}


console.log("-----------------------")


for(let key3 in person3){
    console.log(key3 + " : " + person[key3])
}


