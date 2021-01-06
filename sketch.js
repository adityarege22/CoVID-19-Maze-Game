var maze1, maze2, maze3, maze4, maze5;
var maze6, maze7, maze8, maze9, maze10;
var maze11, maze12, maze13, maze14, maze15;
var maze16, maze17, maze18, maze19;
var maze20, maze21, maze22, maze23, maze24;
var vaccine, vaccineIMG;
var doctor, doctorIMG;
var patient, patientIMG;
var CoVID, CoVIDIMG;
var back, backIMG;
var life = 5
var gameState='play'

function preload(){
vaccineIMG = loadImage('images/CoVID Vaccine.png');
doctorIMG = loadImage('images/Doctor Running.png');
patientIMG = loadImage('images/RunningMan.png');
CoVIDIMG = loadImage('images/CoVID.png')
//backIMG = loadImage('images/background.png')

}


function setup(){
createCanvas(800,700);

vaccine = createSprite(90,180,30,30);
vaccine.addImage(vaccineIMG);
vaccine.scale=0.3;

doctor = createSprite(675,500,30,30);
doctor.addImage(doctorIMG);
doctor.scale=0.1;




patient = createSprite(350,100,30,30)
patient.addImage(patientIMG);
patient.scale = 0.3;
patient.velocityY= 5;

CoVID = createSprite(500,90,30,30);
CoVID.addImage(CoVIDIMG);
CoVID.scale=0.2;
CoVID.velocityY= 5;



maze1 = createSprite(70,50,20,100)
maze1.shapeColor="brown";

maze2 = createSprite(410,15,700,20);
maze2.shapeColor="brown";

maze3 = createSprite(750,270,20,500)
maze3.shapeColor="brown";

maze4 = createSprite(410,560,700,20)
maze4.shapeColor="brown";

maze5 = createSprite(70,400,20,300)
maze5.shapeColor="brown";

maze6 = createSprite(180,260,200,20)
maze6.shapeColor="brown";

maze7 = createSprite(70,50,20,100)
maze7.shapeColor="brown";

maze8 = createSprite(150,400,20,150)
maze8.shapeColor="brown";

maze9 = createSprite(200,465,100,20)
maze9.shapeColor="brown";

maze10 = createSprite(240,510,20,100)
maze10.shapeColor="brown";

maze11 = createSprite(240,370,20,80)
maze11.shapeColor="brown";

maze12 = createSprite(300,400,100,20)
maze12.shapeColor="brown";

maze13 = createSprite(340,480,20,150)
maze13.shapeColor="brown";

maze14 = createSprite(370,340,150,20)
maze14.shapeColor="brown";

maze15 = createSprite(450,430,20,200)
maze15.shapeColor="brown";

maze16 = createSprite(550,300,20,350)
maze16.shapeColor="brown";




maze17 = createSprite(580,350,80,20)
maze17.shapeColor="brown";

maze18 = createSprite(610,460,20,200)
maze18.shapeColor="brown";

maze19 = createSprite(700,250,100,20)
maze19.shapeColor="brown";

maze20 = createSprite(700,125,100,20)
maze20.shapeColor="brown";

maze21 = createSprite(300,80,20,150)
maze21.shapeColor="brown";

maze22 = createSprite(250,125,100,20)
maze22.shapeColor="brown";

maze23 = createSprite(200,100,20,150)
maze23.shapeColor="brown";

maze24 = createSprite(400,125,20,200)
maze24.shapeColor="brown";



}


function draw(){
background("white");

text("LIFE: "+life, 600,50)

if(gameState === 'play'){





if(keyDown(UP_ARROW)){
  
  doctor.velocityY = -1

}
//doctor.velocityY = doctor.velocityY+0.5;

if(keyDown(DOWN_ARROW)){
  
  doctor.velocityY = 1

}

if(keyDown(LEFT_ARROW)){

  doctor.velocityX = -3
  

}

if(keyDown(RIGHT_ARROW)){

  doctor.velocityX = 1
  

}

/*if(doctor.isTouching(maze1) || doctor.isTouching(maze2) || doctor.isTouching(maze3) ||
doctor.isTouching(maze4) || doctor.isTouching(maze5) || doctor.isTouching(maze6) ||
doctor.isTouching(maze7) || doctor.isTouching(maze8) || doctor.isTouching(maze9) ||
doctor.isTouching(maze10) || doctor.isTouching(maze11) || doctor.isTouching(maze12) ||
doctor.isTouching(maze13) || doctor.isTouching(maze14) || doctor.isTouching(maze15) || 
doctor.isTouching(maze16) || doctor.isTouching(maze17) ||
doctor.isTouching(maze18) || doctor.isTouching(maze19) || doctor.isTouching(maze20) ||
doctor.isTouching(maze21) || doctor.isTouching(maze22) || doctor.isTouching(maze23) ||
doctor.isTouching(maze24)){

doctor.x = 675;
doctor.y = 500;

doctor.velocityX=0;
doctor.velocityY=0;


}*/

if(doctor.isTouching(CoVID)){

  doctor.x = 675;
  doctor.y = 500;

  life = life-1;



}
if(doctor.isTouching(patient)){
patient.velocityY=0;
patient.destroy();
  life = life+1;



}






CoVID.bounceOff(maze4);
CoVID.bounceOff(maze2);
patient.bounceOff(maze2);
patient.bounceOff(maze14);





if(doctor.isTouching(vaccine)){
  gameState = 'end' 
   }











drawSprites();
  }
if(gameState === 'end'){
  fill("black");
  stroke("yellow");


  textSize(100);
  text("YOU WON...!!!", 200,300);
  

}
  
  
  
 
  
}