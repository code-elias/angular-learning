import { Component, computed, Signal, signal } from '@angular/core'
import { MOCK_USERS } from '../../mock/users'

@Component({
  selector: 'app-sb-user-signal',
  imports: [],
  templateUrl: './sb-user-signal.component.html',
  styleUrl: './sb-user-signal.component.scss'
})
export class SbUserSignalComponent {
  signalUser = signal(MOCK_USERS[getRandIdx()])
  call = computed(() => `Call ${this.signalUser().name}`)

  onCall() {
    this.getRandomUser()
  }

  getRandomUser() {
    this.signalUser.set(MOCK_USERS[getRandIdx()])
  }
}

function getRandIdx() {
  return Math.floor(Math.random() * MOCK_USERS.length)
}
