// Async and Await


function fetchStudentData(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {

            const student = true;

            if(student){
                resolve({id:2403, name: "Hamouda", class: "Junior", year: 2026});
            }else(
                reject("The student info not found !")
            );

        }, 2000);
    })
}



async function displayStudentData(){

    try{

        const student = await fetchStudentData();
        console.log(student)

    }catch(err){
        console.log(err)
    }

}


displayStudentData();