let form = document.getElementById('form')
let description = document.getElementById("description")
let errorMsg = document.getElementById("errorMsg")
let postAppend = document.getElementById("posts")

form.addEventListener('submit', (event) => {
       event.preventDefault()
       formValidation()
})

let posts = {}

function formValidation(){
       if(description.value){
              errorMsg.innerHTML = ""
              acceptData()
       }else{
              errorMsg.innerHTML = "Post description is required."
       }
}


let acceptData = () => {
        posts['text'] = description.value
        storePost()
}

let storePost = () => {
       postAppend.innerHTML += `
       <div>
          <p>${posts.text}</p>
          <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onclick="removePost(this)" class="fas fa-trash-alt"></i>
          </span>
        </div>
       `
       description.value = ""
}

// remove post element
let removePost = (postItem) => {
       if(confirm("Do you want to delete this item?")){
          postItem.parentElement.parentElement.remove()
       }
        
}

// edit post element 
let editPost = (postItem) => {
         description.value = postItem.parentElement.previousElementSibling.innerHTML
         postItem.parentElement.parentElement.remove()
}