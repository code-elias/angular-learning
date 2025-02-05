import { GuideToAngularComponent } from '@views/guide-to-angular/guide-to-angular.component'
import { SandboxComponent } from '@views/sandbox/sandbox.component'

import { MyRoute } from '@/models/MyRoute'

export const MyRoutes: Array<MyRoute> = [
  new MyRoute('Coding Sandbox', 'sandbox', SandboxComponent),
  new MyRoute('Guide to Angular', 'guide', GuideToAngularComponent)
]
