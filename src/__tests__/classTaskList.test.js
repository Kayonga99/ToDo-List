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
    expect(todoList.list).toBe(undefined);
// console.log(todoList);
    const storage = JSON.parse(localStorage.getItem('storageName'));
    expect(storage).toBe(null);
    expect(localStorage).toHaveLength(1);
  });

  test('remove', () => {});
});
