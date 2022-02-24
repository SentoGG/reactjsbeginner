import React from 'react'

export default function DataBindingFunc() {
   const title = 'Cybersoft'

   const rendertitle = () => {
     return <p>bruh</p>
   }

  return (
    <div className='container'>
        <h3>{title}</h3>
        <p>{rendertitle()}</p>
        <hr />
    </div>
  )
}
