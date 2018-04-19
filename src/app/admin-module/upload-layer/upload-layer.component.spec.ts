import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLayerComponent } from './upload-layer.component';

describe('UploadLayerComponent', () => {
  let component: UploadLayerComponent;
  let fixture: ComponentFixture<UploadLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
