import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageShowerComponent } from './image-shower.component';

describe('ImageShowerComponent', () => {
  let component: ImageShowerComponent;
  let fixture: ComponentFixture<ImageShowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageShowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
