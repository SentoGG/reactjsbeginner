import logo from "./logo.svg";
import "./App.css";
import HeaderClass from "./components/HeaderClass";
import HeaderFunc from "./components/HeaderFunc";
import HomeComponents from "./baitaplayout/HomeComponents";
import HeaderComponents from "./baitaplayout/HeaderComponents";
import NavigationComponents from "./baitaplayout/NavigationComponents";
import ContentComponents from "./baitaplayout/ContentComponents";
import FooterComponents from "./baitaplayout/FooterComponents";
import DataBinding from "./databinding/DataBinding";
import DataBindingFunc from "./databinding/DataBindingFunc";
import HandleEvent from "./HandleEvent/HandleEvent";
import Rendering_Condition from "./Rendering_Condition/Rendering_Condition";
import Ex1StateDemo from "./StateDemo/Ex1StateDemo";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import QuanLyDSPhim from "./RenderWithMap/QuanLyDSPhim";
import DemoProps from "./DemoProps/DemoProps";
import ChildComponent from "./DemoProps/ChildComponent";
import ShoesShop from "./ExShoeShops/ShoesShop";
import BaiTapXemChiTietSP from "./BaiTapXemChiTietSP/BaiTapXemChiTietSP";
import GioHang from "./BaiTapXemChiTietSP/GioHang";
import BaiTapGioHangRedux from "./DemoRedux/BaiTapGioHangRedux/BaiTapGioHangRedux";
import GameXucXac from "./DemoRedux/GameXucXacRedux/GameXucXac";
import BaiTapThuKinh from "./BaiTapThuKinh/BaiTapThuKinh";

function App() {
  return (
    <div className="App">
      {/* <DataBinding/>
      <DataBindingFunc/>
      <HandleEvent/>
      <Rendering_Condition/> 
      <Ex1StateDemo/> */}
      {/* <RenderWithMap/> */}
      {/* <QuanLyDSPhim/> */}
      {/* <DemoProps/> */}
      {/* <ShoesShop/> */}
      {/* <BaiTapXemChiTietSP/> */}
      {/* <BaiTapGioHangRedux/> */}
      {/* <GameXucXac/> */}
      <BaiTapThuKinh/>
    </div>
  );
}

export default App;
