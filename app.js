const board = document.querySelector('#board'),
  SQUEARES_NUMBER = 400,
  colors = [
    '#F08080',
    '#FF0000',
    '#00FA9A',
    '#00FF00',
    '#20B2AA',
    '#FF1493',
    '#1E90FF',
    '#DAA520',
  ]

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)]

const setColor = (e) => {
  const element = e.target
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

const removeColor = (e) => {
  const element = e.target
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}

for (let i = 0; i < SQUEARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  square.addEventListener('mouseover', setColor)
  square.addEventListener('mouseleave', removeColor)
  board.append(square)
}
