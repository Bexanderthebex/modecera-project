import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayChooserParentComponent } from './overlay-chooser-parent.component';

describe('OverlayChooserComponent', () => {
  let component: OverlayChooserParentComponent;
  let fixture: ComponentFixture<OverlayChooserParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayChooserParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayChooserParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
