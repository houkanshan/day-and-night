import randomTransform from './randomTransform.es'

const container = document.querySelector('#stars')

function r() {
  return Math.random() - 0.5
}

const starPool = []
const runningStar = []
let allStarCount = 0

function generateStar({minSize, maxSize}) {
  let s
  if (allStarCount < 10) {
    s = document.createElement('span')
    s.className = 'star'
    container.appendChild(s)
    allStarCount += 1
  } else if (starPool.length) {
    s = starPool.pop()
  } else {
    return
  }

  runningStar.push(s)
  randomTransform(s, {minSize, maxSize})

  setTimeout(_ => {
    s.style.transform =
    `translate3d(${r()*800}px,${r()*800}px, 0)`
    s.style.opacity = 0.3
  }, 300)

  setTimeout(_ => {
    starPool.push(runningStar.splice(runningStar.indexOf(s), 1)[0])
  }, 10000)
  return s
}


function renderStars() {
  setInterval(_ => {
    generateStar({ minSize: 2, maxSize: 5 })
  }, 1000)
}

renderStars()
