// Demonstrates how to use the p5.plotSvg library to export 
// SVG files from a "generative art" sketch in p5.js.

// This line of code disables the p5.js "Friendly Error System" (FES), 
// to prevent some distracting warnings. Feel free to comment this out.
p5.disableFriendlyErrors = true;

let bDoExportSvg = false;
let myRandomSeed = 12345;
let regenerateButton;
let exportSvgButton;
let radius = 175
let x1;
let y1;
let x2;
let y2;
// let pick1 = 0.9;
// let pick2 = 0.9;
// let pick3 = 0.9;
// let pick4 = 0.9;
const circleNumb = ["0.25", "0.62", "1"];

let random = Math.floor(Math.random() * circleNumb.length);
console.log(random, circleNumb[random]);

//------------------------------------------------------------
function setup() {
  createCanvas(576, 384); // 6"x4" at 96 dpi

  regenerateButton = createButton('Regenerate');
  regenerateButton.position(0, height);
  regenerateButton.mousePressed(regenerate);

  exportSvgButton = createButton('Export SVG');
  exportSvgButton.position(100, height);
  exportSvgButton.mousePressed(initiateSvgExport);
}

//------------------------------------------------------------
// Make a new random seed when the "Regenerate" button is pressed
function regenerate() {
  myRandomSeed = round(millis());
}
// Set the SVG to be exported when the "Export SVG" button is pressed
function initiateSvgExport() {
  bDoExportSvg = true;
}

//------------------------------------------------------------

// function getRandomPointOnCircumference(centerX, centerY, radius) {
//   let angle = Math.random() * 2 * Math.PI;
//   let x = 288 + radius * Math.cos(angle);
//   let y = 192 + radius * Math.sin(angle);
// }

// // Example Usage:
// const circleX = 100; // Center X
// const circleY = 100; // Center Y
// const circleRadius = 50; // Radius

// const randomPoint = getRandomPointOnCircumference(circleX, circleY, circleRadius);
// console.log(randomPoint); // { x: 100 + 49.9..., y: 100 + 10.1... }


//------------------------------------------------------------

function draw() {
  randomSeed(myRandomSeed);
  background(255);
  strokeWeight(1);
  stroke(0);
  noFill();

  if (bDoExportSvg) {
    beginRecordSvg(this, "plotSvg_generative_" + myRandomSeed + ".svg");
  }


  // Set the SVG group by stroke color to `true`, so that strokes 
  // of the same color are grouped together in the SVG file. 
  setSvgGroupByStrokeColor(true);
  circle(288, 192, 2 * radius);
  circle(288, 192, 1.24 * radius);
  circle(288, 192, 0.5 * radius);

  // fill(0, 0, 0)
  // Draw 100 random lines: some red, some black.
  let nLines = 125;
  for (let i = 0; i < nLines; i++) {

    let angle1 = Math.random() * 2 * Math.PI;
    let random1 = Math.floor(Math.random() * circleNumb.length);
    let x1 = 288 + ((random1, circleNumb[random1]) * radius) * Math.cos(angle1);
    // let random2 = Math.floor(Math.random() * circleNumb.length);
    let y1 = 192 + ((random1, circleNumb[random1]) * radius) * Math.sin(angle1);


    let angle2 = Math.random() * 2 * Math.PI;
    let random3 = Math.floor(Math.random() * circleNumb.length);
    let x2 = 288 + ((random3, circleNumb[random3]) * radius) * Math.cos(angle2);
    // let random4 = Math.floor(Math.random() * circleNumb.length);
    let y2 = 192 + ((random3, circleNumb[random3]) * radius) * Math.sin(angle2);

    if ((random1, circleNumb[random1]) == "1") {
      cr1 = 255;
      cb1 = 25;
    } else if ((random1, circleNumb[random1]) == "0.62") {
      cr1 = 125;
      cb1 = 125;
    } else if ((random1, circleNumb[random1]) == "0.25") {
      cr1 = 50;
      cb1 = 255;
    }

    if ((random3, circleNumb[random3]) == "1") {
      cr2 = 255;
      cb2 = 25;
    } else if ((random3, circleNumb[random3]) == "0.62") {
      cr2 = 125;
      cb2 = 125;
    } else if ((random3, circleNumb[random3]) == "0.25") {
      cr2 = 50;
      cb2 = 255;
    }
    stroke(0);
    // stroke((cr1+cr2)/2, 0, (cb1+cb2)/2, 255);
    line(x1, y1, x2, y2);

    stroke(0);
  }

  if (bDoExportSvg) {
    endRecordSvg();
    bDoExportSvg = false;
  }
  noLoop()
}