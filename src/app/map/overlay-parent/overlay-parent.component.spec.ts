import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayParentComponent } from './overlay-parent.component';

describe('OverlayParentComponent', () => {
  let component: OverlayParentComponent;
  let fixture: ComponentFixture<OverlayParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
