const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.Value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = "Hello" + username;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const link = document.querySelector("a");

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event)
    // alert("clicked")
    // 앞서 이야기했듯, alert가 가동되면 alert가 종료되기 전까지 모든 행동이 멈춘다.
}

link.addEventListener("click", handleLinkClick)


// 이제는  click이 아닌 html의 submit을 감지해야 함다.
loginForm.addEventListener("submit", onLoginSubmit);