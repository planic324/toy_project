const taskInput = document.getElementById("new-task");
const addButton = document.getElementsByTagName("button")[0];
const editButton = document.getElementsByTagName("button")[1];
const deleteButton = document.querySelector('delete');
const incompleteTasksHoler = document.getElementById("incomplete-tasks");
const completeTasksHoler = document.getElementById("completed-tasks");

const createNewTaskElement = function(taskString) {
    let listItem = document.createElement("li");
    let checkBox = document.createElement("input");
    let label = document.createElement("label");
    let editInput = document.createElement("input");
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    checkBox.type = "checkbox";
    editInput.type = "text";
    
    editButton.innerText = "Edit";
    editButton.className = "edit"
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    label.innerText = taskString;

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
}

const addTask = function() {
    console.log("Add task....");

    let listItem = createNewTaskElement(taskInput.value);
    incompleteTasksHoler.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    taskInput.value = "";
    
}

const editTask = function() {
    console.log("Edit task...")

    let listItem = this.parentNode;
    let editInput = listItem.querySelector("input[type=text]");
    let label = listItem.querySelector("label");
    let containsClass = listItem.classList.contains("editMOde");

    if (containsClass){
        label.innerText = editInput.value;
    } else{
        editInput.value = label.innerText;
    }
    listItem.classList.toggle("editMode");
}

addButton.onclick = addTask;
editButton.onclick = editTask;