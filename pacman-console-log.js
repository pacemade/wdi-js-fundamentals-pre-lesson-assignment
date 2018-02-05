// console.log("Pacman eating ghosts for the shits");
//
// var ghosts = ["Haroo", "Ginsang", "Chimpoway", "Shakeykey"];

// console.log('There are ' + ghosts.length + ' ghosts');
// console.log('Their names are:');
// console.log(ghosts[0]);
// console.log(ghosts[1]);
// console.log(ghosts[2]);
// console.log(ghosts[3]);

// var haroo = {};
// haroo.colour = 'hot pink';
// haroo.personality = 'bitchin';
// console.log(haroo);

// for (var index = 0; index < ghosts.length; index++) {
//   console.log('Pac-Man eats ' + ghosts[index]);
// }

// var powerPelletEaten = false;
// var ghosts = 4;
//
// while (true) {
//   console.log('Ghosts remaining: ' + ghosts);
//   if (powerPelletEaten == false) {
//     console.log('PacDude eats the power pellet');
//     powerPelletEaten = true;
//   } else if  (ghosts > 0) {
//     console.log('PacDude eats a ghost');
//     ghosts--;
//   } else {
//     break;
//   }
// }
//
// console.log('PacDude returns from a long day of eating that thicc ghost ass');

// var ghost = 'Blinky';
//
// var colour;
//
// switch (ghost) {
//   case 'Inky':
//     colour = 'Cyan';
//     break;
//   case 'Blinky':
//     colour = 'Purple';
//     break;
//   case 'Pinky':
//     colour = 'Doodoo Brown'
//     break;
//   case 'Clyde':
//     colour = 'Red'
//     break;
// }
//
// console.log(ghost + ' is the colour ' + colour);

// var eatDot = function() {
//   console.log('MUNCH');
// }
//
// var highScores = [];
// function addHighScore(highScoreList, playerInitials, score) {
//   var record = {player: playerInitials, score: score };
//   highScoreList.push(record);
// }

function addScore(currentScore, eaten) {
  switch (eaten) {
    case 'dot':
      scoreToAdd = 10;
      break;
    case 'powerPellet':
      scoreToAdd = 50;
      break;
    case 'firstGhost':
      scoreToAdd = 200;
      break;
    case 'secondGhost':
      scoreToAdd = 400;
      break;
  }
  return currentScore + scoreToAdd
}

var score = 0;

score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'powerPellet');
score = addScore(score, 'firstGhost');
console.log('Your score: ' + score);
