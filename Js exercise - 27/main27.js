// Promises exercise

function fetchUserData(){
   return new Promise((resolve, reject) =>{

     setTimeout(()=> {
        const payment = false;
        if(payment){
            resolve("Your payment is successfull");
        }else{
            reject("Your payment was declined")
        }
    }, 2000)

   })
}


fetchUserData()
    .then((data)=> console.log(data))
    .catch((err)=> console.log(err));