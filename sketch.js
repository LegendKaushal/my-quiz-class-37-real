var canva;

var gameState = 0,totalPlayers = 0,database,quiz,question,contestant

function setup(){
  canvas = createCanvas(850,400);
  
  database = firebase.database()

  quiz = new Quiz()
  quiz.start()
  quiz.getState()

}


function draw(){
  background("pink");

  if(totalPlayers === 3)
  {
    quiz.updateState(1)
  }

  
}
