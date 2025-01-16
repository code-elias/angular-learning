import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbUserSignalComponent } from './sb-user-signal.component';

describe('SbUserSignalComponent', () => {
  let component: SbUserSignalComponent;
  let fixture: ComponentFixture<SbUserSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SbUserSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbUserSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
