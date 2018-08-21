var johnAge = 50;
var johnHeight = 177;
var benAge = 50;
var benHeight = 177;

var johnScore = (johnAge * 5) + johnHeight;
var benScore = (benAge * 5) + benHeight;
/*
if (johnScore > benScore) {
  console.log('John wins! His score is' + ' ' + johnScore);
  console.log('Ben loses! His score is' + ' ' + benScore);
} else if (johnScore === benScore) {
  console.log('Its a tie');
} else {
  console.log('Ben wins! His score is' + ' ' + benScore);
  console.log('John loses! His score is' + ' ' + johnScore);

}
*/


var maryHeight = 177;
var maryAge = 50;
var maryScore = (maryAge * 5) + maryHeight;

if (johnScore > benScore && johnScore > maryScore) {
  console.log('John Wins with ' + johnScore + 'points.');
} else if (benScore > johnScore && benScore > maryScore) {
  console.log('Ben Wins with ' + benScore + 'points.');
} else if (maryScore > johnScore && maryScore > benScore) {
  console.log('Mary Wins with ' + maryScore + 'points.');
} else {
  console.log('What are the odds... they are all equal');
}
