const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const toDos = [];

function saveToDos(){

    localStorage.setItem("todos", JSON.stringify(toDos)); //
};

function deleteToDo(event){
    //버튼은 todo 갯수만큼 생성된다
    //특정 버튼을 누르면 해당하는 todo만을 지우기 위해서는
    //버튼이 어떤 버튼인지 특정할 수 있어야 한다 ~ event.path event.parentNode
    // console.dir(event.target.parentElement);
    // event.target = 이벤트가 발생한 html의 element
    // console.log(event.target.parentElement.innerText); 
    const targetList = event.target.parentElement;
    targetList.remove();
}


function paintToDo(inputTodo){
    // console.log("i will paint", inputTodo);
    const listItem = document.createElement("li");
    const spanOfList = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo)
    listItem.appendChild(spanOfList);
    listItem.appendChild(button);
    spanOfList.innerText = inputTodo;//?? 이상하다. innerText를 나중에 넣었는데 왜 멀쩡히 들어가있지?
    todoList.appendChild(listItem);
}

function handleToDoSubmit(event){
    event.preventDefault();
    console.log(toDoInput.value);
    const newToDo = toDoInput.value; //새 변수에 입력값 저장
    toDoInput.value = ""; //엔터를 쳤을때 입력칸이 깔끔하게 비워지도록
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos(); //하나씩 추가해도, 중복이 쌓이지 않고, key: todos에 해당하는 value가 업데이트 된다.
}

toDoForm.addEventListener("submit", handleToDoSubmit)