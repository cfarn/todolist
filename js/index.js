let addButton = document.getElementById("addButton")
let toDoLink = document.getElementById("todoLink")
let doingLink = document.getElementById("doingLink")
let doneLink = document.getElementById("doneLink")
let allLink = document.getElementById("allLink")

const tasks = []

// const taskInfos = {
//     value: "",
//     status: "to do",
// }

// on ajoute une tâche
const onTaskSubmit = (e) =>{
    e.preventDefault()
    let x = document.getElementById("task-push").value
    let arrayX = tasks.push(x)
    console.log(tasks)


       let test = document.getElementById("task")
       test.innerHTML +=
        ` <div id="task">
        <div class="checkbox"></div>
        <form class="form-task">
            <input type="text" id="input-task" name="input-task" value="${x}">
        </form>
        <div class="img-modify-carbage">
            <img src="./img/edit.png" alt="modify" />
            <img class = "delete-first" src="./img/trash.png" alt="delete" />
        </div>
        <div class="update">
            <div class="title-status">
                <img src="./img/edit.png" alt="modify" />
                <p>Status update</p>
            </div>
            <form>
                <input type="text" id="modification" name="first-modification" value="">
                <select name="status" id="status-select">
                    <option value="">Please update your status</option>
                    <option value="Todo">To Do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
                <input type="submit" value="Modifier">
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
