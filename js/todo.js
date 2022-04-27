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
    console.log(targetList.id);
    targetList.remove();
}

function paintToDo(inputTodo){ //이제 inputTodo는 String이 아닌 object {text:~~ , id:~~} 가 되었다.
    const listItem = document.createElement("li");
    listItem.id= inputTodo.id; //li 안에 id에 object 의 id로 넣고싶다
    const spanOfList = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo)
    listItem.appendChild(spanOfList);
    listItem.appendChild(button);
    spanOfList.innerText = inputTodo.text;//?? 이상하다. innerText를 나중에 넣었는데 왜 멀쩡히 들어가있지?
    todoList.appendChild(listItem);
}

function handleToDoSubmit(event){
    event.preventDefault();
    console.log(toDoInput.value);
    const newToDo = toDoInput.value; //새 변수에 입력값 저장
    toDoInput.value = ""; //엔터를 쳤을때 입력칸이 깔끔하게 비워지도록
    const newTodoObj = {
        text : newToDo,
        id : Date.now(),
    }; // 단순히 string을 리스트 array에 넣지 않고, id와 text가 있는 object를 리스트 array에 넣겠다.
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos(); //하나씩 추가해도, 중복이 쌓이지 않고, key: todos에 해당하는 value가 업데이트 된다.
}

toDoForm.addEventListener("submit", handleToDoSubmit)


// function sayHello(item){
//     console.log("this is the turn of ", item);
// }


const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos){ 
    const parsedToDos = JSON.parse(savedTodos);
    toDos = parsedToDos; //localStorage에 값이 있으면 그걸 비어있는 toDos에다 채워넣겠다
    parsedToDos.forEach(paintToDo);
}


function sexyFilter(item){
    return item !==3
}
[1,2,3,4].filter(sexyFilter) //forEach 함수와 비슷하게, array에 아이템을 하나씩 불러와 변수함수에 하나씩 돌려본다.

function sexyFilter2(item){
    return item.text !== "aaaaa"
}
const sampleList = [{text:"aaaaa"}, {text:"bbbbb"}, {text:"acbca"}];
sampleList.filter(sexyFilter2);