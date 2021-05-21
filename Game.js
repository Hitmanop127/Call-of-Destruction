class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
 async start(){
    if(gameState===0){
        player=new Player();
        var playerCountRef=await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount=playerCountRef.val();
          player.getCount();
        }
    form=new Form();
    form.display();
    }
    player1=createSprite(100,200);
    player1.addImage(player1Image);
    player1.scale=2.5
player2=createSprite(600,200);
player2.addImage(player2Image);
player2.scale=2.5
players=[player1,player2]
}
play(){
  form.hide();
  Player.getPlayerInfo();
  if(allPlayers!==undefined){
    var index=0;
    var x=0;
    var y;
    for(var p in allPlayers){
      index=index+1;
      x=x+200;
      y=displayHeight-allPlayers[p].distance;
      players[index-1].x=x;
      players[index-1].y=y
      if(index===player.index){
        players[index-1].shapeColor="red";

      }
    }
  }
drawSprites();
}
}