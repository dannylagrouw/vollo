import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailregelComponent } from './emailregel.component';

describe('EmailregelComponent', () => {
  let component: EmailregelComponent;
  let fixture: ComponentFixture<EmailregelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmailregelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailregelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
