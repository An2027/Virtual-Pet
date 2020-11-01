//Create variables here
var normalDog, happyDog;
var foood, foodStock;
var database;

function preload()
{
  //load images here
  normalDog = loadImage("Dog(1).png");
  happyDog = loadImage("happydog(1).png");
}

function setup() {
  //create the canvas
  createCanvas(500,500);

  normalDog = createSprite(250,250,20,20);
  normalDog.addImage("Dog(1).png");
  
  //assign the database to the firebase
  database = firebase.database();

  //refer the foodStock to the firebase
  foodStcok = database.ref("food");
  foodStock.on("value",readStock);

  
}


function draw() {  
  //set the background
  background(46, 139, 87);

  //use the arrow to feed the dog
  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    normalDog.addImage(happyDog);
  }

  drawSprites();
  //add styles here

}

function readStock(data){
  foods = data.val();
}

function writeStock(x){
  database.ref("food").update({
    food: x
  })
}

