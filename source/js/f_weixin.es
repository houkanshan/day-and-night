if (/WeiBo|MicroMessenger/i.test(navigator.userAgent)) {
  const btn = document.querySelector('#btn-ios')
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    alert('请先点击右上角，选择 “在浏览器打开”，欢迎来到互联网。')
  })
}
