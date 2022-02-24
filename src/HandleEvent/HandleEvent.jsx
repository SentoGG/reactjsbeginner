import React, { Component } from "react";

export default class HandleEvent extends Component {
  

handleclick = () => {
    alert('hi');
}

showname = (name) => {
    alert('hello ' + name);
}


  render() {
    return <div className="container">
        <h3>HandleEvent</h3>
        <button onClick={this.handleclick}>Show message</button>
        <button onClick={ () => {
            alert('u idiot!')
        }}>Punch me!</button>
        <hr />
        <h3>Handle event</h3>
        <button onClick={this.showname.bind(this,'lol')}>show me</button>
        <button onClick={() => {
            this.showname('noice');
        }}>show again</button>
        </div>;
  }
}
