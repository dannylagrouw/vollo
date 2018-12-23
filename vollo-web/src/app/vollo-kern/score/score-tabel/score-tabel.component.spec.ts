import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreTabelComponent } from './score-tabel.component';

describe('ScoreTabelComponent', () => {
  let component: ScoreTabelComponent;
  let fixture: ComponentFixture<ScoreTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreTabelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
