function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // create a wrapper object
    let wrapper = document.createElement('div');

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input for the checkbox
    let checkbox = document.createElement('input');

    // create a new delete button for new li
    let deleteButton = document.createElement('button');

    deleteButton.onclick = function(){
  	this.parentNode.parentNode.innerHTML = '';
  }

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    deleteButton.type = 'button';
    deleteButton.innerHTML = 'X';

    // set the title
    newLi.textContent = title;
    toDoList.appendChild(wrapper);

    // attach it to the ul
    toDoList.appendChild(newLi);

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach delete button to the li
    newLi.appendChild(deleteButton);

    //empty the input
    newToDoText.value = '';
  });
}

window.onload = function() {
  onReady();
};
