import { Routes } from '@angular/router'
import { SandboxComponent } from '@views/sandbox/sandbox.component'
import { HomeComponent } from '@views/home/home.component'
import { GuideToAngularComponent } from './views/guide-to-angular/guide-to-angular.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'guide', component: GuideToAngularComponent },
  { path: 'sandbox', component: SandboxComponent }
]
