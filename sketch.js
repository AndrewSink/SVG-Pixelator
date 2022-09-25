// Written by Andrew Sink, September 2022

console.log("Hi! https://twitter.com/AndrewASink")

let img; // creates image variable
let elementSize // element size
let startx = 0 // starting x coordinate
let starty = 0 // starting y coordinate
let colorBoolean = true
let elementOutline = false
let squareElement = true

function preload() {
    img = loadImage('cat_clean.jpg'); // preloads a picture
    input = createFileInput(updateImage); // create 'choose file' file input button
    input.position(0, 500) // places file input under image

    elementSlider = createSlider(10, 50, 15, 1);
    elementSlider.position(0, 100);
    elementSlider.style('width', '150px');

}

function elementShape() {
    console.log(squareElement)
    squareElement = !squareElement
    console.log(squareElement)
    initialize()
}

function outlineElement() {
    if (elementOutline === false) {
        stroke(180)
        updateScreen()
        elementOutline = !elementOutline
    } else if (elementOutline === true) {
        noStroke()
        updateScreen()
        elementOutline = !elementOutline
    }
}

function setup() {
    let cnv = createCanvas(windowWidth - 225, windowHeight, SVG); // creates canvas
    cnv.position(225, 0);
    noStroke()
    updateScreen()
    elementSlider.input(initialize)

}

function initialize() {
    clear()
    if (colorBoolean === true) {
        if (squareElement === false) {
            var elementSize = elementSlider.value(); // sets element size
            for (var starty = 0; starty < img.height; starty++) {
                for (var startx = 0; startx < img.width; startx++) {
                    var index = (startx + starty * img.width) * 4;
                    var ir = 255 - img.pixels[index + 0];
                    var ig = 255 - img.pixels[index + 1];
                    var ib = 255 - img.pixels[index + 2];
                    var r = img.pixels[index + 0];
                    var g = img.pixels[index + 1];
                    var b = img.pixels[index + 2];
                    var bright = ((0.3 * ir) + (0.59 * ig) + (0.11 * ib)) // sets pixel value to adjusted grayscale
                    fill(r, g, b);
                    circle(startx + (.5 * elementSize), starty + (.5 * elementSize), elementSize)

                    startx = startx + elementSize // set new startx value // moves to next x value based on size
                }
                starty = starty + elementSize // set new starty value // moves to next y value based on size
            }
        } else if (squareElement === true) {
            var elementSize = elementSlider.value(); // sets element size
            for (var starty = 0; starty < img.height; starty++) {
                for (var startx = 0; startx < img.width; startx++) {
                    var index = (startx + starty * img.width) * 4;
                    var ir = 255 - img.pixels[index + 0];
                    var ig = 255 - img.pixels[index + 1];
                    var ib = 255 - img.pixels[index + 2];
                    var r = img.pixels[index + 0];
                    var g = img.pixels[index + 1];
                    var b = img.pixels[index + 2];
                    var bright = ((0.3 * ir) + (0.59 * ig) + (0.11 * ib)) // sets pixel value to adjusted grayscale
                    fill(r, g, b);
                    square(startx, starty, elementSize)
                    startx = startx + elementSize // set new startx value // moves to next x value based on size
                }
                starty = starty + elementSize // set new starty value // moves to next y value based on size
            }
        }
    } else if (colorBoolean === false) {
        if (squareElement === false) {
            var elementSize = elementSlider.value(); // sets element size
            for (var starty = 0; starty < img.height; starty++) {
                for (var startx = 0; startx < img.width; startx++) {
                    var index = (startx + starty * img.width) * 4;
                    var ir = 255 - img.pixels[index + 0];
                    var ig = 255 - img.pixels[index + 1];
                    var ib = 255 - img.pixels[index + 2];
                    var r = img.pixels[index + 0];
                    var g = img.pixels[index + 1];
                    var b = img.pixels[index + 2];
                    var bright = ((0.3 * ir) + (0.59 * ig) + (0.11 * ib)) // sets pixel value to adjusted grayscale
                    fill(r, g, b);
                    circle(startx + (.5 * elementSize), starty + (.5 * elementSize), elementSize)

                    startx = startx + elementSize // set new startx value // moves to next x value based on size
                }
                starty = starty + elementSize // set new starty value // moves to next y value based on size
            }
        } else if (squareElement === true) {
            var elementSize = elementSlider.value(); // sets element size
            for (var starty = 0; starty < img.height; starty++) {
                for (var startx = 0; startx < img.width; startx++) {
                    var index = (startx + starty * img.width) * 4;
                    var ir = 255 - img.pixels[index + 0];
                    var ig = 255 - img.pixels[index + 1];
                    var ib = 255 - img.pixels[index + 2];
                    var r = img.pixels[index + 0];
                    var g = img.pixels[index + 1];
                    var b = img.pixels[index + 2];
                    var bright = ((0.3 * ir) + (0.59 * ig) + (0.11 * ib)) // sets pixel value to adjusted grayscale
                    fill(r, g, b);
                    square(startx, starty, elementSize)
                    startx = startx + elementSize // set new startx value // moves to next x value based on size
                }
                starty = starty + elementSize // set new starty value // moves to next y value based on size
            }
        }
        filter(GRAY);
    }

}

function updateImage(file) {
    if (file.type === 'image') {
        img = loadImage(file.data, updateScreen);
    } else {
        img = null;
    }
}

function updateScreen() {
    clear()
    img.loadPixels(); // loads image

    if (img.width >= canvas.width) {
        img.resize(canvas.width, 0);
    }

    img.updatePixels(); // updates image

    if (img.height >= canvas.height) {
        img.resize(0, canvas.height);
    }

    img.updatePixels(); // updates image

    initialize()
}

function windowResized() {
    clear()
    resizeCanvas(windowWidth - 300, windowHeight, SVG)
    updateScreen()
    initialize()
}

function mono() {
    colorBoolean = !colorBoolean
    console.log(colorBoolean)
    initialize()
}

function exportSVG() {
    save();
}