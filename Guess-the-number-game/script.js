'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1
//console.log(`Numero secreto:${secretNumber}`)
let score = Number(document.querySelector('.score').textContent)
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    //quando nao se add nenhum numero
    if (!guess) {
        console.log(document.querySelector('.message').textContent = '🚫 No Number!')
    }
    //quando o jogador ganhar
    if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('.message').textContent = '🥳 Great!'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('body').style.backgroundColor = '#00b24c'
        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore

        }
    } else {
        //quando numero for maior
        if (guess > secretNumber) {
            document.querySelector('.message').textContent = '📈 Too High!'
        }
        //quando o numero for menor
        if (guess < secretNumber) {
            document.querySelector('.message').textContent = '📉 Too Low!'
            let score = Number(document.querySelector('.score').textContent)
        }
        score = score - 1
        document.querySelector('.guess').value = ''
        //quando o score for igual a 0
        document.querySelector('.score').textContent = score
        if (score === 0) {
            document.querySelector('.message').textContent = '❌😞 You Louse! (Click Again)'

            document.querySelector('.score').textContent = 0
            document.querySelector('body').style.backgroundColor = '#f2000d'

        }
    }
})

//jogar novamente

document.querySelector('.again').addEventListener('click', function () {
    score = 100
    secretNumber = Math.trunc(Math.random() * 100) + 1
    document.querySelector('.score').textContent = score
    document.querySelector('.guess').value = ''
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('body').style.backgroundColor = '#222'
    console.log(`Numero secreto:${secretNumber}`)
})