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
    data['title'] = title.value, 
    data['date'] = date.value, 
    data['description'] = description.value, 
    createTask();
}

let createTask = () => {
     tasksWrapper.innerHTML += `
      <div>
      <span>${data.title}</span>
      <span>${data.date}</span>
      <p>${data.description}</p>
      <span>
      <i data-bs-toggle="modal" data-bs-target="#form" onclick="editItem(this)" class="fas fa-edit"></i>
      <i onclick="removeItem(this)" class="fas fa-trash-alt"></i>
      </span>
      </div>
     `;
     resetForm();
}

function resetForm(){
       title.value = "";
       date.value = "";
       description.value = "";
}

function removeItem(item){
       if(confirm("Do you want to delete this item? You can't restore it again.")){
         item.parentElement.parentElement.remove();
       }
}

function editItem(item){
       let selectedTask = item.parentElement.parentElement;
       title.value = selectedTask.children[0].innerHTML;
       date.value = selectedTask.children[1].innerHTML;
       description.value = selectedTask.children[2].innerHTML;
       selectedTask.remove();
}