export class MovieRegister {
  maPhim: string;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: string;
  danhGia: number;

  constructor(
    maPhim?: string,
    tenPhim?: string,
    biDanh?: string,
    trailer?: string,
    hinhAnh?: string,
    moTa?: string,
    maNhom?: string,
    ngayKhoiChieu?: string,
    danhGia?: number
  ) {
    this.maPhim = maPhim;
    this.tenPhim = tenPhim;
    this.biDanh = biDanh;
    this.trailer = trailer;
    this.hinhAnh = hinhAnh;
    this.moTa = moTa;
    this.maNhom = maNhom;
    this.ngayKhoiChieu = ngayKhoiChieu;
    this.danhGia = danhGia
  }
}
