
//_________________________________________________________
//CANVAS & BUTTONS
//_________________________________________________________
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const button1 = document.querySelector("#button1")
const startOverButton = document.querySelector("#startOverButton")
const nextQuestionsButton = document.querySelector("#nextButton")
const nextQuestionsButton1 = document.querySelector("#nextButton1")
const nextQuestionsButton2 = document.querySelector("#nextButton2")
const nextQuestionsButton3 = document.querySelector("#nextButton3")



startOverButton.onclick = function() {
  location.reload();
};

button1.onclick = function() {
  canvas.style.display = "flex"
  showTextfirstq(Trivia)
  button1.style.display = "none"
  startOverButton.style.display = "flex"
  nextQuestionsButton.style.display = "flex"
};

nextQuestionsButton.onclick = function() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  showTextsecondtq(Trivia)
  nextQuestionsButton.style.display = "none"
  nextQuestionsButton1.style.display = "flex"
  questionIndex++

};

nextQuestionsButton1.onclick = function() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  
  showText3rdq(Trivia)
  nextQuestionsButton1.style.display = "none"
  nextQuestionsButton2.style.display = "flex"
  questionIndex++

};

nextQuestionsButton2.onclick = function() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  nextQuestionsButton2.style.display = "none"
  nextQuestionsButton3.style.display = "flex"
  showText4thq(Trivia)
  questionIndex++

};


nextQuestionsButton3.onclick = function() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  nextQuestionsButton3.style.display = "none"
  ctx.font = '60px Arial'
  ctx.fillText(`SACASTE ${scorePlayer1}/4`,60,100)
  questionIndex++

};




//_________________________________________________________
//VARIABLES
//_________________________________________________________

let player1 = []
let player2 = []

let scorePlayer1 = 0;
let scorePlayer2 = 0;
let questionIndex = 0;
let inputPrimero = "";
let Trivia = {
  question:[['¿Quienes son los integrantes de los Beatles?',0],['¿Cuantas notas hay en una octava?',1],["¿Cual fue la primera pelicula a color?",2],["¿Cual fue el primer videojuego?",1],["¿Que vino primero el Ajedrez o Las Damas Chinas? ",4],["¿Quien dirigio Titanic(1998)?",5]],
  answers:[['1) John Lennon,Ringo Starr, Paul McCartney, George Harrison'],['2) Kurt Cobain,David Grohl,Krist Novoselic'],['3) Mick Jagger, Keith Richards,Ronnie Wood,Charlie Watts '],
  [['1) 8'],['2) 13'],['3) 12']],
  [["1) Blanca Nieves"],["2) Ciudadano Kane"],["3) El Mago de Oz"]],
  [["1) PAC-MAN"],["2) PONG"],["3) SPACE INVADERS"]], 
  [["1) El Ajedrez"],["2) Las Damas"],["3) Los dos se inventaron al mismo tiempo"]],
  [["1) Stanley Kubrick"],["2) James Cameron"],["3) Steven Spielberg"]]]
 
};



//console.log(Trivia.question[0].toString())


function showTextfirstq(Trivia)  {
 ctx.font = "20px Georgia";
 ctx.fillText(Trivia.question[0][0], 100, 60) 
 ctx.fillText(Trivia.answers[0], 30, 100) 
 ctx.fillText(Trivia.answers[1], 30, 120) 
 ctx.fillText(Trivia.answers[2], 30, 140) 

}

function showTextsecondtq(Trivia)  {
  ctx.font = "20px Georgia";
  ctx.fillText(Trivia.question[1][0], 100, 60) 
  ctx.fillText(Trivia.answers[3][0], 30, 100) 
  ctx.fillText(Trivia.answers[3][1], 30, 120) 
  ctx.fillText(Trivia.answers[3][2], 30, 140) 
 }

 function showText3rdq(Trivia)  {
  ctx.font = "20px Georgia";
  ctx.fillText(Trivia.question[2][0], 100, 60) 
  ctx.fillText(Trivia.answers[4][0], 30, 100) 
  ctx.fillText(Trivia.answers[4][1], 30, 120) 
  ctx.fillText(Trivia.answers[4][2], 30, 140) 
 
 }
 
 function showText4thq(Trivia)  {
   ctx.font = "20px Georgia";
   ctx.fillText(Trivia.question[3][0], 100, 60) 
   ctx.fillText(Trivia.answers[5][0], 30, 100) 
   ctx.fillText(Trivia.answers[5][1], 30, 120) 
   ctx.fillText(Trivia.answers[5][2], 30, 140) 
  }
  function showText5thq(Trivia)  {
    ctx.font = "20px Georgia";
    ctx.fillText(Trivia.question[4][0], 100, 60) 
    ctx.fillText(Trivia.answers[6][0], 30, 100) 
    ctx.fillText(Trivia.answers[6][1], 30, 120) 
    ctx.fillText(Trivia.answers[6][2], 30, 140) 
   
   }



let winner = []

//_________________________________________________________
//FUNCTIONS
//_________________________________________________________

/*
function startGame(player1, player2) {
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
}

function Winner(player) {

}
*/


function checkAnswer(){
 if(inputPrimero === Trivia.question[questionIndex][1]){  
  scorePlayer1 += 1
  draw()
 }
}

function draw() {
  ctx.fillStyle = "black"
  ctx.font = '20px Arial'

  ctx.fillText(`SCORE :${scorePlayer1}`,20,30)
  ctx.clearRect(40,60)
  
}

addEventListener('keydown', function(event){
  if (event.keyCode === 49 || event.keyCode === 50 || event.keyCode === 51) {
    
      inputPrimero = event.keyCode - 49
      checkAnswer()
  

  }
})

//addEventListener('keydown', function(event){
//  if (event.keyCode === 40  && Trivia.correctAnswers[1]) {
//    Trivia.answer[i][1] 
//  }
//}) 
//
//addEventListener('keydown', function(event){
//  if (event.keyCode === 41) {
//    Trivia.answer[i][2] 
//  }
//}) 
