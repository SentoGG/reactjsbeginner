import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
import StyleGame from './resource/Styles/GameXucXac.module.css'
export default class GameXucXac extends Component {
  render() {
    return (
      <div className={`${StyleGame['bgGame']} pt-5`}>
          <h3 className='display-4 text-center'>Bài tập game xúc xắc</h3>
          <XucXac/>
          <KetQuaTroChoi/>
      </div>
    )
  }
}
