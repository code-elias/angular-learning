import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HeaderLinksComponent } from './header-links.component'
import { provideRouter } from '@angular/router'

describe('HeaderLinksComponent', () => {
  let component: HeaderLinksComponent
  let fixture: ComponentFixture<HeaderLinksComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLinksComponent],
      providers: [provideRouter([])]
    }).compileComponents()

    fixture = TestBed.createComponent(HeaderLinksComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
