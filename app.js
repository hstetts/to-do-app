function onReady(){
var toDos = [];
var addToDoForm = document.getElementById('addToDoForm');


function createNewToDo() {
  var newToDoText = document.getElementByID('newToDoText');
  toDos.push({
    title: newToDoText.value,
    complete: false
  });
  newToDoText.value = '';
}

function renderTheUI(toDos) {
var toDoList = document.getElementByID('toDoList');

toDoList.innerHTML = '';

toDos.forEach(function(toDo) {
  var newLi = document.createElement('li');
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";

  newLi.innerHTML = toDo.title;

  toDoList.appendChild(newLi);
  newLi.appendChild(checkbox);
});

addToDoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  createNewToDo();
});

renderTheUI(todos);
}

window.onload = function() {
  onReady();
};
