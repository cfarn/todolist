let priorityInput = document.getElementById("priorityInput")
let taskPush = document.getElementById("task-push")
let addButton = document.getElementById("addButton")
let toDoLink = document.getElementById("todoLink")
let doingLink = document.getElementById("doingLink")
let doneLink = document.getElementById("doneLink")
let allLink = document.getElementById("allLink")
let taskContainer = document.getElementById("task")
let taskNumber = 0
let addMsg = document.getElementById("addMsg")
let random = document.getElementById("randomLink")
let priority = document.getElementById("priorityInput")


let tasks = []


// on ajoute une tâche
const onTaskSubmit = (e) =>{
    e.preventDefault()
    let input = document.getElementById("task-push").value
    
    const taskInfos = {
        value: input,
        status: "to do",
        id: taskNumber,
        priority: priorityInput.value
    }

    tasks.push(taskInfos)   
    priorityInput.value = ""
    
    if(input.length < 1) {
        alert("Vous n'avez pas entré de tâche")
        // addMsg.textContent = "Vous n'avez pas entré de tâche"
    }else {
        taskContainer.innerHTML = ""
        tasks.forEach (element => {
            taskContainer.innerHTML +=
            `  <div id="task-${element.id}">
            <div id="tasks-general">
                <div id="task-global">
                    <div id="text-value">
                        <input type="text" class="text-value" id="task-creation-${element.id}" name="creation" value="${element.value}">
                    </div>
                    <div id="tasks-status">
                        <div id="priorityIn"> ${element.priority !== 0 ? element.priority : ''}</div>
                        <b class="status-${element.status}">${element.status}</b>
                    </div>
                    <div id="img-modify-carbage" class = "delete">
                        <img  src="./img/edit.png" alt="modify" onCLick="onModify(${element.id})"/>
                        <img src="./img/trash.png" alt="delete" onCLick="onDelete(${element.id})"/>
                    </div>     
                </div>
             </div>
            `      
        })
        taskNumber ++ 
        // reset input
        taskPush.value = "" 
    }
}

addButton.addEventListener("click", onTaskSubmit)

const display = (element => {
    taskContainer.innerHTML = ""
    tasks.forEach (element => {
        taskContainer.innerHTML +=
        `   <div id="task-${element.id}">
        <div id="tasks-general">
            <div id="task-global">
                <div id="text-value">
                    <input type="text" class="text-value" id="task-creation-${element.id}" name="creation" value="${element.value}">
                </div>
                <div id="tasks-status">
                    <div id="priorityIn"> ${element.priority !== 0 ? element.priority : ''}</div>
                    <b class="status-${element.status}">${element.status}</b>
                </div>
                <div id="img-modify-carbage" class = "delete">
                    <img  src="./img/edit.png" alt="modify" onCLick="onModify(${element.id})"/>
                    <img src="./img/trash.png" alt="delete" onCLick="onDelete(${element.id})"/>
                </div>     
            </div>
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
                    <div class="button-modification">
                        <button type="button" class="btn-cancel" onclick="display()">Annuler</button>
                        <button type="button" class="btn-success" onclick="modification(${index2})">Valider</button>
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

    console.log(tasks)
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

    const toDoFilter = tasks.filter((task) => {
        return task.status === status      
    })

    taskContainer.innerHTML = ""
    toDoFilter.forEach (element => {
        taskContainer.innerHTML +=
        `  <div id="task-${element.id}">
        <div id="tasks-general">
            <div id="task-global">
                <div id="text-value">
                    <input type="text" class="text-value" id="task-creation-${element.id}" name="creation" value="${element.value}">
                </div>
                <div id="tasks-status">
                    <div id="priorityIn"> ${element.priority !== 0 ? element.priority : ''}</div>
                    <b class="status-${element.status}">${element.status}</b>
                </div>
                <div id="img-modify-carbage" class = "delete">
                    <img  src="./img/edit.png" alt="modify" onCLick="onModify(${element.id})"/>
                    <img src="./img/trash.png" alt="delete" onCLick="onDelete(${element.id})"/>
                </div>     
            </div>
         </div>
        `      
    })
}

// random 

function randomTasks() {
    let randomTask = [
      "Travailler Javascript",
      "Manger",
      "Dormir",
      "Aller boire un verre",
      "Travailler React"
    ]
  
    let taskInfos = {
      value: randomTask[Math.floor(Math.random() * randomTask.length)],
      status: "to do",
      id: taskNumber,
      priority: ""
    }
  
    tasks.push(taskInfos)
    display()
  }

random.addEventListener("click", randomTasks)


// priority

const priorityFilter = () => {
    tasks.sort((a, b) => Number(b.priority) - Number(a.priority))
    display(tasks)
}

priority.addEventListener("click",priorityFilter)

 



