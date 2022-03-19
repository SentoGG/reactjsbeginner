import React, { Component } from 'react'

export default class SanPham extends Component {
  render() {
      let {sp} = this.props;
    return (
        <div className="card">
        <img src={sp.hinhAnh} alt="..." height={300} />
        <div className="card-body bg-dark text-white">
          <p>{sp.tenSP}</p>
          <p>{sp.giaBan}</p>
          <button className="btn btn-success" onClick={() => {
            // this.xemChiTiet(sanPham);
            this.props.hamxemchitiet(sp);
          }}>Xem chi tiết</button>
          <button className='btn btn-danger ml-2' onClick={() => {
              this.props.themGiohang(sp);
          }}>Thêm giỏ hàng</button>
        </div>
      </div>
    )
  }
}
