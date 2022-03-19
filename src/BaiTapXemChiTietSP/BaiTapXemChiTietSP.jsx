import React, { Component } from "react";
import GioHang from "./GioHang";
import SanPham from "./SanPham";

export default class BaiTapXemChiTietSP extends Component {
  mangdienthoai = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  state = {
    sanPhamchitiet: {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    gioHang: [
      //   {maSP:1,tenSP:'Iphone',hinhAnh:'./img/meizuphone.jpg',giaBan:1000,soLuong:1}
    ],
  };

  tanggiamsoluong = (maSP, soLuong) => {
    let giohangUpdate = [...this.state.gioHang];
    let spTangGiam = giohangUpdate.find((sp) => sp.maSP === maSP);
    if (spTangGiam) {
      spTangGiam.soLuong += soLuong;
      if (spTangGiam.soLuong < 1) {
        if (window.confirm("Bạn có muốn xoá sản phẩm không ?")) {
          this.xoaGiohang(spTangGiam.maSP);
          return;
        }
        spTangGiam.soLuong -= soLuong;
      }
    }
    this.setState({
      gioHang: giohangUpdate,
    });

    
    // console.log('maSPClick',maSP);
    // console.log('maSPClick',soLuong);
  };

  tinhtongSoLuong = () => {
    // let tongSoLuong = 0;
    // for (let spGH of this.state.gioHang) {
    //   tongSoLuong += spGH.soLuong;
    // }
    // return tongSoLuong;
    return this.state.gioHang.reduce((soLuong,spGioHang,index) => {
      return soLuong+= spGioHang.soLuong
    },0);
  };


  xoaGiohang = (maSPclick) => {
    let giohangUpdate = [...this.state.gioHang];
    let index = giohangUpdate.findIndex((sp) => sp.maSP == maSPclick);
    if (index != -1) {
      giohangUpdate.splice(index, 1);
    }
    this.setState({
      gioHang: giohangUpdate,
    });
  };

  themGiohang = (sanPhamclick) => {
    console.log("sanPhamclick", sanPhamclick);
    //Mỗi lần click vào sản phẩm => tạo thuộc tính soluong cho sản phẩm đó
    let spGioHang = { ...sanPhamclick, soLuong: 1 };
    //Sao chép giỏ hàng để xử lý
    let giohangUpdate = [...this.state.gioHang];
    //Kiểm tra sản phẩm đó có trong giỏ hàng chưa
    let spGH = giohangUpdate.find((sp) => sp.maSP === spGioHang.maSP);
    if (spGH) {
      spGH.soLuong += 1;
    } else {
      giohangUpdate.push(spGioHang);
    }
    //setState giỏ hàng
    this.setState({
      gioHang: giohangUpdate,
    });
  };

  xemChiTiet = (sanPhamclick) => {
    console.log("sanPhamclick", sanPhamclick);
    this.setState({
      sanPhamchitiet: sanPhamclick,
    });
  };

  render() {
    let {
      maSP,
      tenSP,
      hinhAnh,
      giaBan,
      manHinh,
      ram,
      rom,
      cameraSau,
      cameraTruoc,
      heDieuHanh,
    } = this.state.sanPhamchitiet;
    return (
      <div>
        <div className="container">
          <div className="mt-5">
            <h3
              data-toggle="modal"
              data-target="#modelId"
              className="text-danger font-weight-bold text-right"
              style={{ cursor: "pointer" }}
            >
              Giỏ hàng({this.tinhtongSoLuong()})
            </h3>
            <GioHang
              tanggiamsoluong={this.tanggiamsoluong}
              gioHang={this.state.gioHang}
              xoaSP={this.xoaGiohang}
            />
          </div>
          <h3 className="text-center display-4">Danh sách sản phẩm</h3>
          <div className="row">
            {this.mangdienthoai.map((sanPham, index) => {
              return (
                <div className="col-4" key={index}>
                  <SanPham
                    sp={sanPham}
                    hamxemchitiet={this.xemChiTiet}
                    themGiohang={this.themGiohang}
                  />
                </div>
              );
            })}
            {/* <div className="col-4">
              <div className="card">
                <img src="https://i.pravatar.cc?u=1" alt="..." height={300} />
                <div className="card-body">
                  <p>Tên sản phẩm</p>
                  <p>Gía bán</p>
                  <button className="btn btn-success">Xem chi tiết</button>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img src="https://i.pravatar.cc?u=1" alt="..." height={300} />
                <div className="card-body">
                  <p>Tên sản phẩm</p>
                  <p>Gía bán</p>
                  <button className="btn btn-success">Xem chi tiết</button>
                </div>
              </div>
            </div> */}
          </div>
          <div className="row mt-2">
            <div className="col-4">
              <h3 className="text-center">{this.state.sanPhamchitiet.tenSP}</h3>
              <img
                height={450}
                src={this.state.sanPhamchitiet.hinhAnh}
                alt=""
                className="w-100"
              />
            </div>
            <div className="col-8">
              <h3 className="text-center">Thông số kỹ thuật</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Màn hình</th>
                    <th>{manHinh}</th>
                  </tr>
                  <tr>
                    <th>Hệ điều hành</th>
                    <th>{heDieuHanh}</th>
                  </tr>
                  <tr>
                    <th>Camera trước</th>
                    <th>{cameraTruoc}</th>
                  </tr>
                  <tr>
                    <th>Camera sau</th>
                    <th>{cameraSau}</th>
                  </tr>
                  <tr>
                    <th>RAM</th>
                    <th>{ram}</th>
                  </tr>
                  <tr>
                    <th>ROM</th>
                    <th>{rom}</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
