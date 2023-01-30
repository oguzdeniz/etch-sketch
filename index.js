console.log('hello world!')

const container = document.getElementById('container')

for (let i = 0; i < 256; i++) {
  const square = document.createElement('div')
  const list = square.classList
  list.add('square')
  container.appendChild(square)
}
