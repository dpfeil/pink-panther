const getRandomInt = max => Math.floor(Math.random() * max)

export const generateRandomColor = () =>
  `rgb(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(256)})`

export const getPixelsFromImage = src => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const img = new Image()
  img.src = src
  context.drawImage(img, 0, 0)
  const imgData = context.getImageData(0, 0, canvas.height, canvas.width)
  const pixels = []
  for (let y = 0; y < canvas.height; ++y) {
    pixels[y] = []
    for(let x = 0; x < canvas.width; ++x) {
      pixels[y][x] = imgData.data[y*canvas.width+x*4]
    }
  }
  return pixels
}
