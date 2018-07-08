import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MijnGroepenComponent } from './mijn-groepen.component';

describe('MijnGroepenComponent', () => {
  let component: MijnGroepenComponent;
  let fixture: ComponentFixture<MijnGroepenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MijnGroepenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MijnGroepenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
