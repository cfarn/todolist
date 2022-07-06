let addButton = document.getElementById("addButton")

const tasks = []

const taskInfos = {
	value: "",
	status: "to do",
}

const onTaskSubmit = (e) =>{
    e.preventDefault()
    let x = document.getElementById("task-push").value

    console.log(onTaskSubmit)
}

addButton.addEventListener("click", onTaskSubmit)

let modifyData = () => {
    
}

