import randomTransform from './randomTransform.es'

const container = document.querySelector('#stars')

function r() {
  return Math.random() - 0.5
}

function generateStar({minSize, maxSize}) {
  const s = document.createElement('span')
  s.className = 'star'

  randomTransform(s, {minSize, maxSize})
  container.appendChild(s)

  setTimeout(_ => {
    s.style.transform = 
    `translate(${r()*800}px,${r()*800}px)`
    s.style.opacity = 0.3
  }, 300)

  setTimeout(_ => s.remove(), 30000)
  return s
}


function renderStars() {
  setInterval(_ => {
    generateStar({ minSize: 2, maxSize: 5 })
  }, 1000)
}

renderStars()
