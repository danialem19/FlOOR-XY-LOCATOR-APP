float x;
float y;
PImage img; 
String message;

import processing.opengl.*;
String typing = "";
void setup() {
  size(998, 613); 
  noStroke();  
  img = loadImage("maps/storeMap.jpg");
}

boolean on=true;
void draw() { 
  int indent = 25;
  background(51);
  image(img, 0, 0);

  if(frameCount% 10== 0) {
    if(on)
        fill(0);
    else
        fill(255,0,0);
        stroke(255);
    on = !on;
  }
 
  ellipse(xCord, yCord, 15, 15);
  //ellipse(mouseX, mouseY, 15, 15);
}
