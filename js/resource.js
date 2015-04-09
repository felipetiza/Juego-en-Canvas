var fps = 0, now, lastUpdate = (new Date)*1 - 1, fpsFilter = 50;

var ElementLives  = document.getElementById("livesNum");
var ElementPoints = document.getElementById("scoreNum");
var ElementLight1 = document.getElementById("light1");
var ElementLight2 = document.getElementById("light2");
var ElementTable  = document.getElementsByTagName("table")[0];
var ElementShadow = document.getElementById("shadow");
var ElementSound  = document.getElementById("sound");
var ElementLogo   = document.getElementById("logo");
var ElementLine   = document.getElementsByTagName("hr")[0];
var ElementBody   = document.getElementsByTagName("body")[0];
var ElementCanvas = document.getElementsByTagName("canvas")[0];

function getFps(){
  	var thisFrameFPS = 1000 / ((now = new Date) - lastUpdate);
  	fps += (thisFrameFPS - fps) / fpsFilter;
  	lastUpdate = now*1-1;

  	return fps;
}

window.requestAnimFrame=(function(){
	return window.requestAnimationFrame ||
  	window.webkitRequestAnimationFrame ||
  	window.mozRequestAnimationFrame ||
  	function(callback){
  		window.setTimeout(callback,17);
  	};
})();

function templateSetBackgroundColor(color){
	ElementCanvas.style.background = color;
}

function templateSetFullscreen(canvas){
	if(fullScreen){
		var w = window.innerWidth/canvas.width;
		var h = window.innerHeight/canvas.height;
		var scale = Math.min(h,w);

		canvas.style.width      = (canvas.width*scale)+'px';
		canvas.style.height     = (canvas.height*scale)+'px';
		canvas.style.position   = 'fixed';
		canvas.style.left       = '50%';
		canvas.style.top        = '50%';
		canvas.style.marginLeft =- (canvas.width*scale)/2+'px';
		canvas.style.marginTop  =- (canvas.height*scale)/2+'px';
		// canvas.style.transition = "all 2s";

		ElementTable.style.visibility = "hidden";
		ElementShadow.style.visibility = "hidden";
		ElementLine.style.visibility = "hidden";
		ElementLight1.style.visibility = "hidden";
		ElementLight2.style.visibility = "hidden";
		ElementSound.style.visibility = "hidden";
		ElementLogo.style.visibility = "hidden";
		ElementBody.style.background = "#010B15";
	}else{
		canvas.style.width      = '';
		canvas.style.height     = '';
		canvas.style.position   = '';
		canvas.style.left       = '';
		canvas.style.top        = '';
		canvas.style.marginLeft = '';
		canvas.style.marginTop  = '';

		ElementTable.style.visibility = "";
		ElementShadow.style.visibility = "";
		ElementLine.style.visibility = "";
		ElementLight1.style.visibility = "";
		ElementLight2.style.visibility = "";
		ElementSound.style.visibility = "";
		ElementLogo.style.visibility = "";
		ElementBody.style.background = "";
	}
}

function templateSetLives(lives){ ElementLives.innerHTML = formatNumbers(lives); }
function templateSetPoints(points){ ElementPoints.innerHTML = formatNumbers(points); }

function templateSetLightEfects(enable){
	if(!enable){
		setTimeout(templateSetLightEfects,100);
		ElementLives.style.color  = '#DFE1E4';
		ElementPoints.style.color = '#DFE1E4';
		ElementLight1.src         = "assets/img/lighEffect1.png";
		ElementLight2.src         = "assets/img/lighEffect1.png";
	}else{
		ElementLives.style.color  = '#94A2B7';
		ElementPoints.style.color = '#94A2B7';
		ElementLight1.src         = "assets/img/lighEffect2.png";
		ElementLight2.src         = "assets/img/lighEffect2.png";
	}
}

function templateSetSound(){
	if(sound)
		ElementSound.src = "assets/img/soundFull.png";
	else
		ElementSound.src = "assets/img/soundNotFull.png";
}

function formatNumbers(number){
	var num = new String(number);
	var result = "";
	var isNegative = false;

	if(num.indexOf("-") > -1){
		num = num.substr(1);
		isNegative = true;
	}
	while(num.length > 3){
		result = '.' + num.substr(num.length - 3) + result;
		num = num.substring(0, num.length - 3);
	}
	result = num + result;
	if(isNegative)
		result = "-" + result;

	return result;
}

