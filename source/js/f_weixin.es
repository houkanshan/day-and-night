if (/WeiBo|MicroMessenger/i.test(navigator.userAgent)) {
  const btn = document.querySelector('#btn-ios')
  if (btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault()
      alert('欢迎来到互联网：点击右上角，选择 “在浏览器打开”。')
    })
  }
}
