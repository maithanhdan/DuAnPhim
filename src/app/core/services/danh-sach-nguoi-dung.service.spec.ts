import { TestBed } from '@angular/core/testing';

import { DanhSachNguoiDungService } from './danh-sach-nguoi-dung.service';

describe('DanhSachNguoiDungService', () => {
  let service: DanhSachNguoiDungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DanhSachNguoiDungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
