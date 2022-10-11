const taskInput = document.getElementById("new-task");
const addButton = document.getElementsByTagName("button")[0];
const incompleteTasksHoler = document.getElementById("incomplete-tasks");
const completeTasksHoler = document.getElementById("completed-tasks");

const createNewTaskElement = function(taskString) {
    const listItem = document.createElement("li");
    const checkBox = document.createElement("input");
    const label = document.createElement("label");
    const editInput = document.createElement("input");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    checkBox.type = "checkbox";
    editInput.type = "text";
    
    editButton.innerText = "Edit";
    editButton.className = "edit"
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    label.innerText = "taskString";

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
}

const addTask = function() {
    console.log("Add task....");

    const listItem = createNewTaskElement(taskInput.value);
    incompleteTasksHoler.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    taskInput.value = "";
    
}

const editTask = function() {
    console.log("Edit task...")

    const listItem = this.parentNode;
    const editInput = listItem.querySelector("input[type=text");
    const label = listItem.querySelector("label");
    const containsClass = listItem.classList.contains("editMOde");

    if (containsClass){
        label.innerText = editInput.value;
    } else{
        editInput.value = label.innerText;
    }
    listItem.classList.toggle("editMode");
}