const imgs = [...document.querySelectorAll('#logo-overlays img')]
const len = imgs.length

imgs.forEach(function(img) {
  img.src = img.getAttribute('data-src')
})

function *showHide() {
  let i = 0
  while(42) {
    imgs[i].classList.add('show')
    setTimeout(_ => {
      imgs[i].classList.remove('show')
    }, 5000)
    yield
    i = (i + 1) % len
  }
}

if (len) {
  const gen = showHide()
  setTimeout(function() {
    gen.next()
  }, 3000)
  setInterval(_ => {
    gen.next()
  }, 15000)
}
