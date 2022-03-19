let stateGioHangDefault = [
    // {maSP:1,tenSP:'Iphone',giaBan:1000,soLuong:1,hinhAnh:'https://i.pravatar.cc?u=1'}
  ]

  export const gioHangReducer = (state = stateGioHangDefault,action) => {
    switch(action.type) {
      case 'THEM_GIO_HANG': {
        let gioHang = [...state];
        let spGH = {...action.sanPhamClick,soLuong:1};
        let sp = gioHang.find(spGH => spGH.maSP === action.sanPhamClick.maSP);
        if (sp) {
          sp.soLuong += 1;
        } else {
          gioHang.push(spGH);
        }
        //immutable : tính chất bất biến
        return [...gioHang];
      }
       case 'XOA_GIO_HANG' :{
         let gioHang = [...state];
        gioHang = gioHang.filter(sp => sp.maSP !== action.maSPxoa);
        return gioHang;
        }
        case 'TANG_GIAM_SO_LUONG' : {
          let gioHang = [...state];
          let sp = gioHang.find(sp => sp.maSP === action.maSP);
          if (sp) {
            sp.soLuong += action.soLuong;
            if (sp.soLuong < 1) {
              if (window.confirm("Do you want to delete ?")) {
                gioHang = gioHang.filter(sp => sp.maSP !== action.maSP)
                return gioHang;
            }
            sp.soLuong -= action.soLuong;
          }
          return gioHang;
        }
      }

      default : return state;
    }
  }