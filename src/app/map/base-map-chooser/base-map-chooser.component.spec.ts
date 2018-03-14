import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseMapChooserComponent } from './base-map-chooser.component';

describe('BaseMapChooserComponent', () => {
  let component: BaseMapChooserComponent;
  let fixture: ComponentFixture<BaseMapChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseMapChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseMapChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
