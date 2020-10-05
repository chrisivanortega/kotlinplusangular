import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItijuanaComponent } from './itijuana.component';

describe('ItijuanaComponent', () => {
  let component: ItijuanaComponent;
  let fixture: ComponentFixture<ItijuanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItijuanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItijuanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
