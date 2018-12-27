import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerlingHistorieComponent } from './leerling-historie.component';

describe('LeerlingHistorieComponent', () => {
  let component: LeerlingHistorieComponent;
  let fixture: ComponentFixture<LeerlingHistorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeerlingHistorieComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerlingHistorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
