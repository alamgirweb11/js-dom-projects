let form = document.getElementById('form');
let taskTitle = document.getElementById('textInput');
let errorMsg = document.getElementById('msg');

form.addEventListener('submit', function(e){
     e.preventDefault();
     formValidation();
});

let formValidation = () => {
      if(taskTitle.value === ''){
         const errorText = 'Title is required!';
         errorMsg.innerHTML = errorText;
      }else{
        errorMsg.innerHTML = ''
      }
}