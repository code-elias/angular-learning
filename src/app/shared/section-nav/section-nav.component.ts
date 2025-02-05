import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { MyTopicSections } from '@/mock/topicSections'

@Component({
  selector: 'app-section-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-nav.component.html',
  styleUrl: './section-nav.component.scss'
})
export class SectionNavComponent {
  sections = MyTopicSections
  currentSection = this.sections[0]

  idPath(sectionId: string) {
    return '/guide' + sectionId
  }
}
