let form = document.getElementById('form'),
 title = document.getElementById('textInput'),
 date = document.getElementById('dateInput'),
 description = document.getElementById('description'),
 errorMsg = document.getElementById('msg'),
 modalSubmitBtn = document.getElementById('modalSubmitBtn'),

tasksWrapper = document.getElementById('tasks');

form.addEventListener('submit', function(e){
     e.preventDefault();
     formValidation();
});

let formValidation = () => {
      if(title.value === ''){
         const errorText = 'Title is required!';
         errorMsg.innerHTML = errorText;
      }else{
        errorMsg.innerHTML = '';
        inputValues();
        modalSubmitBtn.setAttribute("data-bs-dismiss", "modal");
        modalSubmitBtn.click();
        /** 
         * IIFE function =  immediately invoked functional expression
         * syntax  (function funName(){})();
        */
       (() => {
        modalSubmitBtn.setAttribute("data-bs-dismiss", "");
       })();
      }
}

let data = [];

let inputValues = () => {
    data.push({
        title: title.value, 
        date: date.value,  
        description: description.value
    });
    // store data in localStorage
    localStorage.setItem("data", JSON.stringify(data));
    createTasks();
}

let createTasks = () => {
    tasksWrapper.innerHTML = '';
     data.map((task, index) => {
        return (tasksWrapper.innerHTML += `
        <div id=taskNo-${index}>
        <span>${task.title}</span>
        <span>${task.date}</span>
        <p>${task.description}</p>
        <span>
        <i data-bs-toggle="modal" data-bs-target="#form" onclick="editItem(this)" class="fas fa-edit"></i>
        <i onclick="removeItem(this)" class="fas fa-trash-alt"></i>
        </span>
        </div>
       `);
     });
     resetForm();
}

function removeItem(item){
    //    if(confirm("Do you want to delete this item? You can't restore it again.")){
         item.parentElement.parentElement.remove();
         // remove item form localStorage
         data.splice(item.parentElement.parentElement.id, 1);
         // update localStorage
         localStorage.setItem("data", JSON.stringify(data));
    //    }
}

function editItem(item){
      let modalTitle = document.getElementById('modalTitle')
       modalTitle.innerHTML = "Edit Task";
       modalSubmitBtn.innerHTML = "Update";
       let selectedTask = item.parentElement.parentElement;
       title.value = selectedTask.children[0].innerHTML;
       date.value = selectedTask.children[1].innerHTML;
       description.value = selectedTask.children[2].innerHTML;
       removeItem(item);
}

function resetForm(){
    title.value = "";
    date.value = "";
    description.value = "";
}

// retrieve data from localStorage
(() => {
    data = JSON.parse(localStorage.getItem("data")) || [];
    createTasks();
})();