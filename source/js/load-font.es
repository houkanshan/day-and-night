const fontname = 'amatic'

if (document.fonts) {
  document.fonts.load('1em ' + fontname).then(function() {
    document.body.classList.add('font-loaded')
  }, function() {
    document.body.classList.add('font-loaded')
  })
} else {
  document.body.classname = 'font-loaded'
}
