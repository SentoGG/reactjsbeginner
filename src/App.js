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

function App() {
  return (
    <div className="App">
      <DataBinding/>
      <DataBindingFunc/>
      <HandleEvent/>
    </div>
  );
}

export default App;
