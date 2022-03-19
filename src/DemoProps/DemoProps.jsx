import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class DemoProps extends Component {
  render() {
    let productA = {
      masp: 1,
      tensanpham: "Samsung Galaxy A10s",
      gia: 1500,
      hinhanh: "https://picsum.photos/id/1/200/300",
    };

    let productB = {
      masp: 2,
      tensanpham: "Iphone 6",
      gia: 800,
      hinhanh: "https://picsum.photos/id/2/200/300",
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ChildComponent product={productA} />
          </div>
          <div className="col-4">
            <ChildComponent product={productA} />
          </div>
        </div>
      </div>
    );
  }
}
