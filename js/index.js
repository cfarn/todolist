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
                <b class="status-${element.status}">${element.status}</b>
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
                <div class="col-2 d-flex align-items-center">
                <b class="status-${element.status}">${element.status}</b>
              </div>
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
            `   <div class="update">
            <div class="form-modif">
              <input id="item-${index2}-input" type="text" class="form-control" value="${task.value}" autofocus />
            </div>
            <div class="status">
              <select id="item-${index2}-select" class="form-select" aria-label="Select status">
                <option ${task.status === 'to do' ? 'selected' : ''} value="to do">To do</option>
                <option ${task.status === 'doing' ? 'selected' : ''} value="doing">Doing</option>
                <option ${task.status === 'done' ? 'selected' : ''} value="done">Done</option>
              </select>
            </div>
            <div class="col-3 d-flex justify-content-end">
              <button type="button" class="btn btn-outline-danger me-3" onclick="display()">Annuler</button>
              <button type="button" class="btn btn-outline-success" onclick="modification(${index2})">Valider</button>
            </div>
          </div> 
  `
  
}

let modification = (index) => {
    let value = document.getElementById(`item-${index}-input`)
    let status = document.getElementById(`item-${index}-select`)
    tasks[index].value = value.value
    tasks[index].status = status.value
    display()

    console.log(tasks   )
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


let toDoTaskList = (status) => {
    let taskFilter = tasks.filter((task) => {
    return task.status === "to do"
})
display()
}


toDoLink.addEventListener("change", toDoTaskList)


 




