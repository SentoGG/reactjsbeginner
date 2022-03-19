import React, { Component } from "react";

export default class BaiTapThuKinh extends Component {
  dataGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./img/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./img/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./img/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./img/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./img/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./img/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./img/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  
  state = {
      glassesChoice: {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./img/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
      }
  }


  renderGlasseslist = () => {
    return this.dataGlasses.map((glasses, index) => {
      return (
        <img onClick={() => {
            this.changeGlasses(glasses)
        }}
          className="ml-2 p-2 border border-width-1"
          style={{ width: "120px", cursor: "pointer" }}
          key={index}
          src={glasses.url}
          alt="..."
        />
      );
    });
  };

  changeGlasses = (newGlasses) => {
      this.setState({
          glassesChoice:newGlasses
      })
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./img/background.jpg)",
          backgroundPosition: "center",
          width: "100wh",
          height: "100vh",
        }}
      >
        <div
          className="w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <h3
            className="text-center text-light p-5"
            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container">
            <div className="row mt-5">
              <div className="col-5">
                <div style={{ position: "relative" }}>
                  <img
                    style={{ width: "250px", position: "absolute" }}
                    src="./img/model.jpg"
                    alt="..."
                  />
                  <img
                    style={{
                      width: "150px",
                      position: "absolute",
                      top: "75px",
                      right: "23px",
                      opacity: "0.7",
                    }}
                    src={this.state.glassesChoice.url}
                    alt=""
                  />
                  <div
                    style={{
                      width: "250px",
                      left: "223px",
                      top: "200px",
                      backgroundColor: "rgba(255,127,0,.5)",
                      textAlign: "left",
                      height: "105px",
                    }}
                    className="position-relative font-weight-bold"
                  >
                    <p>{this.state.glassesChoice.name}</p>
                    <p style={{ fontSize: "13px" }}>{this.state.glassesChoice.desc}</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  style={{ width: "250px" }}
                  src="./img/model.jpg"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
            {this.renderGlasseslist()}
          </div>
        </div>
      </div>
    );
  }
}
