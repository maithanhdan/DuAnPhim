import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuatChieuComponent } from './xuat-chieu.component';

describe('XuatChieuComponent', () => {
  let component: XuatChieuComponent;
  let fixture: ComponentFixture<XuatChieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuatChieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuatChieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
