import React from "react"
import Pixel from './Pixel'

import './app.scss'

const HEIGHT = 20
const WIDTH = 40

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


const generateRandomColor = () => {
  return `rgb(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(256)})`
}
const App = () => {
  const pixels = []
  for (let y = 0; y < HEIGHT; ++y) {

    const rows = []
    for (let x = 0; x < WIDTH; ++x) {
      rows.push(<Pixel key={x} color={generateRandomColor()} />)
    }
    pixels.push(<div key={y} className="pixel-row">{rows}</div>)
  }

  return (
    <div>
      {pixels}
    </div>
  )

}

export default App
