import { User } from '@/models/User'
import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-user-tasks',
  imports: [CommonModule],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.scss'
})
export class UserTasksComponent {
  @Input() user?: User
}
