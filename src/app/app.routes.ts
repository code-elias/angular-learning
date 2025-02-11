import { Routes } from '@angular/router'
import { HomeComponent } from '@views/home/home.component'
import { MyRoutes } from '@/data/MyRoutes'
import { MySubroutes } from '@/data/MySubroutes'

export const routes: Routes = [{ path: '', component: HomeComponent }, ...MyRoutes, ...MySubroutes]
