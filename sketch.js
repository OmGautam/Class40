var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var c1,c2,c3,c4;
var car;
var c1Image,c2Image,c3Image,c4Image,trackImage,groundImage;

var form, player, game;

function preload(){
  c1Image = loadImage("images/car1.png");
  c2Image = loadImage("images/car2.png");
  c3Image = loadImage("images/car3.png");
  c4Image = loadImage("images/car4.png");
  trackImage = loadImage("images/track.jpg");
  groundImage = loadImage("images/ground.png");

}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
