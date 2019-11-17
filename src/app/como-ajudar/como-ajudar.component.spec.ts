import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoAjudarComponent } from './como-ajudar.component';

describe('ComoAjudarComponent', () => {
  let component: ComoAjudarComponent;
  let fixture: ComponentFixture<ComoAjudarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoAjudarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoAjudarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
