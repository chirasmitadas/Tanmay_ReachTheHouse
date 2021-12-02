class Game{
    constructor(){
      //this.timerMsg = createElement("h2");
       this.timerMsg = createElement("h2");
     }

    start(){

      player=createSprite(width/2,height-50,20,32);
      player.addImage("car",carImg);
      player.addImage("blast",blastImg);
      player.changeImage("car");
      player.scale=0.09;

      fuels=new Group();
      this.addSprites(fuels,3,fuelImg,0.02);

      house=createSprite(width/2,height-3000,40,40);
      house.addImage(houseimg);
      house.scale=0.5;

      fuelLoaded=180;
      timer=120;
      timeSpent=0;

      this.timerMsg.position(100, 100);
      
    }

    play(){
        
        player.y=height-distance;
        this.timerMsg.html(`Timer: ${timer} seconds | ${timeSpent} seconds`);
        if(keyIsDown(UP_ARROW)){
            distance=distance+20;
            fuelLoaded = fuelLoaded-1;
        }

        if(keyIsDown(RIGHT_ARROW)){
            this.leftKeyActive = false;
            player.x=player.x+ 20;
        }

        if(keyIsDown(LEFT_ARROW)){
            this.leftKeyActive = true;
            player.x=player.x- 20;
        }

        camera.x=width/2;
        camera.y=player.y;
        
        
        if(player.isTouching(house)){
            gameState="over"
        }
        obstacles=new Group()

        var obstaclesPositions = [
            { x: width / 2 , y: height - 500, image: obstacle2Image },
            { x: width / 2 - 150, y: height - 700, image: obstacle1Image },
            { x: width / 2 , y: height - 1000, image: obstacle1Image },
            { x: width / 2 - 180, y: height - 1300, image: obstacle2Image },
            { x: width / 2, y: height - 1500, image: obstacle2Image },
            { x: width / 2 + 180, y: height - 1800, image: obstacle1Image },
            { x: width / 2 , y: height - 2000, image: obstacle2Image },
            { x: width / 2 + 250, y: height - 2500, image: obstacle2Image },
            { x: width / 2 , y: height - 2700, image: obstacle1Image }
          ];

        this.addSprites(
          obstacles,
          obstaclesPositions.length,
          obstacle1Image,
          0.1,
          obstaclesPositions
        );
        
        if(player.collide(obstacles)){
            player.changeImage("blast")
            gameState="end"
        }


        if(player.collide(fuels)){
          fuelLoaded=180;
        }

        this.showFuelBar();       
      
    }

    addSprites(spriteGroup, numberOfSprites, spriteImage, scale, positions = []) 
    {
      for (var i = 0; i < numberOfSprites; i++) {
        var x, y;
  
        //C41 //SA
        if (positions.length > 0) {
          x = positions[i].x;
          y = positions[i].y;
          spriteImage = positions[i].image;
        } else {
          x = random(width / 2 + 150, width / 2 - 150);
          y = random(-height * 4.5, height - 400);
        }
        var sprite = createSprite(x, y);
        sprite.addImage("sprite", spriteImage);
  
        sprite.scale = scale;
        spriteGroup.add(sprite);        
      }      
    }

    showFuelBar() {
      push();
      image(fuelImg, width / 2 - 130, player.y-100, 20, 20);
      fill("white");
      rect(width / 2 - 100, player.y-100, 185, 20);
      fill("#ffc400");
      rect(width / 2 - 100, player.y-100, fuelLoaded, 20);
      noStroke();
      pop();
    }

    end(){
        console.log("YOU LOSE");
        player.visible=false;
    }



}
