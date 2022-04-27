const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
    event.preventDefault();
    const typedusername = loginInput.Value;
    localStorage.setItem(USERNAME_KEY, typedusername);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // greeting.innerText = "Hello" + username;
    paintGreetings(typedusername);
} 


// 이제는  click이 아닌 html의 submit을 감지해야 함다.
loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    //show the greeting
    paintGreetings(savedUsername);
}