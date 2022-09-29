import React from 'react'

const Image = ({item}) => {
  return (
    <div>
        <div className="overlayContainer sm:w-10 sm:h-16">
  <img src={item.image} alt="Avatar" className="imageOverlay"/>
  <div className="overlay">
    <div className="textOverlay">{item.description}</div>
  </div>
</div>
    </div>
  )
}

export default Image