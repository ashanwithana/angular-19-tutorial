import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  imports: [FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css',
})
export class ToDoListComponent {
  task = ' ';
  taskList: { id: number; name: string }[] = [];

  addTask() {
    this.taskList.push({ id: this.taskList.length + 1, name: this.task });
    this.task = '';
  }
  deleteTask(id: number) {
    this.taskList = this.taskList.filter((item) => item.id != id);
  }
}
