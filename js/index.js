let addButton = document.getElementById("addButton")

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

addButton.addEventListener("click", onTaskSubmit)

let modifyData = () => {
    
}

