
//// global variables
const playerOne = 'x'
const playerTwo = 'o'
const grid = document.querySelectorAll('.grid')
const box = document.querySelectorAll('.box')
const restartBtn = document.querySelector('button')

///turn selector
let whosTurn = 'O';

// let whosTurn = "<img src='https://upload.wikimedia.org/wikipedia/commons/f/f1/Ski_trail_rating_symbol_red_circle.png'>";



/// winning combos
const winnerCombo = [
  [0, 1, 2, 3],
  [1, 2, 3, 4]
]


//check winner

////// event listeners
for (let i = 0; i < box.length; i++) {
box[i].addEventListener('click', () => {
  console.log(i);
  box[i].innerHTML=whosTurn;
  if(whosTurn === 'X') {
  whosTurn = 'O'
  } else if(whosTurn === 'O') {
  whosTurn = 'X'
  
  //document.getElementById('.box').style.color = 'blue';
}});
}
//check winner
function checkWin() {
  for (let i = 0; i < winnerCombo.length; i++) {
    const boxOne = box[winnerCombo[i][0]]
    const boxTwo = box[winnerCombo[i][1]]
    const boxThree = box[winnerCombo[i][2]]
    const boxFour = box[winnerCombo[i][3]]
  } 
  if (
    boxOne.innerHTML.contains('X') &&
    boxTwo.innerHTML.contains('X') &&
    boxThree.inerHTML.contains('X') &&
    boxFour.innerHTML.contains('X')
  ){
    console.log('winner')
  }}
  
restartBtn.addEventListener('click', () => {
location.reload();
});
//////

