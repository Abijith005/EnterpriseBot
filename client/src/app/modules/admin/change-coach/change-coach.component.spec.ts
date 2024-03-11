import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCoachComponent } from './change-coach.component';

describe('ChangeCoachComponent', () => {
  let component: ChangeCoachComponent;
  let fixture: ComponentFixture<ChangeCoachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeCoachComponent]
    });
    fixture = TestBed.createComponent(ChangeCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
