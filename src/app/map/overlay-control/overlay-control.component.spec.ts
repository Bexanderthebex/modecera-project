import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayControlComponent } from './overlay-control.component';

describe('OverlayControlComponent', () => {
  let component: OverlayControlComponent;
  let fixture: ComponentFixture<OverlayControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
