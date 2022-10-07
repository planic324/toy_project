const taskInput = document.getElementById("new-task");
const addButton = document.getElementsByTagName("button")[0];
const incompleteTasksHoler = document.getElementById("incompleted-tasks");
const completeTasksHoler = document.getElementById("completed-tasks");

const createNewTaskElement = function(taskString) {
    let listItem = document.createElement("li");
    let checkBox = document.createElement("input");
    let label = document.createElement("label");
    let editInput = document.createElement("input");
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");
}
