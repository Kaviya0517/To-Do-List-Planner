let plus = document.getElementById("plus");
let originalCard = document.querySelector(".card");
plus.onclick = function(){
let newCard = originalCard.cloneNode(true);
newCard.style.display = "block";
newCard.style.position = "fixed";
newCard.style.top = "50%";
newCard.style.left = "50%";
newCard.style.transform = "translate(-50%, -50%)";
document.body.appendChild(newCard);
let addButton = newCard.querySelector("#addTask");
let taskInput = newCard.querySelector("#taskInput");
let taskList = newCard.querySelector("#taskList");
let save = newCard.querySelector("#save");
addButton.onclick = function(){
let taskText = taskInput.value;
if(taskText === ""){
alert("Enter a task");
return;
}
let taskDiv = document.createElement("div");
taskDiv.className = "task";
taskDiv.innerHTML = `
<input type="checkbox" class="check">
<span>${taskText}</span>
<button class="edit">Edit</button>
<button class="delete">Delete</button>
`;
taskList.appendChild(taskDiv);
taskInput.value = "";
};
taskList.onclick = function(event){
if(event.target.classList.contains("delete")){
event.target.parentElement.remove();
}
if(event.target.classList.contains("check")){
event.target.nextElementSibling.classList.toggle("completed");
}
if(event.target.classList.contains("edit")){
let taskSpan = event.target.parentElement.querySelector("span");
let newTask = prompt("Edit task:", taskSpan.innerText);
if(newTask !== null && newTask !== ""){
taskSpan.innerText = newTask;
}
}
};
save.onclick = function(){
newCard.style.position = "relative";
newCard.style.top = "auto";
newCard.style.left = "auto";
newCard.style.transform = "none";
newCard.style.margin = "20px 0";
};
let deleteCard = newCard.querySelector(".deleteCard");
deleteCard.onclick = function(){
newCard.remove();
};
};