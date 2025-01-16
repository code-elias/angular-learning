import { Component } from '@angular/core'
import { MOCK_TOPICS } from '../mock/topics'

@Component({
  selector: 'app-topic',
  imports: [],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.scss'
})
export class TopicComponent {
  topic: any = MOCK_TOPICS[4]
}
