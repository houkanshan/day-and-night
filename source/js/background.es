const container = document.querySelector('#fragments')
const fragments = container.querySelectorAll('svg')
const fragLen = fragments.length

const startY = 0
const middleY = 300
const endY = document.body.clientHeight

const startX = 0
const endX = document.body.clientWidth

function nrand(){
	var x1, x2, rad, y1
	do {
		x1 = 2 * Math.random() - 1
		x2 = 2 * Math.random() - 1
		rad = x1 * x1 + x2 * x2
	} while(rad >= 1 || rad == 0)

	var c = Math.sqrt(-2 * Math.log(rad) / rad)

	return x1 * c / 2
}

function getRamdomFragment() {
  return fragments[Math.random() * fragLen | 0]
}

function generateFragment(minSize, maxSize) {
  const f = getRamdomFragment()
  let newF = document.createElement('div')
  newF.innerHTML = f.outerHTML
  newF = newF.children[0]

  newF.style.top = nrand() * middleY + middleY + 'px'
  newF.style.left = Math.random() * endX + 'px'
  newF.style.width = Math.random() * (maxSize - minSize) + minSize + 'px'
  newF.style.transform = `rotate(${Math.random()*180}deg)`
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
