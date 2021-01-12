var dog,happyDog;
var database;
var foodS,foodStock;

function preload() {
 dogImage = loadImage("images/dogimg.png");
 happyDogImg = loadImage("images/dogimg1.png");
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  
  dog = createSprite(200,200,20,20);
  dog.addImage(dogImage);
  dog.scale = 0.15

  foodStock = database.ref("food");
   foodStock.on("value",readStock);
  
}


function draw() {  
 background(46, 139, 87);

 if(keyWentUp(UP_ARROW)) {
   writeStock(foodS);
   dog.changeImage(happyDogImg);
 }


  drawSprites();
  

}

function readStock() {
  foodS = data.val();
}

function writeStock (x) {
  if(x <= 0) {
    x = 0;
  }
  else {
    x = x-1;
  }

  database.ref('/').update({
    food:x
  })
}



