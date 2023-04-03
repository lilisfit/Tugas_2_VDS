let zombie
let pemakaman

function preload(){
  zombie=loadImage("zombiee.png")
  pemakaman=loadImage("pemakaman.jpeg")
}

class Mover {
  constructor(x,y){
    this.location = createVector(random(width),random(height));
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0.01,-0.01);
  }
  
  tampil(){
    //noStroke();
    //fill('blue');
    image(zombie, this.location.x, this.location.y, 200, 200);
  }
  
  gerakCuy(){
    var mouse = createVector(mouseX, mouseY);
    
    var arahMouse = p5.Vector.sub(mouse, this.location);
    var topSpeed = 8;
    
    arahMouse.normalize();
    arahMouse.mult(0.5); 
  
    
    this.velocity.add(this.acceleration);
    this.velocity.add(arahMouse);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
    
  }
  
  cekUjung(){
    if ( this.location.x > windowWidth ) {
      this.location.x = 0;
    }
    else if (this.location.x < 0){
      this.location.x = windowWidth;
    }
  
    if ( this.location.y > windowHeight ) {
      this.location.y = 0;
    }
    else if (this.location.y < 0){
      this.location.y = windowHeight;
    }
  }
  
  cekBatas(){
    if (this.location.x < 0 || this.location.x > width){
      this.velocity.x = -1*this.velocity.x
    }
    else if (this.location.y < 0 || this.location.y > height){
      this.velocity.y = -1*this.velocity.y
    }
  }
}

let zombies =[];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let k = 0; k < 20; k++){
    zombies.push(new Mover());
  }
}

function draw() {
  //background("#E9967A");
  image(pemakaman, 0, 0, windowWidth, windowHeight)
  for (let k = 0; k < zombies.length; k++){
    zombies[k].gerakCuy();
    zombies[k].tampil();
    zombies[k].cekBatas();
 }
}

