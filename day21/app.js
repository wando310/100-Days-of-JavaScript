var button = document.querySelector('#app button')

button.addEventListener('click', function(event) {
    event.preventDefault()
    alert("A sua idade foi armazenada no sistema!")
})