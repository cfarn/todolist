let addButton = document.getElementById("addButton")
let toDoLink = document.getElementById("todoLink")
let doingLink = document.getElementById("doingLink")
let doneLink = document.getElementById("doneLink")
let allLink = document.getElementById("allLink")

const tasks = []



// on ajoute une tâche
const onTaskSubmit = (e) =>{
    e.preventDefault()
    let input = document.getElementById("task-push").value
    
    const taskInfos = {
        value: input,
        status: "to do",
        id: Date.now(),
    }

    tasks.push(taskInfos)
    
    console.log(tasks)

       let taskContainer = document.getElementById("task")
       taskContainer.innerHTML = ""
       tasks.forEach (element => {
       taskContainer.innerHTML +=
        ` <div id="task-${element.id}">
        <div id="checkbox-${element.id}"></div>
            <input type="text" id="task-creation-${element.id}" name="creation" value="${element.value}">
        <div id="img-modify-carbage">
            <img id ="modify-${element.id}" src="./img/edit.png" alt="modify" onClick="onModify('task-${element.id}')"/>
            <img id = "delete-${element.id}" src="./img/trash.png" alt="delete" onClick="onDelete('task-${element.id}')" />
        </div>
        <div id="update">
            <div id="title-status-${element.id}">
                <img src="./img/edit.png" alt="modify" />
                <p>Status update</p>
            </div>
            <form>
                <input type="text" id="modification-${element.id}" name="first-modification" value="${element.value}">
                <select name="status" id="status-select-${element.id}">
                    <option value="">Please update your status</option>
                    <option value="Todo">To Do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
                <input id="submit--${element.id}" type="submit" value="Modifier">
            </form>
        </div>  
    </div>
     `      
     
    })
}

console.log(onTaskSubmit)

addButton.addEventListener("click", onTaskSubmit)

let onModify = (id) => {
    console.log(id)
}

// filtrer les taches 

// toDoLink.addEventListener("click", event => {
//     const filterToDo = tasks.filter()
// })
// 


//  delete 

let onDelete = (id) => {
    console.log(task-id)
}

// toDoLink.addEventListener("click", event => {
//     task.remove()
// })
