import { TestRefresherComponent } from '@/app/views/sandbox/test-refresher/test-refresher.component'
import { TodoListComponent } from '@/app/views/sandbox/todo-list/todo-list.component'
import { MyRoute } from '@/models/MyRoute'

export const MySubroutes = [
  new MyRoute('Test Refresher', 'sandbox/testing', TestRefresherComponent),
  new MyRoute('Easy Task', 'sandbox/todolist', TodoListComponent)
]
