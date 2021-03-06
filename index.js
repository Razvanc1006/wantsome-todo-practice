<<<<<<< HEAD
const todoContainer = document.getElementById('todo-container');
const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const description= form.querySelector('input').value;
    const newTodo = {description};

    fetch('http://localhost:3000/api/todos', {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newTodo),
        })
        .then(response => response.json())
        .then(()=> getTodos());
    
    
});

function displayTodos(todos){
    todoContainer.innerHTML= '';
    for(let todo of todos)
    {
        const li = document.createElement('li');
        li.textContent= todo.description;
        li.classList = todo.done ? "done" : '';
        todoContainer.appendChild(li);
        const span = document.createElement('span');
        span.textContent = 'X';
        li.appendChild(span);
        
        
        registerDoneEvent(li,todo);
        registerDeleteEvent(li,todo);
    }
   
}

function registerDoneEvent(li,todo){
    li.addEventListener('click',function(){
        //patch
        //url: http://localhost:3000/api/todos/:todoID
        //raspuns : noul todo -> facem update la lista -> getTodos

        fetch(`http://localhost:3000/api/todos/${todo.id}`,{
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                description: todo.description,
                done: !todo.done
            })
        })
        .then(response => response.json())
        .then(() => getTodos());
    });
}
function registerDeleteEvent(li,todo){
    const deleteButton = li.querySelector('span');
    deleteButton.addEventListener('click',function(e){ 
        e.stopPropagation();
        fetch(`http://localhost:3000/api/todos/${todo.id}`,{
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
           /* body: JSON.stringify({
                todoID: todo.id
            }) */
        })
        .then(response => response.json())
        .then(()=> li.remove());
    });

}

function getTodos(){
    fetch('http://localhost:3000/api/todos', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => response.json())
    .then(todos => displayTodos(todos));
}

=======
const todoContainer = document.getElementById('todo-container');
const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const description= form.querySelector('input').value;
    const newTodo = {description};

    fetch('http://localhost:3000/api/todos', {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newTodo),
        })
        .then(response => response.json())
        .then(()=> getTodos());
    
    
});

function displayTodos(todos){
    todoContainer.innerHTML= '';
    for(let todo of todos)
    {
        const li = document.createElement('li');
        li.textContent= todo.description;
        li.classList = todo.done ? "done" : '';
        todoContainer.appendChild(li);
    }
   
}

function getTodos(){
    fetch('http://localhost:3000/api/todos', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => response.json())
    .then(todos => displayTodos(todos));
}

>>>>>>> 0b5315e1fe8db4bc720d58a28df0d3683120c2d8
getTodos();