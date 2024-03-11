import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCaptainComponent } from './change-captain.component';

describe('ChangeCaptainComponent', () => {
  let component: ChangeCaptainComponent;
  let fixture: ComponentFixture<ChangeCaptainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeCaptainComponent]
    });
    fixture = TestBed.createComponent(ChangeCaptainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
