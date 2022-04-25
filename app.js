const loginForm = document.querySelector("#login-from");
const loginInput = document.querySelector("#login-from input");

function onLoginSubmit(tomato){
    tomato.preventDefault();

    console.log(tomato);
    // onLoginSubmit에 대한 argument를 받아온다!(?)
    // onLoginSubmit에 대한 default 기본 행동을 발생하지 않도록 막는다

    const username = loginInput.value;
    console.log(username);
}

// 이제는  click이 아닌 html의 submit을 감지해야 함다.
loginForm.addEventListener("submit", onLoginSubmit);