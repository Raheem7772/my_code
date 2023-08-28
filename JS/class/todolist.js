lettodoItemsContainer=document.getElementById("todoItemsContainer");
letaddTodoButton=document.getElementById("addTodoButton");
letsaveTodoButton=document.getElementById("saveTodoButton");

function getTodoListFromLocalStorage() {
  letstringifiedTodoList=localStorage.getItem("todoList");
  letparsedTodoList=JSON.parse(stringifiedTodoList);
  if (parsedTodoList===null) {
    return [];
  } else {
    returnparsedTodoList;
  }
}

lettodoList=getTodoListFromLocalStorage();
lettodosCount=todoList.length;

saveTodoButton.onclick=function () {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

function onTodoStatusChange(checkboxId, labelId) {
  letcheckboxElement=document.getElementById(checkboxId);
  letlabelElement=document.getElementById(labelId);
  labelElement.classList.toggle("checked");
}

function onDeleteTodo(todoId) {
  lettodoElement=document.getElementById(todoId);
  todoItemsContainer.removeChild(todoElement);
}

function createAndAppendTodo(todo) {
  lettodoId="todo"+todo.uniqueNo;
  letcheckboxId="checkbox"+todo.uniqueNo;
  letlabelId="label"+todo.uniqueNo;
  lettodoElement=document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoElement.id=todoId;
  todoItemsContainer.appendChild(todoElement);

  letinputElement=document.createElement("input");
  inputElement.type="checkbox";
  inputElement.id=checkboxId;

  inputElement.onclick=function() {
    onTodoStatusChange(checkboxId, labelId);
  };

  inputElement.classList.add("checkbox-input");
  todoElement.appendChild(inputElement);

  letlabelContainer=document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  letlabelElement=document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.id=labelId;
  labelElement.classList.add("checkbox-label");
  labelElement.textContent=todo.text;
  labelContainer.appendChild(labelElement);

  letdeleteIconContainer=document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  letdeleteIcon=document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

  deleteIcon.onclick=function () {
    onDeleteTodo(todoId);
  };

  deleteIconContainer.appendChild(deleteIcon);
}

 for (lettodooftodoList) {
  createAndAppendTodo(todo);
}

function onAddTodo() {
  letuserInputElement=document.getElementById("todoUserInput");
  letuserInputValue=userInputElement.value;

  if (userInputValue==="") {
    alert("Enter Valid Text");
    return;
  }

  todosCount=todosCount+1;

  letnewTodo= {
    text:userInputValue,
    uniqueNo:todosCount,
  };
  todoList.push(newTodo);
  createAndAppendTodo(newTodo);
  userInputElement.value="";
}

addTodoButton.onclick=function () {
  onAddTodo();
};
