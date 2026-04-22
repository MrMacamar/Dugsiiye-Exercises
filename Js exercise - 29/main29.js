// Fetching data from local file 


async function fetchData(){

    console.log("Starting fetching data");

    const response = await fetch('./data.json');
    const data = await response.json();

    console.log("Here is Your Customer Report ", data)
};


fetchData();