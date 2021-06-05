const form= document.getElementById("login-form");

let token = '';



form.addEventListener('submit',function(e){
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value ;
    const user = {email,password};
    
    // http://localhost:3000/api/todos
    fetch('http://localhost:3000/api/login',{
        method: 'POST',
        body: user
    })
    .then(response => response.json())
    .then(response => {
        localStorage.setItem('token',response.token);
        //redirect to index.html
        window.location.href= '/';
        
    })

    
});