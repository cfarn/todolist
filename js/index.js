let addButton = document.getElementById("addButton")
let toDoLink = document.getElementById("todoLink")
let doingLink = document.getElementById("doingLink")
let doneLink = document.getElementById("doneLink")
let allLink = document.getElementById("allLink")

const tasks = []

const taskInfos = {
	value: "",
	status: "to do",
}

const onTaskSubmit = (e) =>{
    e.preventDefault()
    let x = document.getElementById("task-push").value
    let arrayX = tasks.push(x)
    console.log(tasks)
}


console.log(onTaskSubmit)

addButton.addEventListener("click", onTaskSubmit)

let modifyData = () => {
    
}

// filtrer les taches 

toDoLink.addEventListener("click", event => {
    const filterToDo = tasks.filter()
})


