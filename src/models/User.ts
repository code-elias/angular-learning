export class User {
  userId: number
  firstname: string
  lastname: string
  age: number
  tasks: Array<string>

  constructor(
    userId: number,
    firstname: string,
    lastname: string,
    age: number,
    tasks: Array<string> = []
  ) {
    this.userId = userId
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
    this.tasks = tasks
  }

  get name() {
    return `${this.firstname} ${this.lastname}`
  }
}
