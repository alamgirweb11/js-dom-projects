let form = document.getElementById('form'),
 title = document.getElementById('textInput'),
 date = document.getElementById('dateInput'),
 description = document.getElementById('description'),
 errorMsg = document.getElementById('msg'),
 modalAddBtn = document.getElementById('modalAddBtn'),

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
        modalAddBtn.setAttribute("data-bs-dismiss", "modal");
        modalAddBtn.click();
        /** 
         * IIFE function =  immediately invoked functional expression
         * syntax  (function funName(){})();
        */
       (() => {
        modalAddBtn.setAttribute("data-bs-dismiss", "");
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
      <i class="fas fa-edit"></i>
      <i class="fas fa-trash-alt"></i>
      </span>
      </div>
     `;
     resetForm();
}

function resetForm(){
       title.value = "";
       data.value = "";
       description.value = "";
}

console.log(data);