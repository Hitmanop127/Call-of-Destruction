var gameState=0;
var database,playerCount,form,player,game;
var player1,player2,player1Image,player2Image,players
var allPlayers,distance=0
function preload(){
player1Image=loadImage("player1.png")
player2Image=loadImage("player2.png")
    
}

function setup() {
createCanvas(displayWidth-20,displayHeight-30) ;
database=firebase.database();
game=new Game();
game.getState();
game.start();
}

function draw() {
if(playerCount===2){
    game.update(1);
}
if(gameState===1){
    clear();
    game.play();
}
}