import { Routes } from '@angular/router'
import { SandboxComponent } from '@views/sandbox/sandbox.component'
import { HomeComponent } from '@views/home/home.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app-sandbox', component: SandboxComponent }
]
