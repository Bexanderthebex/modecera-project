import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayChooserComponent } from './overlay-chooser.component';

describe('OverlayChooserComponent', () => {
  let component: OverlayChooserComponent;
  let fixture: ComponentFixture<OverlayChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
