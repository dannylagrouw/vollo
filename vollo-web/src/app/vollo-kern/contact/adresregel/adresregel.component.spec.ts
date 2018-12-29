import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresregelComponent } from './adresregel.component';

describe('AdresregelComponent', () => {
  let component: AdresregelComponent;
  let fixture: ComponentFixture<AdresregelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdresregelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresregelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
