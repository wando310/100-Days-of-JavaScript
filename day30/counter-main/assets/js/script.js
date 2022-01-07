let count = 0;

const COUNTER = document.getElementById('currentNumber');


function increment () {
    count++;
    COUNTER.innerHTML = count;
}

function decrement () {
    count--;
    COUNTER.innerHTML = count;
}
