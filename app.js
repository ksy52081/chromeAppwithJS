const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.Value;
    localStorage.setItem("username", username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // greeting.innerText = "Hello" + username;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
} 

// 이제는  click이 아닌 html의 submit을 감지해야 함다.
loginForm.addEventListener("submit", onLoginSubmit);