let addButton = document.getElementById("addButton")

const tasks = []

const taskInfos = {
    value: "",
    status: "to do",
}

// on ajoute une tâche
const onTaskSubmit = (e) =>{
    e.preventDefault()
    let x = document.getElementById("task-push").value
    let arrayX = tasks.push(x)
    console.log(tasks)

    // for(let i = 0; i <tasks.length; i++) {

    // }


    x = Object.values(taskInfos) 
    console.log(x)
    
    document.getElementById("1task").innerHTML = x;

    // const recupTasks = tasks.forEach((task) => {
    //     let firstModification = document.getElementById("first-modification.value")
    //     if(firstModification.value === "") {
            // firstModification.innerHTML += x

            // firstModification.innerHTML = `
            // <input type="text" id="first-modification" name="first-modification" value=${task}>
            // `

            // tasks = document.createElement("input")
            // firstModification.appendChild(tasks)

            // firstModification.setAttribute("input", x)

            // firstModification.innerHTML = tasks

            


            
    //     }
    // })


}

addButton.addEventListener("click", onTaskSubmit)








let modifyData = () => {
    
}

