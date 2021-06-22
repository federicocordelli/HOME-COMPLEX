var karma = 0;
var txt = "I";
var i = 200;
let mySound;
let txtScroll;
var about = 0;
let scroll = 0;
var o1 = 0;
var o2 = 0;






function preload() {

 soundFormats('mp3');
mySound = loadSound('addons/theshepherd_audio');

  titleFont = loadFont('addons/Daubenton.otf');
  corpusFont = loadFont('addons/Ortica-Light.otf');
  intlMed = loadFont('addons/SuisseIntl-Medium.otf');
  intlReg = loadFont('addons/SuisseIntl-Regular.otf');
  intlBol = loadFont('addons/SuisseIntl-Bold.otf');
  druk = loadFont('addons/DrukCond-Super.ttf');

cover = loadImage("addons/cornice/cover.png");
type = loadImage("addons/cornice/txt.png");
susy = loadImage("addons/cornice/susy.png");
wilfrid = loadImage("addons/cornice/wilfrid.png");
connor = loadImage("addons/cornice/connor.png");
titus = loadImage("addons/cornice/titus.png");
vicary = loadImage("addons/cornice/vicary.png");




}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(displayWidth, displayHeight, WEBGL);
  noSmooth();


  //Button To ABOUT
  button = createButton('ABOUT');
  button.position(width-200, 70);
  button.mouseClicked(abouty);
  button.addClass('button');

  //Button To ESC FROM ABOUT
  buttonE = createButton('ESC');
  buttonE.position(width-200, 70);
  buttonE.mouseClicked(escy);
  buttonE.addClass('buttonUsed');

  //Button To START
  buttonST = createButton('TO BEGIN THE EXPERIENCE CLICK HERE OR SCROLL DOWN');
  buttonST.position(width/2, height/2);
  buttonST.mouseClicked(starty);
  buttonST.addClass('button');
  buttonST.center();

/*
  //Button To sogns of innocence
  buttonS = createButton('Songs Of Innocence');
  buttonS.position(200, (height/2)-180);
  buttonS.mouseClicked(innocency);
  buttonS.addClass('buttonUsed');

  buttonH = createButton('The Shepherd');
  buttonH.position(500, (height/2)-136);
  buttonH.mouseClicked(sheppy);
  buttonH.addClass('buttonUsed');

  //Button To sogns of experience
  buttonL = createButton('Songs Of Experience');
  buttonL.position(200, (height/2)-100);
  buttonL.mouseClicked(experiency);
  buttonL.addClass('buttonUsed');


//Button To Reset
buttonOS = createButton('OPEN SOURCE');
buttonOS.position(width-200, height-70);
buttonOS.mouseClicked(sourcy);
buttonOS.addClass('button');
*/
}

