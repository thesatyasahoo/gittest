// var timeleft = 10;

// var startTime = 0;
// var currentTime = 0;

// function convertSeconds(s) {
  // floor is a methode to convert float into number
//   var min = floor(s / 60); 
//   var sec = s % 60;
// number format is short form nf use to 2 digit number
//   return nf(min, 2) + ':' + nf(sec, 2);
// }

// var ding;

// function preload() {
//   ding = loadSound("ding.mp3");
// }

// function setup() {
//   noCanvas();
//   startTime = millis();


//   var params = getURLParams();
//   console.log(params);
//   if (params.minute) {
//     var min = params.minute;
//     timeleft = min * 60;
//   }

//   var timer = select('#timer');
//   timer.html(convertSeconds(timeleft - currentTime));

//   var interval = setInterval(timeIt, 1000);

//   function timeIt() {
//     currentTime = floor((millis() - startTime) / 1000);
//     timer.html(convertSeconds(timeleft - currentTime));
//     if (currentTime == timeleft) {
//       ding.play();
//       clearInterval(interval);
//       //counter = 0;
//     }
//   }

// }

let time = 10;
let cTime = 0;
let select = ()=>{
  return document.getElementById;
}

function counter(s){
  let min = s / 60;
  let sec = s % 60;
  return nf(min, 2) + ":" + nf(sec, 2);
};

let timer = select('#timer');
timer.html(counter(time - cTime));
