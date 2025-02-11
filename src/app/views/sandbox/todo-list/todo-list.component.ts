import { environment } from '@/environments/environment'
import { User } from '@/models/User'
import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  users?: Observable<User[]>

  constructor(private http: HttpClient) {
    this.users = this.http.get<User[]>(environment.apiUrl + '/users')

    this.users.subscribe((users) => {
      console.log(users)
    })
  }
}
