var YouBuyYourProducts = new Promise( function (resolve, reject) {
    // var products = ['Shirt', 'Pants', 'Bags']
    setTimeout(function () {
        reject('Deu ruim')
    }, 3000)
})

YouBuyYourProducts
    .then(function(products) {
        console.log(products)
    })
    .catch(function (error) {
        console.log(error)
    })