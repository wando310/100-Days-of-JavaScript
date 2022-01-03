function doAction () {
    console.log('executou')
}

setTimeout(doAction(), 5000)

setInterval (doAction(), 5000)