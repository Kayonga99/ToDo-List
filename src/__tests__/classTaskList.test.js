/**
 * @jest-environment jsdom
 */

import TaskList from '../modules/classTaskList';
// import Task from '../modules/classTask';
// const TaskList = require('./classTaskList')

describe('add and remove', () => {
  window.localStorage = Storage.prototype;
  test('Add task', () => {
    const todoList = new TaskList();
    todoList.addTask('Test');
    expect(todoList.list).toHaveLength(1);

    const storage = JSON.parse(localStorage.getItem('storageName'));
    expect(storage).not.toBe(null);
    expect(localStorage).toHaveLength(1);
  });

  test('remove', () => {});
});
