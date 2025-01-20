const RollDice = document.getElementById("roll-dice");
const p2_curVal = document.getElementById("player2-current-val");
const p1_curVal = document.getElementById("player1-current-val");
const image = document.getElementById("dice-img");

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

// let val;

RollDice.addEventListener("click", function (e) {
  console.log(e.event);
  let val = getRandomIntInclusive(1, 6);
  image.src = `./dice-images/dice-${val}.png`;

  p2_curVal.innerText = val;
  p1_curVal.innerText = val;
});
