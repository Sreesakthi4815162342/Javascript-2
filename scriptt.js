document.getElementById("addTaskbtn").addEventListener("click",()=>{
    const textInput=document.getElementById("taskInput")
    const task=textInput.value.trim()

    if(task=="")
    {
        return alert("Enter a task");
    }

    const li=document.createElement("li")
    li.classList.add("list-group-item","shadow-sm")
    const span=document.createElement("span")
    span.innerText=task;
    li.appendChild(span)
    

    const completed=document.createElement("i")
    completed.classList.add("bi","bi-check-lg","fs-4","text-success","ms-auto")
    li.appendChild(completed)
    completed.addEventListener("click",()=>{
        span.classList.toggle("completed")
    })

    const deleteIcon=document.createElement("i")
    deleteIcon.classList.add("bi","bi-trash3","text-danger","fs-4")
    li.appendChild(deleteIcon)
    deleteIcon.addEventListener("click",()=>{
        li.remove()
    })
    document.getElementById("taskList").appendChild(li)
    textInput.value=""
})