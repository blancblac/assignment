
let rot = 0;
let slider_kd, slider_ks, slider_ns;
//let c1, c2, c3, c4, c5;
let angle;

let img;
let mouseX;
let mouseY;


function setup() {
  //img = loadImage('assets/galaxy.jpg');
  createCanvas(windowWidth, windowHeight, WEBGL);
  //slider_kd = createSlider(0, 1, 0.5, 0);
  //slider_kd.position(10, 10);
  slider_kd = createSlider(0, 1, 0.5, 0);
  slider_kd.position(10, 30);
  //text('Specular Color')
  //textFont(tex);
  //textAlign(10,10);
  slider_ks = createSlider(0, 1, 0.5, 0);
  slider_ks.position(10, 70);
  //text('Directional Light')
  //textFont(tex);
  //textAlign(10,50);
  slider_ns = createSlider(1, 100, 5, 0);
  slider_ns.position(10, 110);
  //text('Specular Material')
  //textFont(tex);
  //textAlign(10,90);
  noStroke();
  
}

/*
function preload(){
  img = loadImage('assets/cover.jpg');
  }
*/

function draw() {
  /*
  if (mouseIsPressed){
    noStroke();
    beginShape();
    texture(img);
    plane(1000,1000,0, 0);
    endShape();

  }
  */
 background(0);
 colorMode(RGB,1);

let dx = (mouseY / height - 0.5) * 4;
let dy = (mouseX / width - 0.5) * 4;

  // set light
ambientLight(0.2); //La
specularColor(slider_ks.value(), 1-slider_ks.value(), 0); // Ks  
directionalLight(1, 1, 1, cos(rot), 0, sin(rot)); // Ld and Ls
// ambientMaterial(slider_ka.value(), 0, 0); // ambient only model, Ka
// fill(slider_kd.value(), 0, 0); // lambert only model, Kd
// blinn-phong model, consider parameters as both Ka and Kd
specularMaterial(slider_kd.value(), 1-slider_kd.value(), 0);
shininess(slider_ns.value()); // shininess of specular region, ns
// rotate light
  push();
  translate(0, 0, 0);
  noStroke();
  directionalLight(0, 0, 100, 0.25, 0.25, 0);
  rotateX(frameCount * 0.01);
  /*
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  */
  //torus(80, 60);
  ambientMaterial(0,134,141);
  sphere(150);
  pop();
 
  push();
  translate(0, 0, 0);
  noStroke();
  ambientLight(30,0,50);
  //directionalLight(0, 0, 20, 0.25, 0.25, 0);
  //pointLight(0, 0, 255, dx, dy, 250);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01); 
  shininess(60);
  torus(250, 5);
  pop();

  push();
  translate(-200,0,0);
  noStroke();
  rotateZ(frameCount * 0.01);
  //rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.04);
  pointLight(255, 255, 255, 400, 30, 0);
  specularMaterial(250, 0, 0);
  sphere(30);
  pop();

  push();
  translate(300,100,0);
  noStroke();
  //rotateZ(frameCount * 0.01);
  rotateZ(0.03)
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.04);
  specularMaterial(0,20,123);
  sphere(20);
  pop();

  push();
  translate(-200,300,0);
  noStroke();
  rotateZ(frameCount * 0.01);
  //rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.04);
  specularMaterial(20,50,0);
  sphere(50);
  pop();

  push();
  translate(-300,-300,0);
  noStroke();
  pointLight(200, 255, 255, mouseX, mouseY, 0);
  specularMaterial(150,0,210);
  rotateZ(frameCount * 0.01);
  //rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.04);
  torus(40, 30);
  pop();

  push();
  translate(500,-300,10);
  noStroke();
  ambientLight(0,0,50);
  rotateZ(frameCount * 0.01);
  //rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.04);
  specularMaterial(255,0,102);
  sphere(70);
  pop();

  push();
  translate(-500,350,-100);
  noStroke();
  //ambient
  directionalLight(0,50,80,0,400,60);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.04);
  ambientMaterial(0,0,100);
  sphere(100);
  pop();

  push();
  translate(-500,350,-100);
  noStroke();
  //ambient
  directionalLight(0,50,80,0,400,60);
  //rotateZ(frameCount * 0.01);
  //rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.04);
  ambientMaterial(110,0,100);
  shininess(100);
  torus(150,5);
  pop();

  push();
  translate(-500,350,-100);
  noStroke();
  //ambient
  directionalLight(0,50,80,0,400,60);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.02);
  //rotateY(frameCount * 0.04);
  ambientMaterial(110,0,100);
  torus(150,5);
  pop();

  push();
  translate(500,350,-100);
  noStroke();
  //ambient
  directionalLight(0,50,80,0,400,60);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.04);
  specularMaterial(30,10,100);
  sphere(30);
  pop();

  push();
  translate(500,-500,-100);
  noStroke();
  //ambient
  directionalLight(10,0,80,-300,400,60);
  rotateZ(frameCount + 0.01);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.04);
  specularMaterial(100,0, 0);
  sphere(30);
  pop();


}


