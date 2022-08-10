
let randomNumber = Math.ceil(Math.random()*6)

let randomDiceImage = 'dice' + randomNumber + '.jpg';

let randomImageSource ='images/' + randomDiceImage

let image= document.querySelectorAll('img')[0]

image.setAttribute('src', randomImageSource)


// Player2
let RandomNumber = Math.ceil(Math.random()*6)
let RandomDiceImage = 'dice' + RandomNumber + '.jpg';
let RandomImageSource ='images/' + RandomDiceImage
let image2= document.querySelectorAll('img')[1]
image2.setAttribute('src', RandomImageSource)





// Condition

let header = document.querySelector('h1')
let body = document.body

if (randomNumber > RandomNumber){
    header.innerText = 'Player 1 wins🎈';
    body.style.backgroundColor ='yellow'
}else if (RandomNumber > randomNumber){
    header.innerText ='Player 2 wins 🎈';
    body.style.backgroundColor ='pink'
}else{
    header.innerText = 'It\'s a tie 👭';
    body.style.backgroundColor ='green'
}

// btn.addEventListener('click', clickMe)


