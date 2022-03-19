import React, { Component } from "react";
//kết nối redux
import { connect } from "react-redux";
class GioHangRedux extends Component {
  render() {
    console.log("props", this.props);
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Gía bán</th>
            <th>Số lượng</th>
            <th>Tổng tiền</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {this.props.gioHang.map((spGH, index) => {
            return (
              <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td>
                  <img src={spGH.hinhAnh} alt="..." width={50} />
                </td>
                <td>{spGH.giaBan}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => {
                        this.props.tanggiamSoLuong(spGH.maSP,1)
                  }}>+</button>
                   {spGH.soLuong} 
                  <button className="btn btn-primary ml-2" onClick={() => {
                        this.props.tanggiamSoLuong(spGH.maSP,-1)
                  }}>-</button>
                  </td>
                <td> {spGH.giaBan * spGH.soLuong}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => {
                    this.props.xoaGioHang(spGH.maSP)
                  }}>Xoá</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

//Định nghĩa hàm để lấy dữ liệu từ redux về component này
const mapStateToProps = (rootReducer) => {
  //rootReducer: state tổng của ứng dụng

  //hàm tạo 1 props cho component ở lệnh return
  return {
    gioHang: rootReducer.gioHangReducer,
    number: rootReducer.numberReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang : (maSPxoa) => {
      if (window.confirm('Do you want to delete ?')) {
        const action = {
          type: 'XOA_GIO_HANG',
          maSPxoa
        };
        dispatch(action);
      }
    },
    tanggiamSoLuong: (maSP,soLuong) => {
      const action = {
        type : 'TANG_GIAM_SO_LUONG',
        maSP, soLuong
      };
      dispatch(action);
    }
  }
}

//Khi connect đc gọi sẽ trả về 1 component đã đc kết nối với redux store, và export default component ra luôn.
export default connect(mapStateToProps,mapDispatchToProps)(GioHangRedux);
