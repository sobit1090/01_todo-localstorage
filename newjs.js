let addTaskButton=document.getElementById("add-task-btn")
let todoinput =document.getElementById("todo-input")
let todoList= document.getElementById("todo-list")
let tasks =[]

addTaskButton.addEventListener("click",()=>{
   const textTask= todoinput.value.trim()
         if(textTask==="") return 
let newtask= {
    id:Date.now(),
    task:textTask,
    completed:false
}
tasks.push(newtask)
todoinput=""
console.log(tasks);

})

function saveTask(){
localStorage.setItem(JSON.stringify(tasks))
}