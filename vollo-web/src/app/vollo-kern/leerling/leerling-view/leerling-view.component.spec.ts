import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerlingViewComponent } from './leerling-view.component';

describe('LeerlingViewComponent', () => {
  let component: LeerlingViewComponent;
  let fixture: ComponentFixture<LeerlingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeerlingViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerlingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
