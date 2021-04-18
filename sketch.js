var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy, fairyAnimation;
var music;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyAnimation = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
	music = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	music.play();

	//create fairy sprite and add animation for fairy
	fairy = createSprite(125, 575);
	fairy.addAnimation("Fairy", fairyAnimation);
	fairy.scale = 0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  keyPressed();

  //write code to stop star in the hand of fairy
  if(star.y > 550 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody, true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyDown("down")) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyDown("left") && fairy.x > 120){
		fairy.x-=3;
	}else if(keyDown("right") && fairy.x < 800-125){
		fairy.x+=3;
	}
	
}
