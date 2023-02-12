let img1, img2, img3, img4, img5;
let size1, size2, size3, size4, size5;
let posx1, posx2, posx3, posx4, posx5;
let posy1, posy2, posy3, posy4, posy5;

let state0, state1, state2;

let crtState = 0;

function setup() {
  
  createCanvas(600, 600);
  
   frameRate(1);
  
  
  img1 = loadImage('img1.png');
   img2 = loadImage('img2.png');
   img3 = loadImage('img3.png');
   img4 = loadImage('img4.png');
   img5 = loadImage('img5.png');
}


function draw() {
  
       background(0,0,0,0.8);                       
  
  crtState = crtState + 1;
  
  
  if (crtState > 400){
  size1 = random(10,20);
  posx1 = random(200,400);
  posy1 = random(200,400);
  image(img1,posx1,posy1,size1,size1);
  
  size2 = random(10,20);
  posx2 = random(200,400);
  posy2 = random(200,400);
  image(img2,posx2,posy2,size2,size2);
  
  size3 = random(10,20);
  posx3 = random(200,400);
  posy3 = random(200,400);
  image(img3,posx3,posy3,size3,size3);
  }
  
    if (crtState < 400 && crtState > 0 ){
  size1 = random(20,40);
  posx1 = random(220,380);
  posy1 = random(220,380);
  image(img1,posx1,posy1,size1,size1);
  
  size2 = random(20,40);
  posx2 = random(220,380);
  posy2 = random(220,380);
  image(img2,posx2,posy2,size2,size2);
  
  size3 = random(20,40);
  posx3 = random(220,380);
  posy3 = random(220,380);
  image(img3,posx3,posy3,size3,size3);
  }
  
  
  
    if (crtState < 0){
  size1 = random(40,80);
  posx1 = random(260,340);
  posy1 = random(260,340);
  image(img1,posx1,posy1,size1,size1);
  
  size2 = random(40,80);
  posx2 = random(260,340);
  posy2 = random(260,340);
  image(img2,posx2,posy2,size2,size2);
  
  size3 = random(40,80);
  posx3 = random(260,340);
  posy3 = random(260,340);
  image(img3,posx3,posy3,size3,size3);
  }
  
  console.log(crtState);
    
    

  
  
}



function keyPressed(){
  
  
   crtState = crtState - 50;

  
  
}