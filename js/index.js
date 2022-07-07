let addButton = document.getElementById("addButton")
let toDoLink = document.getElementById("todoLink")
let doingLink = document.getElementById("doingLink")
let doneLink = document.getElementById("doneLink")
let allLink = document.getElementById("allLink")

const tasks = []


// on ajoute une tâche
const onTaskSubmit = (e) =>{
    e.preventDefault()
    let x = document.getElementById("task-push").value
    
    const taskInfos = {
        value: x,
        status: "to do",
    }

    let arrayX = tasks.push(taskInfos)
    
    console.log(tasks)

       let test = document.getElementById("task")
       let newTasks = test.innerHTML +=
        ` <div id="task-${Date.now}">
        <div id="checkbox-${Date.now}"></div>
        <form id="form-task-${Date.now}">
            <input type="text" id="input-task-${Date.now}" name="input-task" value="${x}">
        </form>
        <div id="img-modify-carbage">
            <img id ="modify-${Date.now}" src="./img/edit.png" alt="modify" />
            <img id = "delete-${Date.now}" src="./img/trash.png" alt="delete" />
        </div>
        <div id="update">
            <div id="title-status-${Date.now}">
                <img src="./img/edit.png" alt="modify" />
                <p>Status update</p>
            </div>
            <form>
                <input type="text" id="modification-${Date.now}" name="first-modification" value="">
                <select name="status" id="status-select-${Date.now}">
                    <option value="">Please update your status</option>
                    <option value="Todo">To Do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
                <input id="submit--${Date.now}" type="submit" value="Modifier">
            </form>
        </div>  
    </div>
        `
        
}


console.log(onTaskSubmit)

addButton.addEventListener("click", onTaskSubmit)

let modifyData = () => {
    
}

// filtrer les taches 

// toDoLink.addEventListener("click", event => {
//     const filterToDo = tasks.filter()
// })
// 


//  delete 

// toDoLink.addEventListener("click", event => {
//     task.remove()
// })
