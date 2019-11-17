import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoteComponent } from './adote.component';

describe('AdoteComponent', () => {
  let component: AdoteComponent;
  let fixture: ComponentFixture<AdoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
