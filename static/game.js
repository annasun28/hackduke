/**
 * Created by rachelbransom on 11/7/15.
 */

var canvas = document.createElement("canvas");

var ctx = canvas.getContext("2d");

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);

// background image

var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;

};

bgImage.src = "images/grass.jpg"