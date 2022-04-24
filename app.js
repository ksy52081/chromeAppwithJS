const loginInput = document.querySelector("#login-from input");
const loginButton = document.querySelector("#login-from button");

function onLoginBtnClick(){
    // console.dir(loginInput);
    const username = loginInput.value;
    if (username === ""){
        alert("Plz write your name");
    } else if (username.length > 15){
        alert("your name is too long");

    }
    console.log("clicked!")
}
loginButton.addEventListener("click", onLoginBtnClick);