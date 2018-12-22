import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreGrafiekComponent } from './score-grafiek.component';

describe('ScoreGrafiekComponent', () => {
  let component: ScoreGrafiekComponent;
  let fixture: ComponentFixture<ScoreGrafiekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreGrafiekComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreGrafiekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
