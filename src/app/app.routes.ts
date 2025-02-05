import { Routes } from '@angular/router'
import { HomeComponent } from '@views/home/home.component'
import { MyRoutes } from '@/data/MyRoutes'

export const routes: Routes = [{ path: '', component: HomeComponent }, ...MyRoutes]
