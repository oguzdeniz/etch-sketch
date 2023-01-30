console.log('hello world!')

const container = document.getElementById('container')

function changeBgColor(el) {
  el.style.background = 'blue'
}

for (let i = 0; i < 256; i++) {
  const square = document.createElement('div')
  const list = square.classList
  list.add('square')
  container.appendChild(square)
  square.addEventListener('mouseover', () => changeBgColor(square))
}
