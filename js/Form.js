class Form {
  constructor() {
    this.title = createElement('h2')
    this.greeting = createElement('h3');
    this.input = createInput("").attribute("placeHolder","name");
    this.button = createButton('Play');
    this.rButton = createButton('reset');
    
    
  }

  display(){
 
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2-50,10);
    
   
    
      this.input.position(displayWidth/2-40,displayHeight/2-80);
      this.button.position(displayWidth/2+30,displayHeight/2);
      this.rButton.position(displayWidth-100,displayHeight/5);
      this.rButton.mousePressed(()=>{
        game.update(0)
        player.updateCount(0)
        database.ref('/').update({players : null})
      })
      this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name=this.input.value()
      playerCount+=1;
     
      player.updateCount(playerCount);

      player.index = playerCount
      player.update()

      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-70,displayHeight/4)
    });
  }
}
