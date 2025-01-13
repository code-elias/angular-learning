import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from './header/header/header.component'
import { TopicListComponent } from './topic-list/topic-list.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TopicListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-learning'
}
