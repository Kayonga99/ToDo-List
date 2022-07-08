const storageName = 'taskList';

export default class TaskList {
  constructor() {
    this.data = [];
    this.id = 1;
    this.initUpdate();
  }
