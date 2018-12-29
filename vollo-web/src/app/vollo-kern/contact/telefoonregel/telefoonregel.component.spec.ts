import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoonregelComponent } from './telefoonregel.component';

describe('TelefoonregelComponent', () => {
  let component: TelefoonregelComponent;
  let fixture: ComponentFixture<TelefoonregelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TelefoonregelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoonregelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
