var app = document.querySelector('#app')

var link = document.createElement('a')
var textLink = document.createTextNode('Visitar Google')
link.setAttribute('href', 'http://google.com')
link.appendChild(textLink)

app.appendChild(link)