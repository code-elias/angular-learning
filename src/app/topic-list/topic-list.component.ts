import { Component } from '@angular/core'
import { TopicComponent } from '../topic/topic.component'
import { MyTopics } from '../mock/topics'
import { Topic } from '../../models/Topic'

@Component({
  selector: 'app-topic-list',
  imports: [TopicComponent],
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.scss'
})
export class TopicListComponent {
  topics: Array<Topic> = MyTopics

  onTopicSelect(id: number) {
    console.log(MyTopics.find((topic) => (topic.id = id)))
  }
}
