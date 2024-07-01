let inputBox = document.querySelector('#input-box');
let btn = document.querySelector('#btn');
let listContainer = document.querySelector('#list-container')

const addtask = () => {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    inputBox.value = '';
    storeData()
}


btn.addEventListener('click', () => {
     addtask()
});

listContainer.addEventListener('click' , (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        storeData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        storeData()
    }
});

const storeData = () => {
    localStorage.setItem("data" , listContainer.innerHTML);
}

const getData = () => {
    listContainer.innerHTML = localStorage.getItem("data")
}

getData();