class Game {
  constructor(){}

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
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    c1 = createSprite(100,200);
    c1.addImage(c1Image);
    c2 = createSprite(300,200);
    c2.addImage(c2Image);
    c3 = createSprite(500,200);
    c3.addImage(c3Image);
    c4 = createSprite(700,200);
    c4.addImage(c4Image);
    car = [c1,c2,c3,c4];

  }

  play(){
    form.hide();
    // textSize(30);
    // text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      background("#C68767")
      image(trackImage,0,-displayHeight*3,displayWidth,displayHeight*4);

      //var display_position = 130; 
      var index = 0;
      var x = 250;
      var y;
      for(var plr in allPlayers){
        index = index+1;
        x=x+230;
        y=displayHeight-allPlayers[plr].distance;
        car[index-1].x=x;
        car[index-1].y=y;
        if(index===player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          car[index-1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = car[index-1].y;
        }

        // display_position+=20;
        // textSize(15);
        // text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    if(player.distance>4000){
      gameState = 2;
    }
    drawSprites();
    
  }
  end(){
    console.log("Game Ended");
  }
}
