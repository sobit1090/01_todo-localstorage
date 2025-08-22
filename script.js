document.addEventListener("DOMContentLoaded",()=>{
    const addTaskButton = document.getElementById("add-task-btn")
    const todoInput =document.getElementById("todo-input")
    const todoList =document.getElementById("todo-list")
   
   let tasks = JSON.parse(localStorage.getItem("tasks"))||[]
     tasks.forEach(task => renderTask(task));
    addTaskButton.addEventListener("click",function(){
        const textTask =todoInput.value.trim()
        if(textTask=="") return 
   
        const newTask={
           id:Date.now(),
           text : textTask,
           completed:false
        }
       tasks.push(newTask)
       saveTasks()
       renderTask(newTask)
       todoInput.value=""
       console.log(tasks)
    })

    function saveTasks(){
       localStorage.setItem("tasks",JSON.stringify(tasks))
    }
   
   function renderTask(task){
    const li = document.createElement("li")
    li.setAttribute("data-id",task.id)
    if(task.completed) li.classList.add("completed")
    li.innerHTML=`
    <span>${task.text}</span>
    <button>delete</button>
    `
    todoList.appendChild(li)
            
   
   li.addEventListener("click",function(e){
        if(e.target.tagName=='BUTTON') return 
         task.completed =! task.completed
         li.classList.toggle("completed")
         saveTasks();
   })
    li.querySelector("button").addEventListener("click",function(e){
       e.stopPropagation();
       tasks=tasks.filter((t)=>t.id!=task.id)
       li.remove()
       saveTasks()
    })
   
}
})