function formatKey(key){
	var codeAscii = 0;

	if(key == "RETURN")				codeAscii = 8;
	else if(key == "ENTER")			codeAscii = 13;
	else if(key == "SHIFT")			codeAscii = 16;
	else if(key == "CTRL")			codeAscii = 17;
	else if(key == "ALT")			codeAscii = 18;
	else if(key == "ESC")			codeAscii = 27;
	else if(key == "SPACE")			codeAscii = 32;
	else if(key == "LEFT")			codeAscii = 37;
	else if(key == "UP")			codeAscii = 38;
	else if(key == "RIGHT")			codeAscii = 39;
	else if(key == "DOWN")			codeAscii = 40;
	else if(key == "0" ) 			codeAscii = 48;
	else if(key == "1" ) 			codeAscii = 49;
	else if(key == "2" ) 			codeAscii = 50;
	else if(key == "3" ) 			codeAscii = 51;
	else if(key == "4" ) 			codeAscii = 52;
	else if(key == "5" ) 			codeAscii = 53;
	else if(key == "6" ) 			codeAscii = 54;
	else if(key == "7" ) 			codeAscii = 55;
	else if(key == "8" ) 			codeAscii = 56;
	else if(key == "9" ) 			codeAscii = 57;
	else if(key == "PadNum1" ) 		codeAscii = 97;
	else if(key == "PadNum2" ) 		codeAscii = 98;
	else if(key == "PadNum3" ) 		codeAscii = 99;
	else if(key == "PadNum4" ) 		codeAscii = 100;
	else if(key == "PadNum5" ) 		codeAscii = 101;
	else if(key == "PadNum6" ) 		codeAscii = 102;
	else if(key == "PadNum7" ) 		codeAscii = 103;
	else if(key == "PadNum8" ) 		codeAscii = 104;
	else if(key == "PadNum9" ) 		codeAscii = 105;
	else if(key == "A" ) 			codeAscii = 65;
	else if(key == "B" ) 			codeAscii = 66;
	else if(key == "C" ) 			codeAscii = 67;
	else if(key == "D" ) 			codeAscii = 68;
	else if(key == "E" ) 			codeAscii = 69;
	else if(key == "F" ) 			codeAscii = 70;
	else if(key == "G" ) 			codeAscii = 71;
	else if(key == "H" ) 			codeAscii = 72;
	else if(key == "I" ) 			codeAscii = 73;
	else if(key == "J" ) 			codeAscii = 74;
	else if(key == "K" ) 			codeAscii = 75;
	else if(key == "L" ) 			codeAscii = 76;
	else if(key == "M" ) 			codeAscii = 77;
	else if(key == "N" ) 			codeAscii = 78;
	else if(key == "Ñ" ) 			codeAscii = 192;
	else if(key == "O" ) 			codeAscii = 79;
	else if(key == "P" ) 			codeAscii = 80;
	else if(key == "Q" ) 			codeAscii = 81;
	else if(key == "R" ) 			codeAscii = 82;
	else if(key == "S" ) 			codeAscii = 83;
	else if(key == "T" ) 			codeAscii = 84;
	else if(key == "U" ) 			codeAscii = 85;
	else if(key == "V" ) 			codeAscii = 86;
	else if(key == "W" ) 			codeAscii = 87;
	else if(key == "X" ) 			codeAscii = 88;
	else if(key == "Y" ) 			codeAscii = 89;
	else if(key == "Z" ) 			codeAscii = 90;

	// var res = String.fromCharCode(97);
	// codeAscii = nameKey.charCodeAt(0);
	// alert(res.toString());

	return codeAscii;
}

function random(max){
	//return Math.floor(Math.random()*max);
	return ~~(Math.random()*max*1-1);
}

function pressKey(){
	document.addEventListener('keydown',function(evt){
		key = evt.keyCode;
		keyPressed[evt.keyCode] = true;
	},false);
	document.addEventListener('keyup',function(evt){
		keyPressed[evt.keyCode] = false;
	},false);
}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
	if (typeof fill == "undefined")
		fill = true;
	if (typeof radius === "undefined")
		radius = 5;

	ctx.beginPath();
	ctx.moveTo(x + radius, y);
	ctx.lineTo(x + width - radius, y);
	ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
	ctx.lineTo(x + width, y + height - radius);
	ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
	ctx.lineTo(x + radius, y + height);
	ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
	ctx.lineTo(x, y + radius);
	ctx.quadraticCurveTo(x, y, x + radius, y);
	ctx.closePath();

	if(fill)
		ctx.fill();
	if(stroke)
		ctx.stroke();
}




