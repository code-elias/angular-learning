import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from '@shared/header/header/header.component'
import { TopicListComponent } from '@shared/topic-list/topic-list.component'
import { SandboxComponent } from '@views/sandbox/sandbox.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TopicListComponent, SandboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-learning'
}
