let taskPush = document.getElementById("task-push")
let addButton = document.getElementById("addButton")
let toDoLink = document.getElementById("todoLink")
let doingLink = document.getElementById("doingLink")
let doneLink = document.getElementById("doneLink")
let allLink = document.getElementById("allLink")
let taskContainer = document.getElementById("task")
let taskNumber = 0
let addMsg = document.getElementById("addMsg")


let tasks = []


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
        `   <div id="task-${element.id}">
                <div id="checkbox-${element.id}"></div>
                <input type="text" id="task-creation-${element.id}" name="creation" value="${element.value}">
                <div id="img-modify-carbage" class = "delete">
                        <img  src="./img/edit.png" alt="modify" onCLick="onModify(${element.id})"/>
                        <img src="./img/trash.png" alt="delete" onCLick="onDelete(${element.id})"/>
                </div>  
                
            </div>
        `      
    })
    taskNumber ++  
}

addButton.addEventListener("click", onTaskSubmit)


const display = (element => {
    taskContainer.innerHTML = ""
    tasks.forEach (element => {
        taskContainer.innerHTML +=
        `   <div id="task-${element.id}">
                <div id="checkbox-${element.id}"></div>
                <input type="text" id="task-creation-${element.id}" name="creation" value="${element.value}">
                <div id="img-modify-carbage" class = "delete">
                        <img  src="./img/edit.png" alt="modify" onCLick="onModify(${element.id})"/>
                        <img src="./img/trash.png" alt="delete" onCLick="onDelete(${element.id})"/>
                </div>  
        `      
    })
    taskNumber ++  
})
// Modification

let onModify = (index) =>{
    let taskModify = document.getElementById(`task-${index}`)

    let index2
    tasks.forEach((task,i) => {
        if(task.id === index){
            index2 = i
        }
    })

    let task = tasks[index2]
    
    taskModify.innerHTML =
            `   <div class="row justify-between py-2">
            <div class="col-5 d-flex align-items-center">
              <input id="item-${index}-input" type="text" class="form-control" value="${task.value}" autofocus />
            </div>
            <div class="col-2 d-flex align-items-center">
              <select id="item-${index}-select" class="form-select" aria-label="Select status">
                <option ${task.status === 'to do' ? 'selected' : ''} value="to do">To do</option>
                <option ${task.status === 'doing' ? 'selected' : ''} value="doing">Doing</option>
                <option ${task.status === 'done' ? 'selected' : ''} value="done">Done</option>
              </select>
            </div>
            <div class="col-2 d-flex align-items-center">
              <input id="item-${index}-priority" type="number" class="form-control" value="${task.priority}" min="0" max="5" />
            </div>
            <div class="col-3 d-flex justify-content-end">
              <button type="button" class="btn btn-outline-danger me-3" onclick="display()">Annuler</button>
              <button type="button" class="btn btn-outline-success" onclick="modification(${index})">Valider</button>
            </div>
          </div> 
  `

}

//  delete 

let onDelete = (number) => {
    let index
    tasks.forEach((task,i) => {
        if(task.id === number){
            index = i
        }
    })
   
    tasks.splice(index, 1)
    display()
    console.log(tasks)
}

// filtrer 

let toDoTaskList = (toDo) => {
    tasks.filter((task) => {
    return task.status === "to do"
})
}

toDoLink.addEventListener("click", toDoTaskList)

display(toDoTaskList)

// {/* <div id="update">
//                 <div id="title-status-${element.id}">
//                     <img src="./img/edit.png" alt="modify" />
//                     <p>Status update</p>
//                 </div>
//                 <form>
//                     <input type="text" id="modification-${element.id}" name="first-modification" value="${element.value}">
//                     <select name="status" id="status-select-${element.id}">
//                         <option value="">Please update your status</option>
//                         <option value="Todo">To Do</option>
//                         <option value="Doing">Doing</option>
//                         <option value="Done">Done</option>
//                     </select>
//                     <input id="submit--${element.id}" type="submit" value="Modifier">
//                 </form>
//             </div>   */}

// console.log(onTaskSubmit)


// let onModify = (id) => {
//     console.log(id)
// }

// filtrer les taches 

// toDoLink.addEventListener("click", event => {
//     const filterToDo = tasks.filter()
// })
// 




