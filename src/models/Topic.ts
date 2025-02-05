export class Topic {
  id: number
  name: string
  details?: string

  constructor(id: number, name: string)
  constructor(id: number, name: string, details: string)
  constructor(id: number, name: string, details?: string) {
    this.id = id
    this.name = name
    this.details = details
  }
}
