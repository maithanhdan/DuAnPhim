import { TestBed } from '@angular/core/testing';

import { ThongTinLichChieuHeThongService } from './thong-tin-lich-chieu-he-thong.service';

describe('ThongTinLichChieuHeThongService', () => {
  let service: ThongTinLichChieuHeThongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThongTinLichChieuHeThongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
