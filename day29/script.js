var button = document.querySelector("#app button")

button.addEventListener('click', function () {
    axios 
    .get('https://api.github.com/Users') // Import Github API 
    .then(function (response) { // If worked up 
        console.log(responde)
    })
    .catch(function (error) { // Gone bad 
        console.log(error)
    })
    .finally(function (){ // When the requisition finally
        console.log('Finalizou')
    })
})