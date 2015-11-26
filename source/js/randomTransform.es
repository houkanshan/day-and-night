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

function getRandomPos() {
  return {
    top: nrand() * middleY + middleY,
    left: Math.random() * 100,
  }
}

function randomTransform(el, { minSize, maxSize }) {
  const width = Math.random() * (maxSize - minSize) + minSize
  el.style.width = width + 'px'

  const pos = getRandomPos()
  el.style.top = pos.top + 'px'
  el.style.left = pos.left + '%'

  el.style.transform = `rotate(${Math.random()*180}deg)`

  return el
}

export default randomTransform
