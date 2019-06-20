
//_________________________________________________________
//CANVAS & BUTTONS
//_________________________________________________________
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')


var elem = document.getElementById('canvas'),
   elemLeft = elem.offsetLeft,
   elemTop = elem.offsetTop,
   context = elem.getContext('2d'),
   elements = [];

// Add event listener for `click` events.
elem.addEventListener('click', function(event) {
   var x = event.pageX - elemLeft,
       y = event.pageY - elemTop;
   console.log(x, y);
   elements.forEach(function(element) {
       if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {
           alert('EUREKA');
       }
   });

}, false);



const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")

const hiddenbuttons = document.querySelector("#hiddenbuttons")

const startOverButton = document.querySelector("#startOverButton")

startOverButton.onclick = function() {
  location.reload();
};

button1.onclick = function() {
  canvas.style.display = "flex"
  button1.style.display = "none"
  button2.style.display = "none"
  startOverButton.style.display = "flex"
};

button2.onclick = function() {
  hiddenbuttons.style.display = "flex"
  button1.style.display = "none"
  button2.style.display = "none"
};

buttoneasy.onclick = function() {
  canvas.style.display = "flex"
  hiddenbuttons.style.display = "none"
}

buttonmedium.onclick = function() {
  canvas.style.display = "flex"
  hiddenbuttons.style.display = "none"
}

buttonhard.onclick = function() {
  canvas.style.display = "flex"
  hiddenbuttons.style.display = "none"
}

//_________________________________________________________
//VARIABLES
//_________________________________________________________

let player1 = []
let player2 = []

let scorePlayer1 = 0;
let scorePlayer2 = 0;

let questionss= [
    "¿Quienes son los integrantes de los Beatles?",
    "¿Cuantas notas hay en una octava? ",
    "¿Quien compuso 'Für Elise'?",
    "¿Cual fue la primera pelicula a color?",
    "¿Quien dirigio Titanic(1998)?",
    "¿Como se llama la protagonista de la pelicula 'Alien'?",
    "¿Cual fue el primer videojuego?",
    "¿Que vino primero el Ajedrez o Las Damas Chinas? ",
    "¿Quien invento Nintendo?"]

let Answers = [[["☐ John Lennon,Ringo Starr, Paul McCartney, George Harrison"],["☐ Kurt Cobain,David Grohl, Krist Novoselic"],["☐ Mick Jagger, Keith Richards,Ronnie Wood,Charlie Watts "]]
,[["☐ 8"],["☐ 13"],["☐ 12"]],
[["☐ Beethoven"],["☐ Bach"],["☐ Chopin"]],
[["☐ Blanca Nieves"],["☐ Ciudadano Kane"],["☐ El Mago de Oz"]],
[["☐ Stanley Kubrick"],["☐ James Cameron"],["☐ Steven Spielberg"]],
[["☐ Sigourney Weaver"],["☐ Julia Roberts"],["☐ Winona Rider"]],
[["☐ PAC-MAN"],["☐ PONG"],["☐ SPACE INVADERS"]],
[["☐ El Ajedrez"],["☐ Las Damas"],["☐ Los dos se inventaron al mismo tiempo"]],
[["☐ Satoru Iwata"],["☐ Fusajiro Yamauchi"],["☐ Shigeru Miyamoto"]]]

let suddenDeathQuestions = [
  "¿Cual fue la primera pelicula con sonido?",
  "¿Cual nota sigue despues de la nota Re#? ",
  "¿Cuando se creo FortNite?"]
let suddenDeathAnswers = [(["Avatar"],["Un Viaje a la Luna"],["The Jazz Singer"]),
(["Mi"],["Fa"],["Sol#"]),
(["2018"],["2001"],["2017"])]


let rightAnswers = [((Answers[0][0]),(Answers[1][1]),(Answers[2][1])),
    ((Answers[3][2]),(Answers[4][1]),(Answers[5][0])),
    ((Answers[6][1]),(Answers[7][1]),(Answers[8][1]))]

let rightAnswersSuddenDeath = [suddenDeathAnswers[0][2],suddenDeathAnswers[1][0],suddenDeathAnswers[2][2]]


questionss.forEach ((e,i)=> {
  ctx.font = "20px Georgia";

  ctx.fillText(e, 10, 50+(100*i));
  
})

Answers.forEach ((e,i,a)=> {
  ctx.font = "15px Georgia";
  
  ctx.fillText(e[0], 10, 80+(100*i));
  ctx.fillText(e[1], 10, 100+(100*i));
  ctx.fillText(e[2], 10, 120+(100*i));
 
})


let suddenDeathPlayer1Time = 0
let suddenDeathPlayer2Time = 0


let scorePlayer1SD = 0;
let scorePlayer2SD = 0;

var players = []
let winner = []

//_________________________________________________________
//FUNCTIONS
//_________________________________________________________


function startGame(players) {
    PvP = players[1] === false
    PvC = players[1] === true
    
    //starts the game and select if pvp or pvc
}

function questions(answersP1,answersP2) {

    //p1 turn
    //loads the questions and recieves the answers
    //adds the score
    //p2 turn
    //loads the questions and recieves the answers
    //adds the score
    //if P2 is CPU, answers on random(difficulty levels(easy,medium,hard) depend on how much correct answers are previously given before the random code)
    //does the algorithm without showing the questions
    
    function suddenDeath(tie=true,answersP1,answersP2) {
        //checks if the game is in a tie
        //load the questions and recieves the answers
        //starts adding to score and to time
        //compares the scores and times between the player and prints out the winner if we outscore the other one
    }
}
function startOver(gameOver) {
    //if theres a winner starts over the game, relod the page
}




