import { Component } from '@angular/core'
import { HeaderLinksComponent } from '@shared/header/header-links/header-links.component'
import { HeaderTitleComponent } from '@shared/header/header-title/header-title.component'

@Component({
  selector: 'app-header',
  imports: [HeaderLinksComponent, HeaderTitleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {}
