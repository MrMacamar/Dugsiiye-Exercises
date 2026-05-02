// Fetching data by using GET REQUEST 
// ----------------------------------------------

async function fetchData(){
    try{

        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if(!response.ok){
            throw new Error(`Http request failes! status: ${response.status}`);
        }


        // shaqada xigta

        const usersData = await response.json();
        console.log(usersData);

    }catch(error){
        console.log(error)
    }
}

fetchData();




// =========== POSTING NEW USER ====================================


async function postData(){
    try{

        const userData = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                title: "I am Student",
                body: "I am learning Software engineering + AI bootcamp",
                userId: 11
            }
            )
        });

        if(!userData.ok){
            throw new Error(`Http request failed! status: ${userData.status}`);
        }
        // shaqada xigta

        const data = await userData.json();
        console.log(data)

    }catch(error){
        console.log(error);
    }
}

postData();

