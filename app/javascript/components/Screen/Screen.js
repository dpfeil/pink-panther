import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import Pixel from '../Pixel'
import { generateRandomColor, getPixelsFromImage } from "../../utils/generic"

import './screen.scss'

const HEIGHT = 20
const WIDTH = 40

const Screen = ({ fileName }) => {
  const [imageData, setImageData] = useState({height: 0, width: 0, pixels: []})

  const pixels = []
  for (let y = imageData.height - 1; y > -1; --y) {
    const rows = []
    for (let x = 0; x < imageData.width; ++x) {
      rows.push(<Pixel key={x} color={imageData.pixels[y][x]} />)
    }
    pixels.push(<div key={y} className="pixel-row">{rows}</div>)
  }

  function getBMP(buffer) {
    var datav = new DataView(buffer)
    var bitmap = {}
    bitmap.fileheader = {}
    bitmap.fileheader.bfType = datav.getUint16(0, true)
    bitmap.fileheader.bfSize = datav.getUint32(2, true)
    bitmap.fileheader.bfReserved1 = datav.getUint16(6, true)
    bitmap.fileheader.bfReserved2 = datav.getUint16(8, true)
    bitmap.fileheader.bfOffBits = datav.getUint32(10, true)

    bitmap.infoheader = {}
    bitmap.infoheader.biSize = datav.getUint32(14, true)
    bitmap.infoheader.biWidth = datav.getUint32(18, true)
    bitmap.infoheader.biHeight = datav.getUint32(22, true)
    bitmap.infoheader.biPlanes = datav.getUint16(26, true)
    bitmap.infoheader.biBitCount = datav.getUint16(28, true)
    bitmap.infoheader.biCompression = datav.getUint32(30, true)
    bitmap.infoheader.biSizeImage = datav.getUint32(34, true)
    bitmap.infoheader.biXPelsPerMeter = datav.getUint32(38, true)
    bitmap.infoheader.biYPelsPerMeter = datav.getUint32(42, true)
    bitmap.infoheader.biClrUsed = datav.getUint32(46, true)
    bitmap.infoheader.biClrImportant = datav.getUint32(50, true)

    var start = bitmap.fileheader.bfOffBits
    bitmap.stride = Math.floor((bitmap.infoheader.biBitCount * bitmap.infoheader.biWidth + 31) / 32) * 4
    bitmap.pixels = new Uint8Array(buffer, start)
    return bitmap
  }

  function processimage(e) {
    var buffer = e.target.result
    var bitmap = getBMP(buffer)

    var bmpdata = bitmap.pixels
    var stride = bitmap.stride
    var Width = bitmap.infoheader.biWidth;
    var Height = bitmap.infoheader.biHeight;
    const rawPixels = []
    for (var y = 0; y < Height; ++y) {
      rawPixels[y] = []
      for (var x = 0; x < Width; ++x) {
        var index = x * 3 + stride * y;
        rawPixels[y][x] = `rgb(${bmpdata[index + 2]},${bmpdata[index + 1]},${bmpdata[index]})`
      }
    }

    setImageData({ height: Height, width: Width, pixels: rawPixels })
  }

  const loadImage = async name => {
    const response = await fetch(`/${name}`)
    const data = await response.blob()
    var file = new File([data], name, {type: 'image/bmp'})
    var reader = new FileReader()
    reader.addEventListener("load", processimage, false)
    reader.readAsArrayBuffer(file)
  }


  useEffect(() => {
    console.log('loading image')
    loadImage(fileName)
  }, [fileName])

  // console.log(getPixelsFromImage('/keyframe-000029133.bmp'))

  return (
    <div>
      {pixels}
    </div>
  )

}

Screen.propTypes = {
  fileName: PropTypes.string,
}

Screen.defaultProps = {
  fileName: 'keyframe-tiny.bmp',
}

export default Screen
