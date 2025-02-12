import { environment } from '@/environments/environment'
import { User } from '@/models/User'
import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { Observable, shareReplay, Subscription } from 'rxjs'
import { UsersListComponent } from './users-list/users-list.component'
import { UserTasksComponent } from './user-tasks/user-tasks.component'

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, UsersListComponent, UserTasksComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  users$: Observable<User[]>
  selectedUser?: User
  usersData: User[] = []
  private usersSubscription?: Subscription

  //#region Lifecycle
  constructor(private http: HttpClient) {
    this.users$ = this.http.get<User[]>(environment.apiUrl + '/users').pipe(shareReplay(1))
  }

  ngOnInit() {
    this.usersSubscription = this.users$.subscribe((users) => {
      this.usersData = users
      this.selectedUser = users[0]
    })
  }

  ngOnDestroy() {
    this.usersSubscription?.unsubscribe()
  }
  //#endregion Lifecycle

  //#region Functions
  onSelectUser(selectedId: number) {
    this.selectedUser = this.usersData.find((user) => user.userId === selectedId)
  }
  //#endregion Functions
}
