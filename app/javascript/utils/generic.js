const getRandomInt = max => Math.floor(Math.random() * max)

export const generateRandomColor = () =>
  `rgb(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(256)})`
