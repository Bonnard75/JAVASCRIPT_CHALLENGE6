"use strict";

const dauphinsScores = [85, 54, 41];
const koalasScores = [23, 34, 27];

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let dauphinsScoreAverage = calcAverage(
  dauphinsScores[0],dauphinsScores[1],dauphinsScores[2]
);

let koalasScoreAverage = calcAverage(
  koalasScores[0],koalasScores[1],koalasScores[2]
);

console.log(calcAverage);

function checkWinner() {
  if (dauphinsScoreAverage > koalasScoreAverage) {
    return `L'équipe dauphins gagne (${dauphinsScoreAverage} versus ${koalasScoreAverage})`;
  } else {
    return `L'équipe koalas gagne (${koalasScoreAverage} versus ${dauphinsScoreAverage})`;
  }
}

console.log(checkWinner());
