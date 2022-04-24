const loginInput = document.querySelector("#login-from input");
const loginButton = document.querySelector("#login-from button");

function onLoginBtnClick(){
    const username = loginInput.value;
    console.log(username);
}
loginButton.addEventListener("click", onLoginBtnClick);