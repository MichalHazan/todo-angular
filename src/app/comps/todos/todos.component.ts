import { Component, NgModule, OnInit } from '@angular/core';
import Todo from 'src/app/models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [
    {
      content: "firt",
      completed: false
    },
    {
      content: "sec",
      completed: true
    },
  ]
  inputTodo: string = "";
  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) {
        v.completed = !v.completed
      }
      return v;
    })
  }
  delTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id)
  }
  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
    this.inputTodo = ""
  }


  constructor() { }

  ngOnInit(): void {
  }

}
