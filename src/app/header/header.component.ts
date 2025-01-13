import { Component } from '@angular/core'
import { HeaderLinksComponent } from '../header-links/header-links.component'
import { HeaderTitleComponent } from '../header-title/header-title.component'

@Component({
  selector: 'app-header',
  imports: [HeaderLinksComponent, HeaderTitleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {}
