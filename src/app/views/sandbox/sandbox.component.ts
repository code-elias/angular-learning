import { Component } from '@angular/core'
import { User } from '@/models/User'
import { SbUserSignalComponent } from './sb-user-signal/sb-user-signal.component'
import { HttpClient } from '@angular/common/http'
import { Client } from '@/models/Client'
import { Observable } from 'rxjs'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-sandbox',
  imports: [SbUserSignalComponent, CommonModule],
  templateUrl: './sandbox.component.html',
  styleUrl: './sandbox.component.scss'
})
export class SandboxComponent {
  user: User = new User('Alice', 'Guerrero', 28, ['Go to gym', 'Act cool', 'Go to work'])
  clients?: Observable<Client[]>

  constructor(private http: HttpClient) {}

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

  onLoadClients() {
    const dataUrl = '../../../mock/clients.json'
    this.clients = this.http.get<Client[]>(dataUrl)
  }
}
