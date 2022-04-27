const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

// Greeting Layout의 숨김 해제
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}

// submit하면 localStorage에 값을 저장함 + login레이아웃 숨김 + greeting 레이아웃 숨김해제()
function onLoginSubmit(event){
    event.preventDefault();
    const typedusername = loginInput.Value;
    localStorage.setItem(USERNAME_KEY, typedusername);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(typedusername);
} 

//시작할 때 localStorage에 값을 가져옴
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    //show the greeting
    paintGreetings(savedUsername);
}