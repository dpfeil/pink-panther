import React from "react"
import Pixel from '../Pixel'
import { generateRandomColor } from "../../utils/generic"

import './screen.scss'

const HEIGHT = 20
const WIDTH = 40

const Screen = () => {
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

export default Screen
