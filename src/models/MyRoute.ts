import { Type } from '@angular/core'
import { Route } from '@angular/router'

export class MyRoute implements Route {
  title: string
  path: string
  component?: Type<any> | undefined

  constructor(title: string, path: string)
  constructor(title: string, path: string, component: Type<any>)
  constructor(title: string, path: string, component?: Type<any>) {
    this.title = title
    this.path = path
    this.component = component
  }
}
