import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotitieNiveauIconComponent } from './notitie-niveau-icon.component';

describe('NotitieNiveauIconComponent', () => {
  let component: NotitieNiveauIconComponent;
  let fixture: ComponentFixture<NotitieNiveauIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotitieNiveauIconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotitieNiveauIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
