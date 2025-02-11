import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SandboxComponent } from './sandbox.component'
import { provideRouter } from '@angular/router'
import { provideHttpClient } from '@angular/common/http'

describe('SandboxComponent', () => {
  let component: SandboxComponent
  let fixture: ComponentFixture<SandboxComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SandboxComponent],
      providers: [provideRouter([]), provideHttpClient()]
    }).compileComponents()

    fixture = TestBed.createComponent(SandboxComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
