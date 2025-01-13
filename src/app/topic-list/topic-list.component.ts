import { Component } from '@angular/core'
import { TopicComponent } from '../topic/topic.component'

@Component({
  selector: 'app-topic-list',
  imports: [TopicComponent],
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.scss'
})
export class TopicListComponent {}
