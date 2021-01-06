var database;
var form,game,player;
var playerCount;
var gameState = 0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(800,800);
game = new Game();
game.getState();
game.start();
  
}

function draw(){
  background("white");
  
    
    drawSprites();
  
}

