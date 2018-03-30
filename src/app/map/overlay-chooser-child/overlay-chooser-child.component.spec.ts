import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayChooserChildComponent } from './overlay-chooser-child.component';

describe('OverlayChooserChildComponent', () => {
  let component: OverlayChooserChildComponent;
  let fixture: ComponentFixture<OverlayChooserChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayChooserChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayChooserChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
