import React, { Component } from "react";

export default class DataBinding extends Component {
  //thuộc tính
  product = {
    id: 1,
    name: "Iphone",
    price: 1000,
    img: "https://i.pravatar.cc/200",
  };

  renderproduct = () => {
    return (
      <div className="card w-25">
        <img src="{this.product.img}" alt="..." />
        <div className="card-body">
          <p>{this.product.name}</p>
          <p>{this.product.price}</p>
        </div>
      </div>
    );
  };

  render() {
    //biến khai báo
    let title = "Cybersoft";

    return (
      <div className="container">
        <div>DataBinding</div>
        <hr />
        <p id="txt">{title}</p>
        <hr />
        <div>{this.renderproduct()}</div>
      </div>
    );
  }
}