function draw() {
  background('#000000');
  console.log(scroll);


  imageMode(CENTER);

image(cover, (width/2),(height/2), windowWidth, (windowWidth/16)*9);
image(susy, (width/2)+(mouseX*0.01),(height/2), windowWidth, (windowWidth/16)*9);
image(titus, (width/2)-(mouseX*0.03),(height/2), windowWidth, (windowWidth/16)*9);
image(wilfrid, (width/2)-(mouseX*0.01),(height/2), windowWidth, (windowWidth/16)*9);
image(vicary, (width/2)+(mouseX*0.02),(height/2), windowWidth, (windowWidth/16)*9);
image(connor, (width/2)+(mouseX*0.06),(height/2), windowWidth, (windowWidth/16)*9);
image(type, (width/2),(height/2), windowWidth, (windowWidth/16)*9);





/*
push();
  fill('yellow');
  textAlign(CENTER);
  textFont(intlBol);
  textSize(35);
  //text(karma, width/2, height/2);
  text("A TRAVEL AROUND IMAGINATION", width/2, 110);
pop();
*/


// push();
//   fill('black');
//   textAlign(LEFT);
//   textFont(titleFont);
//   textSize(15);
//   //text(karma, width/2, height/2);
//   text("WILLIAM BLAKE", 100, 65);
// pop();


/*
push();
  textSize(80);
  textAlign(CENTER);
  fill("#92a8d1");
  text(txt, mouseX, mouseY);
pop();
*/
/*
push();
  textFont(intlReg);
  textAlign(CENTER);
  fill('yellow');
  textSize(30);
  text("A STORY ABOUT CONTAMINATION", width/2, 70);
pop();
*/

  //noCursor();

push();
noStroke();
fill("#001110")
rect(0,0,windowWidth,0+scroll);
pop();
push();
  fill('#f56c63');
  textAlign(CENTER);
  textFont(intlBol);
  textSize(100);
  //text(karma, width/2, height/2);
  text("LET'S START", width/2, -3+(scroll*0.4));
pop();

/*
push();
  fill('yellow');
  textAlign(CENTER);
  textFont(druk);
  textSize(20);
  //text(karma, width/2, height/2);
  text("BLUE CEREALS", width/2, height-50);
pop();
*/
//image(first2, (width-580)+(mouseX/60),(150)+(-mouseX/85)+(-mouseY/100), 690/2, 1124/2);
//image(first8, (200)+(mouseX/60)+(mouseY/80),(-75), 690/2, 1124/2);

if (about === 1) {
  fill(0,20,0,180);
  rect(0,0,windowWidth,windowHeight);
  noStroke();
  fill('yellow');
  rect((width/2)-300,(height/2)-400,600,800,120,120,120,120);

push();
textFont(intlMed);
textAlign(CENTER,CENTER);
fill('black');
textSize(25);
  text("this is a university project",width/2,(height/2));
pop();
push();
  fill('black');
  textAlign(CENTER);
  textFont(intlMed);
  textSize(10);
  //text(karma, width/2, height/2);
  text("Complex Artefacts and Design System Studio \n- Carlotta Calabria, Federico Cordelli, Yuri Michele Piemontese, Valentina Zaccaria - \nProfessors: Ilaria Mariani - Mariana Ciancia", width/2, (height/2)+350);
pop();
}

if (scroll>0 && scroll<windowHeight) {

about=0;
buttonE.removeClass('button');
buttonE.addClass('buttonUsed');
button.removeClass('button');
button.addClass('buttonUsed');
// button.removeClass('buttonUsed');
// button.addClass('button');
buttonST.removeClass('button');
buttonST.addClass('buttonUsed');

} else if (scroll <= 0 && about ===0) {
  buttonST.removeClass('buttonUsed');
  buttonST.addClass('button');
  button.removeClass('buttonUsed');
  button.addClass('button');

  scroll=0;

}
 if (scroll > windowHeight) {
   about=0;

window.open("https://federicocordelli.github.io/PROLOGUE-COMPLEX/");
document.location.reload();

}

push();
textFont(corpusFont);
textAlign(LEFT);
fill(248,241,216,o1);
textSize(25);
  text("Introduction\nThe Shepherd\nThe Echoing Green\nThe Lamb\nThe Little Black Boy\nThe Blossom\nThe Chimney-Sweeper\nThe Little Boy Lost\nThe Little Boy Pound\nLaughing Song\nA Cradle Song\nThe Divine Image\nHoly Thursday\nNight\nSpring\nNurse’s Song\nInfant Joy\nA Dream\nOn Another’s Sorrow",500,(height/2)-143);
pop();


push();
textFont(corpusFont);
textAlign(LEFT);
fill(248,241,216,o2);
textSize(25);
  text("Introduction\nEarth’s Answer\nThe Clod and the Pebble\nHoly Thursday\nThe Little Girl Lost\nThe Little Girl Found\nThe Chimney-Sweeper\nNurse’s Song\nThe Sick Rose\nThe Fly\nThe Angel\nThe Tiger\nMy Pretty Rose-Tree\nAh, Sunflower\nThe Lily\nThe Garden of Love\nThe Little Vagabond\nLondon\nThe Human Abstract\nInfant Sorrow\nA Poison Tree\nA Little Boy Lost\nA Little Girl Lost\nA Divine Image\nA Cradle Song\nThe Schoolboy\nTo Tirzah\nThe Voice of the Ancient Bard",500,(height/2)-63);
pop();





}



//Resize Button Function
function abouty() {
  window.open("https://federicocordelli.github.io/ABOUT-COMPLEX/","_self");
  /*
  about = 1;
  button.removeClass('button');
  button.addClass('buttonUsed');
  buttonE.removeClass('buttonUsed');
  buttonE.addClass('button');
  buttonST.removeClass('button');
  buttonST.addClass('buttonUsed');
  */
}
/*
function innocency() {
if (o1===0) {
  o1=255;
  o2=0;
} else if (o1===255) {
  o1=0;
  o2=0;
}
}
*/
/*
function experiency() {
  if (o2===0) {
    o2=255;
    o1=0;
  } else if (o2===255) {
    o2=0;
    o1=0;
  }
}
*/
function escy() {
  about = 0;
  buttonE.removeClass('button');
  buttonE.addClass('buttonUsed');
  button.removeClass('buttonUsed');
  button.addClass('button');
  buttonST.removeClass('buttonUsed');
  buttonST.addClass('button');

}

function lefty() {
  i = i-1
  karma = (karma *0) + 1;
  if (karma === 1) {
    txt = "Jesus";
  }
}

function lefty1() {
  i = i-1
  karma = (karma *0) + 2;
  if (karma === 2) {
    txt = "People";
  }
}

function lefty2() {
  i = i-1
  karma = (karma *0) + 3;
  if (karma === 3) {
    txt = "not lead";
  }
}

function musicplease() {
  mySound.play();
}

function pleasemusic() {
  mySound.pause();
}


function openy() {

  //fake
window.open("index0.html?karmaPoints=" +(karma), "_self");

}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  //resizeCanvas(displayWidth, displayHeight, WEBGL);

  return false;
}
/*
function savability() {
  saveCanvas('Blake_Shephard', 'png');
  return false;
}

function sheppy() {
  window.open("https://federicocordelli.github.io/dig/");

}
*/
/*
function sourcy() {
  window.open("https://github.com/federicocordelli/DIG-HOME");

}
*/

function starty() {
  window.open("https://federicocordelli.github.io/PROLOGUE-COMPLEX/","_self");
}





function mouseWheel(event) {
  print(event.delta);

  //move the square according to the vertical scroll amount
  txtScroll += event.delta;
  scroll += event.delta;

  //uncomment to block page scrolling
  //return false;
}
