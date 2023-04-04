//NOTE : klik di sembarang tempat agar background video muncul

let zombie

//PEMBUAT GAMBAR ZOMBIE
function preload(){
  zombie=loadImage("zombiee.png")
}

class Mover {
  constructor(x,y){
    this.location = createVector(random(width),random(height));
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0.01,-0.01);
  }
  
  //MENAMPILKAN GAMBAR ZOMBIE
  tampil(){
    image(zombie, this.location.x, this.location.y, 200, 200);
  }
  
  //PERGERAKAN
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
let cobaa;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  cobaa=createVideo(['cobaa.mov', 'cobaa.webm']);
  cobaa.hide(); //MENAMPILKAN BACKGROUND VIDEO

  for (let k = 0; k < 35; k++){
   zombies.push(new Mover());
  }
}

function draw() {
  background("black");
  fill("white");
  text('NOTE : klik di sembarang tempat untuk menampilkan background video', 10, 10, 400, 100);
  image(cobaa, 5,5);
  
  for (let k = 0; k < zombies.length; k++){
    zombies[k].gerakCuy();
    zombies[k].tampil();
    zombies[k].cekBatas();
 }
}

//AGAR VIDEO BERULANG TERUS
function mousePressed() {
  cobaa.loop(); 
}

