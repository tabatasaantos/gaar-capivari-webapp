import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AOngComponent } from './a-ong.component';

describe('AOngComponent', () => {
  let component: AOngComponent;
  let fixture: ComponentFixture<AOngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AOngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AOngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
