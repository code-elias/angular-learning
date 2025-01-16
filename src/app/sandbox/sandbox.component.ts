import { Component } from '@angular/core'
import { User } from '../../models/User'
import { SbUserSignalComponent } from './sb-user-signal/sb-user-signal.component'

@Component({
  selector: 'app-sandbox',
  imports: [SbUserSignalComponent],
  templateUrl: './sandbox.component.html',
  styleUrl: './sandbox.component.scss'
})
export class SandboxComponent {
  user: User = new User('Alice', 'Guerrero', 28, ['Go to gym', 'Act cool', 'Go to work'])

  get greeting() {
    return `Hi ${this.user.name}!`
  }

  get message() {
    if (this.user.tasks.length > 0) {
      return `You have ${this.user.tasks.length} open tasks today.`
    } else {
      return 'You have no pending tasks.'
    }
  }

  get anyPendingTasks() {
    return this.user.tasks.length <= 0
  }

  onCompleteTask() {
    if (this.user.tasks.length > 0) {
      this.user.tasks.shift()
    }
  }
}
