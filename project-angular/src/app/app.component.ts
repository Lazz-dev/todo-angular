import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTask: string = '';
  tarefas: { name: string, completed: boolean }[] = [
    
   
  ];

  addTask() {
    if (this.newTask.trim()) {
      this.tarefas.push({ name: this.newTask, completed: false });
      this.newTask = ''; 
    }
  }

  toggleComplete(tarefa: { name: string, completed: boolean }) {
    tarefa.completed = !tarefa.completed;
  }
  
  deleteTask(tarefa: { name: string, completed: boolean }) {
    const index = this.tarefas.indexOf(tarefa);
    if (index > -1) {
      this.tarefas.splice(index, 1);
    }
  }
}