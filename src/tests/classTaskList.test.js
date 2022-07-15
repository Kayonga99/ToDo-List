import TaskList from '../modules/classTaskList';

describe('add and remove', () => {
  window.localStorage = Storage.prototype;
  test('addTask', () => {
    const todoList = new TaskList();
    todoList.addTask('Test');
    expect(todoList.list).toHaveLength(1);

    const storage = JSON.parse(localStorage.getItem('todo-list'));
    expect(storage).not.toBe(null);
    expect(localStorage).toHaveLength(1);
  });

  test('removeTask', () => {
    const removeTask = new TaskList();

    removeTask.addTask('test');
    removeTask.addTask('test');
    removeTask.deleteTask(1);
    expect(removeTask.list).toHaveLength(2);
    removeTask.refresh();
    expect(removeTask.list).toHaveLength(0);
  });
});
