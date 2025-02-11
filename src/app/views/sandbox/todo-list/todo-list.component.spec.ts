import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TodoListComponent } from './todo-list.component'
import { provideHttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs'

describe('TodoListComponent', () => {
  let component: TodoListComponent
  let fixture: ComponentFixture<TodoListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListComponent],
      providers: [provideHttpClient()]
    }).compileComponents()

    fixture = TestBed.createComponent(TodoListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create ToDoList Component', () => {
    expect(component).toBeTruthy()
  })

  it('should have list of users', () => {
    const usersList = fixture.nativeElement.querySelector('ul#usersList')
    expect(usersList).toBeTruthy()
  })

  it('should load users', async () => {
    const users = await firstValueFrom(component.users!)
    expect(users.length).toBeGreaterThan(0)
  })

  it('should create list items', async () => {
    await firstValueFrom(component.users!)
    fixture.detectChanges()
    fixture.whenStable()

    const listItems = fixture.nativeElement.querySelectorAll('#usersList li')
    expect(listItems.length).toBeGreaterThan(0)
  })
})
