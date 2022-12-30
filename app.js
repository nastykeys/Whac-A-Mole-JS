const squares = document.querySelectorAll(".square"),
mole = document.querySelector(".mole"),
timeLeft = document.querySelector("#time-left"),
score = document.querySelector("#score")

let result = 0
let hitPosition
let  currentTime = 30
let timerId = null
let speed = 1000

let countDownTimerId = setInterval(countDown, speed)



function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    });
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition){
            result++ 
        }else{
            result--
        }
        square.style.pointerEvent = 'none'
        score.textContent = result
        hitPosition = null
    })
})

function moveMole(){
    if(currentTime <= 20) {
        setTimeout(randomSquare, speed)
        speed -= 100
        console.log(23)
    }
    setTimeout(randomSquare, speed)
}


function countDown(){
    setInterval(moveMole(),speed)
    if(currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert(`GAME OVER Your Score is ${result}`)
        window.location.reload()
    }
    currentTime--
    timeLeft.textContent = currentTime
}



