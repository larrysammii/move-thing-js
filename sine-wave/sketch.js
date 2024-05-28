/// <reference path="../sine-wave/node_modules/@types/p5/global.d.ts" />

// import p5 from 'p5'



function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  angleMode(DEGREES)
}

function draw(){

  background(30)
  rotateX(60)

  noFill()
  stroke(255)
  for ( let i = 0; i < 50; i++){
    
    beginShape()


    let r = map(sin(frameCount / 2), -1, 1, 100, 200)
    let g = map(i, 0, 20, 100, 200)
    let b = map(cos(frameCount), -1, 1, 200, 100)

    stroke(r, g, b)

    rotate(5)
    for ( let j = 0; j < 360; j += 60){
      let rad = i * 3
      let x = rad * cos(j)
      let y = rad * sin(j)
      let z = cos(frameCount * 2 + i * 5) * 50

      vertex(x, y, z)
    }
    endShape(CLOSE)
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
