import { Client } from '@/models/Client'
import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-test-refresher',
  imports: [CommonModule],
  templateUrl: './test-refresher.component.html',
  styleUrl: './test-refresher.component.scss'
})
export class TestRefresherComponent {
  myText: string = 'A random text'
  clients?: Observable<Client[]>
  constructor(private http: HttpClient) {}

  onLoadClients() {
    const dataUrl = '../../../mock/clients.json'
    this.clients = this.http.get<Client[]>(dataUrl)
  }
}
