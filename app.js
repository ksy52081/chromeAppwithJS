const loginInput = document.querySelector("#login-from input");
const loginButton = document.querySelector("#login-from button");

function onLoginBtnClick(){
    // console.dir(loginInput);
    console.log(loginInput.value);
    console.log("clicked!")

}

loginButton.addEventListener("click", onLoginBtnClick);