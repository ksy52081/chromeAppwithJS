const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

// const toDos = [];
let toDos = []; //수정 가능한 변수로 변경

function saveToDos(){

    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //
};

function deleteToDo(event){
    const targetList = event.target.parentElement;
    targetList.remove();
}

function paintToDo(inputTodo){
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


// function sayHello(item){
//     console.log("this is the turn of ", item);
// }


const SavedTodos = localStorage.getItem(TODOS_KEY);

if(saveToDos){ 
    const parsedToDos = JSON.parse(saveToDos);
    toDos = parsedToDos; //localStorage에 값이 있으면 그걸 비어있는 toDos에다 채워넣겠다
    parsedToDos.array.forEach(paintToDo);
}