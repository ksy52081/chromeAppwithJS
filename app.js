const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit(tomato){
    tomato.preventDefault();
    console.log(tomato);
    console.log(loginInput.value);
    // onLoginSubmit에 대한 argument를 받아온다!(?)
    // onLoginSubmit에 대한 default 기본 행동을 발생하지 않도록 막는다
    // const username = loginInput.value;
    // console.log(username);
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