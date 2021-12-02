var houseimg,trackimg,carImg,bgimg;
var player,game,house;
var distance=0;
var gameState="Play";
var obstacle1Image,obstacle2Image,blastImg,fuelImg;
var obstacles,fuels, fuelLoaded;
var timer, timeSpent;


function preload(){
    houseimg=loadImage("assets/house.png");
    trackimg=loadImage("assets/track.jpg");
    carImg=loadImage("assets/car.png");
    bgimg=loadImage("assets/track.png");
    obstacle1Image=loadImage("assets/obstacle1.png");
    obstacle2Image=loadImage("assets/obstacle2.png");
    blastImg=loadImage("assets/blast.png");
    fuelImg=loadImage("assets/fuel.png");

}

function setup(){
    createCanvas(windowWidth,windowHeight);
    game=new Game();
    game.start();

   

}


function draw(){
background("brown");


image(trackimg,0,-height*4,width,height*5);

if(gameState==="Play"){
    checkTimer();
    game.play();
}

if(gameState==="over"){
    game.end();
}

drawSprites();
push();
fill("red");
//text("Timer: " +timer+" seconds | "+timeSpent + " seconds", 100,100);
pop();
}

function checkTimer()
{
    timeSpent = round(millis()/1000);
    

    if(timeSpent=== timer){
        console.log(timeSpent);
    }
   
}