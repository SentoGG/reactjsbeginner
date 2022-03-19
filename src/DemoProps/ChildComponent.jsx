import React, { Component } from "react";

export default class ChildComponent extends Component {
  render() {
    // let { masp, tensanpham, gia, hinhanh } = this.props.product
    const {masp, tensanpham, hinhanh, gia} = this.props.product

    return (
      <div className="card">
        <img src={hinhanh} alt="..." /> 
        <div className="card-body">
          <p>Products'id : {masp}</p>
          <p>Products'name : {tensanpham}</p>
          <p>Products'price : {gia}</p>
          <p>Products'img : {hinhanh}</p>
         </div>
      </div>
    );
  }
}
