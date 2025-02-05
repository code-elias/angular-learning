import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideToAngularComponent } from './guide-to-angular.component';

describe('GuideToAngularComponent', () => {
  let component: GuideToAngularComponent;
  let fixture: ComponentFixture<GuideToAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuideToAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideToAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
