const container = document.querySelector('#intros')
const DAY = 1000 * 60 * 60 * 24

let lastIntro = container.querySelector('.intro')
let isDay = false
const nowTime = new Date()

const dayScripts = [
  'I waked up at 5:30am today, noise outside.',
  'Felt sleepy after lunch, so I had a nap.',
  'I didn\'t talk to anyone this day.',
  'Trying to figure out this stuff, it looks like a maze.',
]
const nightScripts = [
  'I work at night if needed, won\'t be too late.',
  'Try to go to bed early to catch up on sleep.',
  'I like sleeping, but not when I got an insomnia.',
  'They make noise at night this time.',
]

const scripts = {
  day: dayScripts,
  night: nightScripts,
}


function getText(isDay) {
  const texts = scripts[isDay ? 'day' : 'night']
  const index = Math.random() * texts.length | 0
  return texts[index]
}

function createIntro({ isDay, text, date }) {
  const fragment = document.createElement('div')
  fragment.innerHTML = lastIntro.outerHTML
  const newIntro = fragment.children[0]
  newIntro.querySelector('time').textContent =
    date.toLocaleDateString()
  newIntro.querySelector('.daynight').textContent =
    isDay ? 'Day' : 'Night'
  newIntro.querySelector('.content').textContent = text
  return newIntro
}

function updateIntro() {
  const intro = createIntro({
    isDay,
    date: nowTime,
    text: getText(isDay),
  })
  intro.classList.add('hide')
  container.appendChild(intro)
  lastIntro.classList.add('hide')

  const _lastIntro = lastIntro
  setTimeout(_ => {
    intro.classList.remove('hide')
    _lastIntro.remove()
  }, 3000)

  lastIntro = intro
  isDay = !isDay
  if (isDay) {
    nowTime.setTime(nowTime.getTime() + DAY)
  }
}

setTimeout(_ => {
  setTimeout(updateIntro, 1000)
  setInterval(_ => {
    setTimeout(updateIntro, 1000)
  }, 30000)
}, 15000)

