import './index.css';
import addElem from './modules/addElement';
import TaskList from './modules/classTaskList';
import refreshList from './modules/refresh';

const taskList = new TaskList();

const mainContainer = document.querySelector('.todo-list-container');

mainContainer.innerHTML = `<div class="row">
<h1>Today's To Do</h1>
<i class="fa-solid fa-rotate fa-lg font-awesome-icon"></i>
</div>
<div>
<input placeholder="Add to your list...">
</div>`;

const addDataToDom = (tasks) => {
  tasks.forEach((e) => {
    let isChecked;
    let strikeThrough;
    if (e.completed === true) {
      isChecked = 'checked';
      strikeThrough = 'strike-through';
    }

    mainContainer.innerHTML += `<div class="row">
    <input class="checkbox" type="checkbox" ${isChecked}>
    <p class="${strikeThrough}">${e.description}</p>
    <i class="fa-solid fa-ellipsis-vertical fa-lg font-awesome-icon"></i>
    </div>`;
  });
  mainContainer.innerHTML += '<button class="button">Clear all completed</button>';
};

window.onload = () => { addDataToDom(taskList); };