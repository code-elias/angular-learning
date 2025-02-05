import { Component } from '@angular/core'
import { SectionNavComponent } from '@shared/section-nav/section-nav.component'
import { TopicListComponent } from '@shared/topic-list/topic-list.component'

@Component({
  selector: 'app-guide-to-angular',
  imports: [TopicListComponent, SectionNavComponent],
  templateUrl: './guide-to-angular.component.html',
  styleUrl: './guide-to-angular.component.scss'
})
export class GuideToAngularComponent {}
