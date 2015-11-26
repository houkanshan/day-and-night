import randomTransform from './randomTransform.es'

const container = document.querySelector('#fragments')
const fragments = container.querySelectorAll('svg')
const fragLen = fragments.length


function getRamdomFragment() {
  return fragments[Math.random() * fragLen | 0]
}

function generateFragment(minSize, maxSize) {
  const f = getRamdomFragment()
  let newF = document.createElement('div')
  newF.innerHTML = f.outerHTML
  newF = newF.children[0]
  randomTransform(newF, {minSize, maxSize})

  container.appendChild(newF)
}

function renderFragments() {
  for(let i = 0; i < 20; i++) {
    generateFragment(5, 10)
  }
  for(let i = 0; i < 10; i++) {
    generateFragment(10, 20)
  }
  for(let i = 0; i < 5; i++) {
    generateFragment(20, 40)
  }
  [...fragments].forEach(el => {
    el.remove()
  })
  container.classList.add('ready')
}

renderFragments()
