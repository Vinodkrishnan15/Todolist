const registerForm=document.getElementById('register-form')

const loginForm= document.getElementById('login-form')

//registering

registerForm.addEventListener('submit', async(e)=>{
    e.preventDefault();
    const username=document.getElementById('register-username').value;
    const password =document.getElementById('register-password').value;
    const email=document.getElementById('register-email').value;

    const resposne = await fetch('/auth/register',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({username,password,email})
    })
});



const list=document.querySelector('.todos')

const generateTemplate =(todo)=>{
  const html= `
  <li class="list-group-item d-flex justify-content-between align-itemns-center text-light">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
            `;

            list.innerHTML += html
}



const addform=document.querySelector('.add')


addform.addEventListener('submit',e=>{
    e.preventDefault();

    const todo=addform.add.value.trim();// trim avoid any white spaces before and after the string
    if(todo.length ){
        generateTemplate(todo)
        addform.reset() // empty the entering tab after entering the item
    }  
    
})

//removing an item from list 

list.addEventListener('click',e=>{
    e.preventDefault
    e.target.classList.contains('delete')

    e.target.parentElement.remove();
})



const search=document.querySelector('.search input')

// please rewatch the tutorial
const filterTodos=(term)=>{

   Array.from(list.children)
  .filter((todo)=> !todo.textContent.toLowerCase().includes(term.toLowerCase()))
  .forEach((todo)=>todo.classList.add('filtered'))

  Array.from(list.children)
  .filter((todo)=> todo.textContent.toLowerCase().includes(term.toLowerCase()))
  .forEach((todo)=>todo.classList.remove('filtered'))

// Array.from(list.children)
// .filter((todo)=> !todo.textContent.includes(term))
// .forEach((todo)=>todo.classList.add('filtered'))

// Array.from(list.children)
// .filter((todo)=> todo.textContent.includes(term))
// .forEach((todo)=>todo.classList.remove('filtered'))
}

search.addEventListener('keyup',e=>{
    const term=search.value.trim();

    filterTodos(term)
})