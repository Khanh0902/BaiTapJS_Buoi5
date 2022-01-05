// Quản Lý Tuyển Sinh

// Hàm lấy điểm khu vực
function khuVuc(khuVucEl) {
  var diemKhuVuc = 0;
  switch (khuVucEl) {
    case 0:
      diemKhuVuc = 0;
      break;
    case 1:
      diemKhuVuc = 1;
      break;
    case 2:
      diemKhuVuc = 2;
      break;
    case 0.5:
      diemKhuVuc = 0.5;
      break;
    default:
      break;
  }
  return diemKhuVuc;
}

// Hàm lấy điểm đối tượng
function doiTuong(doiTuongEl) {
  var diemDoiTuong = 0;
  switch (doiTuongEl) {
    case 0:
      diemDoiTuong = 0;
      break;
    case 1:
      diemDoiTuong = 1;
      break;
    case 2.5:
      diemDoiTuong = 2.5;
      break;
    case 1.5:
      diemDoiTuong = 1.5;
      break;
    default:
      break;
  }
  return diemDoiTuong;
}

function btnXetTuyen() {
  var diemChuanEl = document.getElementById("diemChuan").value * 1;
  var diemThiMotEl = document.getElementById("diemThiMot").value * 1;
  var diemThiHaiEl = document.getElementById("diemThiHai").value * 1;
  var diemThiBaEl = document.getElementById("diemThiBa").value * 1;
  var khuVucEl = document.getElementById("khuVuc").value * 1;
  var doiTuongEl = document.getElementById("doiTuong").value * 1;
  var tongDiem =
    khuVuc(khuVucEl) +
    doiTuong(doiTuongEl) +
    diemThiMotEl +
    diemThiBaEl +
    diemThiHaiEl;
  if (tongDiem >= diemChuanEl) {
    alert("Bạn Đã Trúng Tuyển");
    alert("Tổng Điểm Của Bạn Là: " + tongDiem);
  } else {
    alert("Bạn Không Trúng Tuyển");
    alert("Tổng Điểm Của Bạn Là: " + tongDiem);
  }
}

// TÍNH TIỀN ĐIỆN
function btnTinhTien() {
  var soDienEl = document.getElementById("soDien").value * 1;
  var tongTienDien = tinhTienDien(soDienEl);
  alert("Tiền Điện Của Bạn Là: " + tongTienDien + " " + "VND");
}

// Hàm tính tiền điện
function tinhTienDien(soDienEl) {
  var tongTienDien = 0;
  if (soDienEl <= 50) {
    tongTienDien = soDienEl * 500;
  } else if (soDienEl > 50 && soDienEl <= 100) {
    tongTienDien = 50 * 500 + (soDienEl - 50) * 650;
  } else if (soDienEl > 100 && soDienEl <= 200) {
    tongTienDien = 50 * 500 + 50 * 650 + (soDienEl - 100) * 850;
  } else if (soDienEl > 200 && soDienEl <= 350) {
    tongTienDien = 50 * 500 + 50 * 650 + (soDienEl - 200) * 1100 + 100 * 850;
  } else {
    tongTienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soDienEl - 350) * 1300;
  }
  return tongTienDien;
}

// TÍNH THUẾ THU NHẬP CÁ NHÂN

function btnTinh() {
  var tongThuNhapEl = document.getElementById("tongThuNhap").value * 1;
  var soNguoiEl = document.getElementById("soNguoi").value * 1;
  var thuNhapChiuThue = tongThuNhapEl - 4000000 - soNguoiEl * 1600000;
  var tongThuePhaiTra = thuePhaiTra(tongThuNhapEl, soNguoiEl, thuNhapChiuThue);
  // console.log(tongThuNhapEl, soNguoiEl, thuNhapChiuThue, tongThuePhaiTra);
  alert("Thuế Phải Trả Là: " + tongThuePhaiTra);
}

// Hàm tính thuế phải trả
function thuePhaiTra(tongThuNhapEl, soNguoiEl, thuNhapChiuThue) {
  var thuePhaiTra = 0;
  if (thuNhapChiuThue <= 60000000) {
    thuePhaiTra = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
    thuePhaiTra = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
    thuePhaiTra = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
    thuePhaiTra = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
    thuePhaiTra = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
    thuePhaiTra = thuNhapChiuThue * 0.3;
  } else {
    thuePhaiTra = thuNhapChiuThue * 0.35;
  }
  return thuePhaiTra;
}

// TÍNH TIỀN CAP

// Hàm hiển thị số kết nối khi chọn doanh nghiệp
function chonKhachHang() {
  var loaiKhachHang = document.getElementById("khachHang").value;
  if (loaiKhachHang == "nhaDan") {
    document.getElementById("soKetNoi").disabled = true;
  } else {
    document.getElementById("soKetNoi").disabled = false;
  }
}

function btnHoaDon() {
  var soKenhEl = document.getElementById("soKenh").value * 1;
  var soKetNoiEl = document.getElementById("soKetNoi").value * 1;
  var loaiKhachHang = document.getElementById("khachHang").value;
  var tongHoaDon = tinhHoaDon(soKenhEl, soKetNoiEl, loaiKhachHang);
  alert("Hóa Đơn Của Bạn Là: " + tongHoaDon + "$");
}

// Hàm Tính Hóa Đơn
function tinhHoaDon(soKenhEl, soKetNoiEl, loaiKhachHang) {
  var tongHoaDon = 0;
  switch (loaiKhachHang) {
    case "nhaDan": {
      tongHoaDon = 4.5 + 20.5 + 7.5 * soKenhEl;
      break;
    }
    case "doanhNghiep": {
      if (soKetNoiEl <= 10) {
        tongHoaDon = 15 + 75 + 50 * soKenhEl;
      } else {
        tongHoaDon = 15 + 75 + 50 * soKenhEl + (soKetNoiEl - 10) * 5;
      }
      break;
    }
    default:
      break;
  }
  return tongHoaDon;
}
