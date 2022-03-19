import React, { Component } from 'react'
import { connect } from 'react-redux'
class XucXac extends Component {
  render() {
      console.log('this.props',this.props)
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-4'>
                <button style={{background:'none',border: 'none'}}>
                    <div style={{borderRadius:10}} className='bg-danger text-white display-4 p-5'>TÀI</div>
                </button>
            </div>
            <div className='col-4'>
                {this.props.mangXucXac.map((XucXac,index) => {
                    return <img key={index} width={50} height={50} src={XucXac.img} alt="..." />
                })}
            </div>
            <div className='col-4'>
                <button style={{background:'none',border: 'none'}}>
                    <div style={{borderRadius:10}} className='bg-danger text-white display-4 p-5'>XỈU</div>
                </button>
            </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (rootReducer) => {
   return {
       mangXucXac: rootReducer.gameXucXacReducer.mangXucXac
   }
}

export default connect(mapStateToProps) (XucXac)
//rcredux : tạo redux component