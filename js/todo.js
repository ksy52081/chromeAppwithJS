const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

function paintToDo(inputTodo){
    // console.log("i will paint", inputTodo);
    const listItem = document.createElement("li");
    const spanOfList = document.createElement("span");
    listItem.appendChild(spanOfList);
    spanOfList.innertext = inputTodo;//?? 이상하다. innertext를 나중에 넣었는데 왜 멀쩡히 들어가있지?
    todoList.appendChild(listItem);
}

function handleToDoSubmit(event){
    event.preventDefault();
    console.log(toDoInput.value);
    const newToDo = toDoInput.value; //새 변수에 입력값 저장
    toDoInput.value = ""; //엔터를 쳤을때 입력칸이 깔끔하게 비워지도록
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit)