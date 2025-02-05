import { MyRoute } from '@/models/MyRoute'
import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { MyRoutes } from '@/data/MyRoutes'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-header-links',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header-links.component.html',
  styleUrl: './header-links.component.scss'
})
export class HeaderLinksComponent {
  myRoutes: Array<MyRoute> = MyRoutes
}
