import { User } from '@/models/User'
import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-users-list',
  imports: [CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  @Input() users: User[] = []
  @Output() select = new EventEmitter()

  onSelectUser(selectedId: number) {
    this.select.emit(selectedId)
  }
}
