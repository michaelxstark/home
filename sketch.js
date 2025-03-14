let rectSize;
let distTB;

function setup() {
  pixelDensity(1)
  //createCanvas(windowWidth*0.4, windowWidth*0.4);

  let cnv = createCanvas(windowWidth*0.6, windowWidth*0.6);
      cnv.parent("canvas");

  noStroke();
  rectSize = 10;
  distTB = 100;
}

function draw() {
  background(255);
  if (mouseX < width * 0.5 && mouseY < height * 0.5) {
    for (let i = 0; i <= width; i += rectSize) {
      fill(
        noise(frameCount * 0.0125 + i) * 255,
        noise(frameCount * 0.025 + i) * 255,
        noise(frameCount * 0.05 + i) * 255,
        noise(frameCount * 0.075 + i) * 100 + 155
      );
      rect(
        i,
        distTB,
        rectSize + noise(frameCount * 0.01 + i) * distTB - distTB * 0.5,
        height - distTB * 2
      );
    }

  } else if (mouseX > width * 0.5 && mouseY < height * 0.5) {
    for (let i = 0; i <= width * 0.02; i++) {
      push();
      noFill();
      strokeWeight(5);
      stroke(
        noise(frameCount * 0.0125 + i) * 255,
        noise(frameCount * 0.025 + i) * 255,
        noise(frameCount * 0.05 + i) * 255,
        noise(frameCount * 0.075 + i) * 100 + 155
      );
      circle(
        width * 0.5 + sin(frameCount * 0.025 + i) * width * 0.25,
        height * 0.25 + noise(frameCount * 0.025 + i) * height * 0.5,
        width * 0.1 + i
      );
      pop();
    }

  } else if (mouseX < width * 0.5 && mouseY > height * 0.5) {
    push();
    noFill();
    for (let c = 0; c < width*0.02; c++){
        stroke(
        noise(frameCount * 0.0125+c) * 255,
        noise(frameCount * 0.025+c) * 255,
        noise(frameCount * 0.05+c) * 255,
        noise(frameCount * 0.0125+c) * 155 + 100
      );
        strokeWeight(10-c);
        beginShape();
        for (let i = 0; i <= 360; i += width * 0.05) {
          curveVertex(
            width * 0.5 +
              cos(radians(i)) * (width * 0.25-c*width*0.01) +
              noise(frameCount * 0.01 + i) * width * 0.5 -
              width * 0.25,
            height * 0.5 +
              sin(radians(i)) * (width * 0.25-c*width*0.01) +
              sin(frameCount * 0.1 + i) * height * 0.05
          );
        }
        endShape(CLOSE);
    }

    pop();

  } else if (mouseX > width * 0.5 && mouseY > height * 0.5) {
    for (let x = 0; x <= width; x += rectSize) {
      for (let y = distTB; y < height - distTB; y += rectSize) {
        fill(
          noise(frameCount * 0.0125 + (x + 1) * (y + 1)) * 255,
          noise(frameCount * 0.025 + (x + 1) * (y + 1)) * 255,
          noise(frameCount * 0.05 + (x + 1) * (y + 1)) * 255,
          noise(frameCount * 0.075 + (x + 1) * (y + 1)) * 200 + 55
        );
        square(
          x,
          y,
          rectSize * 1.25 * noise(frameCount * 0.0125 + ((x + 1) % ((y+1) * (x+1))))
        );
      }
    }
  }
}
