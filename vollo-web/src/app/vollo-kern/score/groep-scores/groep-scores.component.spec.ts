import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroepScoresComponent } from './groep-scores.component';

describe('GroepScoresComponent', () => {
  let component: GroepScoresComponent;
  let fixture: ComponentFixture<GroepScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GroepScoresComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroepScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
