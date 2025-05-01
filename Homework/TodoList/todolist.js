const form = document.querySelector(".todo-form");

const init = () => {
    form.addEventListener("submit", addTodoItem);
}

const addTodo = () => {
    form.style.display = (form.style.display === "none") ? "block" : "none";
};

const addTodoItem = (event) => {
    event.preventDefault();
    const todoContent = document.querySelector(".todo-input").value;
    if (todoContent) printTodoItem(todoContent);
};


const printTodoItem = (text) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerHTML = text;
    span.addEventListener("click", toggleTodoToDone);
    button.innerHTML = "-";
    button.addEventListener("click", deleteTodoItem);
    li.appendChild(span);
    li.appendChild(button);
    document.querySelector(".todo-list").appendChild(li);
    document.querySelector(".todo-input").value = "";
};


const deleteTodoItem = (e) => {
    const target = e.target.parentElement;
    document.querySelector(".todo-list").removeChild(target);
};


const toggleTodoToDone = (e) => {
    deleteTodoItem(e);
    printDoneItem(e.target.innerText);
};

const printDoneItem = (text) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = text;
    span.addEventListener("click", toggleDoneToDo);
    button.innerText = "-";
    button.addEventListener("click", deleteDoneItem);
    li.appendChild(span);
    li.appendChild(button);
    document.querySelector(".done-list").appendChild(li);
};


const deleteDoneItem = (e) => {
    const target = e.target.parentElement;
    document.querySelector(".done-list").removeChild(target);
};


const toggleDoneToDo = (e) => {
    deleteDoneItem(e);
    printTodoItem(e.target.innerText);
};

init();