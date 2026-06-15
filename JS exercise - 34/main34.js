
// Adding Element into List
// ------------------------

function addItem(){
    // select operation element
    const list = document.querySelector('#list');
    // creating new element
    const newItem = document.createElement('li');
    // new element data initialization
    newItem.textContent = "new Fruit";


    // Appending
    list.appendChild(newItem);
}





// Removing Element from the list
// ------------------------------

function removeItem(){
    if(list.lastChild){
        list.removeChild(list.lastChild)
    }else{
        alert('Boss nothing left!')
    }
}