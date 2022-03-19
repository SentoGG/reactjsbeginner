import React, { Component } from 'react'
import {connect} from 'react-redux'
class KetQuaTroChoi extends Component {
  render() {
      let {wintotal,gametotal,youchoose} = this.props;
    return (
      <div className='text-center container'>
          <div className='display-4'>
              You choose : <span className='text-danger'>
                  {youchoose ? 'Tài' : 'Xỉu'}
              </span>
          </div>
          <div className='display-4'>
              Total win : <span className='text-success'>{wintotal}</span>
          </div>
          <div className='display-4'>
              Total game : <span className='text-danger'>{gametotal}</span>
          </div>
          <div>
              <button className='btn btn-success p-3' style={{fontSize:25}}>
                  Play game
              </button>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
    let {youchoose, wintotal, gametotal} = rootReducer.gameXucXacReducer;
    return {
        youchoose : rootReducer.gameXucXacReducer.youchoose,
        wintotal : rootReducer.gameXucXacReducer.wintotal,
        gametotal 
    }
}


export default connect(mapStateToProps)(KetQuaTroChoi)
