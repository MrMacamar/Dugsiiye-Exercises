// Asynchronous Non-Blocking Code :
// -------------------------------------------

console.log("Hey you have wait 4s for your code publishing");

function fetchUserDataAsynch(callback){
    setTimeout(() => {
         const userData = {id:1, name:"Ahmed", age: 27 + " Years old"};
         callback(userData);
    }, 4000);
}

fetchUserDataAsynch(function (userData){
    console.log("Here is your Non-blocked data ", userData);
});




// Asynchronous Blocking Code :
// -------------------------------------------

function studentInfo(){
    alert("Your data is Fechting !")
    return {id:2, name:"Toyatto", yearReleased: 2022 + " Model"};
}

const user = studentInfo();

console.log("Here is you Blocked data ", user);
