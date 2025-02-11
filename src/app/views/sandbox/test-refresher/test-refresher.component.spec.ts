import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing'

import { TestRefresherComponent } from './test-refresher.component'
import { provideHttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs'

describe('TestRefresherComponent', () => {
  let component: TestRefresherComponent
  let fixture: ComponentFixture<TestRefresherComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestRefresherComponent],
      providers: [provideHttpClient()]
    }).compileComponents()

    fixture = TestBed.createComponent(TestRefresherComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Title should be Refresher on tesing', () => {
    let titleElement = fixture.nativeElement.querySelector('#refresher-title')
    expect(titleElement.textContent.trim()).toBe('Refresher on tesing')
  })

  it('Variable value should be A random text', () => {
    expect(component.myText).toEqual('A random text')
  })

  it('Button click should add clients', async () => {
    spyOn(component, 'onLoadClients').and.callThrough()
    const btn = fixture.nativeElement.querySelector('#loadClientsBtn')
    btn.click()

    const clients = await firstValueFrom(component.clients!)
    expect(clients.length).toBeGreaterThan(0)
  })
})
