import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrShowerComponent } from './qr-shower.component';

describe('QrShowerComponent', () => {
  let component: QrShowerComponent;
  let fixture: ComponentFixture<QrShowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrShowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
