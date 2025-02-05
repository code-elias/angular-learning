import { Component, EventEmitter, input, Input, Output } from '@angular/core'
import { Topic } from '@/models/Topic'

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.scss'
})
export class TopicComponent {
  @Input({ required: true }) topic!: Topic
  // topic = input.required<Topic>() // With a read-only input signal

  @Output() select = new EventEmitter()

  onSelect() {
    this.select.emit(this.topic.id)
  }
}
