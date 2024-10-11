import React from 'react'
import ParallaxComponent from './Components/ParallaxComponent'
import ImageSlider from './Components/ImageSlider'
ImageSlider

const App = () => {
  return (
    <>
      <div>
        <ParallaxComponent />
      </div>
      <div style={{ paddingTop: '200px' }}>
        <ImageSlider/>
      </div>

    </>
  )
}

export default App