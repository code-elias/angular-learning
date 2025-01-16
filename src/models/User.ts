export class User {
  firstname: string
  lastname: string
  age: number
  tasks: Array<string>

  constructor(firstname: string, lastname: string, age: number, tasks: Array<string> = []) {
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
    this.tasks = tasks
  }

  get name() {
    return `${this.firstname} ${this.lastname}`
  }
}
