import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerlingOudersComponent } from './leerling-ouders.component';

describe('LeerlingOudersComponent', () => {
  let component: LeerlingOudersComponent;
  let fixture: ComponentFixture<LeerlingOudersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeerlingOudersComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerlingOudersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
