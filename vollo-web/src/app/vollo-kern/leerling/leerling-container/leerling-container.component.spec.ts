import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerlingContainerComponent } from './leerling-container.component';

describe('LeerlingContainerComponent', () => {
  let component: LeerlingContainerComponent;
  let fixture: ComponentFixture<LeerlingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeerlingContainerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerlingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
