const squares = document.querySelectorAll('.square');
let result = 0;
let time = document.querySelector('#time-left');
const mole = document.querySelectorAll('.mole');
var randomsquare = squares[Math.floor(Math.random() * 9)];
var timerid = 60;

function randomsq() {
    squares.forEach(name => {
        name.classList.remove('mole');
    })
    randomsquare = squares[Math.floor(Math.random() * 9)];
    randomsquare.classList.add('mole');
    console.log(randomsquare);
}
if (timerid == 60) {
    randomsq();
}
//eventlistener
squares.forEach(element => {
    element.addEventListener('mouseup', () => {
        if (element.id === randomsquare.id) {
            result += 1;
            score.textContent = result;
            if (timerid == 60) {
                movemole();
            }
            if (timerid != 0) {
                randomsq();
            }
        }
    })
})

function movemole() {
    var maintimer = setInterval(() => {
        timerid--;
        time.innerHTML = timerid;
    }, 1000);
    setTimeout(function( ) { 
        clearInterval( maintimer ); 
    }, 60000);
}