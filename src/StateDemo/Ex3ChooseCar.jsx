import React, { Component } from "react";

export default class extends Component {
  state = {
    carColor: "./img/black-car.jpg",
  };

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <img className="w-100" src={this.state.carColor} alt="..." />
        </div>

        <div className="col-6">
          <div className="row">
            <div className="col-3">
              <button
                className="btn btn-dark"
                onClick={() => {
                  this.setState({
                    carColor: "./img/black-car.jpg",
                  });
                }}
              >
                Black
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn btn-danger"
                onClick={() => {
                  this.setState({
                    carColor: "./img/red-car.jpg",
                  });
                }}
              >
                Red
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn btn"
                onClick={() => {
                  this.setState({
                    carColor: "./img/silver-car.jpg",
                  });
                }}
              >
                Silver
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn btn"
                onClick={() => {
                  this.setState({
                    carColor: "./img/steel-car.jpg",
                  });
                }}
              >
                Steel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
