document.addEventListener('DOMContentLoaded', () =>{

    const taskInput = document.getElementById("new-task");
    const addButton = document.getElementsByTagName("button")[0]; // 첫번째 add 버튼
    const incompleteTasksHolder = document.getElementById("incomplete-tasks");
    const completedTasksHolder = document.getElementById("completed-tasks");


    const createNewTaskElement = function(taskString){
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

    // 새로운 task
    const addTask = function() {
        console.log("추가중")
        if(taskInput.value.length < 1){
            alert('텍스트를 입력해주세요')
            return
        } 
        let listItem = createNewTaskElement(taskInput.value);
        incompleteTasksHolder.appendChild(listItem);
        bindTaskEvents(listItem, taskCompleted);

        taskInput.value = "";
    }
    
    // 에디터 버튼
    const editTask = function() {
        console.log("수정중");
      
        let listItem = this.parentNode;
        let editInput = listItem.querySelector("input[type=text");
        let label = listItem.querySelector("label");
        let containsClass = listItem.classList.contains("editMode");
        
        if(containsClass) {
          label.innerText = editInput.value;
        } else {
          editInput.value = label.innerText;
        }
        
        listItem.classList.toggle("editMode");        
    }

    // 삭제 버튼
    const deleteTask = function() {
        console.log("삭제중");
        let listItem = this.parentNode;
        let ul = listItem.parentNode;
        
        ul.removeChild(listItem);
    }

    // 완료되는 경우
    const taskCompleted = function() {
        console.log("완료중");
        let listItem = this.parentNode;
        completedTasksHolder.appendChild(listItem);
        bindTaskEvents(listItem, taskIncomplete);
    }

    // 미완료
    const taskIncomplete = function() {
        console.log("미완료");
        let listItem = this.parentNode;
        incompleteTasksHolder.appendChild(listItem);
        bindTaskEvents(listItem, taskCompleted);
    }

    var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
        console.log("이벤트 동작 알림");
        var checkBox = taskListItem.querySelector("input[type=checkbox]");
        var editButton = taskListItem.querySelector("button.edit");
        var deleteButton = taskListItem.querySelector("button.delete");
        
        editButton.onclick = editTask;
        deleteButton.onclick = deleteTask;
        checkBox.onchange = checkBoxEventHandler;
    }
    
    // ajaxRequest 
    const ajaxRequest = function() {
        console.log("AJAX 반응");
    }

    // 이벤트 핸들러
    addButton.addEventListener("click", addTask);
    addButton.addEventListener("click", ajaxRequest);

    for(let i = 0; i < incompleteTasksHolder.children.length; i++) {
        bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
    }

    for(let i = 0; i < completedTasksHolder.children.length; i++) {
        bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
    }

})

