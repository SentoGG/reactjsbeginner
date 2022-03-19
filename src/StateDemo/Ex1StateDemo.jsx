import React, { Component } from 'react'
import Ex3ChooseCar from './Ex3ChooseCar';

export default class Ex1StateDemo extends Component {
    state = {
        fontSize : 75,
        fontColor : 'black'
    }

  render() {
    return (
      <div className='container'>
          <h3>Ex 1 : Tăng giảm font</h3>
        <p style={{fontSize: this.state.fontSize +'px'}} className='p-2 bg-dark text-white'>Context</p>
        <button className='btn btn-outline-primary' onClick={() => {
            let newFontsize = this.state.fontSize + 5;
            this.setState({
                fontSize:newFontsize
            })
        }}>+</button>
        <button className='btn btn-outline-primary ml-2' onClick={() => {
            let newFontsize = this.state.fontSize - 5;
            this.setState({
                fontSize:newFontsize
            })
        }}>-</button>
        <hr />
        <h3>Ex 2 : Thay đổi màu sắc</h3>
        <h3 className='fa fa-home' style={{fontSize:this.state.fontSize , color:this.state.fontColor}}></h3>
        <br />
        <button className='btn btn-danger' onClick={() => {
           this.setState({
               fontColor : 'red'
           })
        }}>Red</button>
        <button className='btn btn-success ml-2' onClick={() => {
           this.setState({
               fontColor : 'green'
           })
        }}>Green</button>
        <button className='btn btn-primary ml-2' onClick={() => {
           this.setState({
               fontColor : 'blue'
           })
        }}>Blue</button>
        <hr />
        <h3>Bài tập 3 : Chọn màu xe</h3>
        <Ex3ChooseCar/>
      </div>
    )
  }
}
