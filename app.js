function onReady() {
    var toDos = [];
    var addToDoForm = document.getElementById('addToDoForm');


    function createNewToDo() {
        var newToDoText = document.getElementById('newToDoText');
        toDos.push({
            title: newToDoText.value,
            complete: false
        });

        newToDoText.value = '';
        renderTheUI(toDos);
    }

    function renderTheUI(toDos) {
        var toDoList = document.getElementById('toDoList');
        toDoList.innerHTML = '';
        toDos.forEach(function(toDo) {
            var newLi = document.createElement('li');
            var checkbox = document.createElement('input');
            var deleteButton = document.createElement('button');
            checkbox.type = "checkbox";
            deleteButton.type = "button";
            deleteButton.innerHTML = "Remove";
            newLi.innerHTML = toDo.title;
            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);
            newLi.appendChild(deleteButton);
            deleteButton.onclick = function(){
              DeleteToDo(this);
          }
      });
  }

      function DeleteToDo(toDo) {
          toDos.splice(toDo,1);
          renderTheUI(toDos);
      }

      addToDoForm.addEventListener('submit', function(event) {
            event.preventDefault();
            createNewToDo();
        });
}

window.onload = function() {
    onReady();
};
