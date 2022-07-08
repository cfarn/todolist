let taskPush = document.getElementById("task-push")
let addButton = document.getElementById("addButton")
let toDoLink = document.getElementById("todoLink")
let doingLink = document.getElementById("doingLink")
let doneLink = document.getElementById("doneLink")
let allLink = document.getElementById("allLink")
let taskContainer = document.getElementById("task")
let taskNumber = 0

const tasks = []


// on ajoute une tâche
const onTaskSubmit = (e) =>{
    e.preventDefault()
    let input = document.getElementById("task-push").value
    
    const taskInfos = {
        value: input,
        status: "to do",
        id: taskNumber,
    }

    tasks.push(taskInfos)
    
    // console.log(tasks)

       taskContainer.innerHTML = ""
       tasks.forEach (element => {
       taskContainer.innerHTML +=
        ` <div id="task-${element.id}">
        <div id="checkbox-${element.id}"></div>
            <input type="text" id="task-creation-${element.id}" name="creation" value="${element.value}">
        <div id="img-modify-carbage">
            <img id ="modify-${element.id}" src="./img/edit.png" alt="modify" onClick="onModify('task-${element.id}')"/>
            <img id = "delete-${element.id}" src="./img/trash.png" alt="delete" onClick="onDelete(${element.id})" />
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
    taskNumber ++
}

addButton.addEventListener("click", onTaskSubmit)

// console.log(onTaskSubmit)


// let onModify = (id) => {
//     console.log(id)
// }

// filtrer les taches 

// toDoLink.addEventListener("click", event => {
//     const filterToDo = tasks.filter()
// })
// 


//  delete 

let onDelete = (number) => {
    let index
    tasks.forEach((task,i) => {
        if(task.id === number){
            index = i
        }
    })
   
    tasks.splice(index, 1)
    console.log(tasks)

}

