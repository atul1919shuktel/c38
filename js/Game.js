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
    car1 =  createSprite(200,displayHeight-100,40,40)
    car2 =  createSprite(400,displayHeight-100,40,40)
    car3 =  createSprite(600,displayHeight-100,40,40)
    car4 =  createSprite(800,displayHeight-100,40,40)
    cars =  [car1,car2,car3,car4]

    if(gameState === 0){
      player = new Player();
      var playerCountTest = await database.ref("playerCount").once("value");
      if(playerCountTest.exists()){playerCount = playerCountTest.val
      player.getCount();
    }
      form = new Form()
      form.display();
      
    }
  }
  play(){
    form.greeting.hide()
    
    Player.getInfo()
    if(allPlayers !== undefined){
    var index = 1
    var x = 0
    var y = 0
    for(var pl in allPlayers){
            if(pl === "player"+player.index){
            cars[index - 1].shapeColor = "red"
            camera.position.x = displayWidth/2
            camera.position.y = cars[index-1].y  
              }
      x = x+200
      y = displayHeight - allPlayers[pl].distance
      cars[index-1].x = x
      cars[index-1].y = y
      
    index++
    }  
  }   
    if(keyDown(UP_ARROW)&& player.index !== null){   
      player.distance = player.distance+50
      player.update()
    }
    drawSprites()
    textSize(30)
    text("game Start!",130, 99.999999999999999999999999999999999999999999999999999999999999999999) 
  }
}
