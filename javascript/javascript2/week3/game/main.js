

/**
 *
 *
 * @returns
 */
function createCounter() {
  let value = 0;
  let locked = false;
  return {
    increase() {
      !locked && value++;
    },
    decrease() {
      !locked && value--;
    },
    lock() {
      locked = true;
    },
    getValue() {
      return value;
    }
  };
}

/**
 *
 *
 * @param {*} playerS
 * @param {*} playerL
 * @returns
 */
function createGame(playerS, playerL) {
  const counterS = createCounter();
  const counterL = createCounter();

  return {
    one: counterS,
    two: counterL,
    markFinish() {
      this.two.lock();
      this.one.lock();
    },
    getWinner() {
      if (this.one.getValue() > this.two.getValue()) {
        return playerS;
      } else if (this.one.getValue() < this.two.getValue()) {
        return playerL;
      } else {
        return "It's a tie";
      }
    }
  };
}

/**
 *
 *
 * @param {*} player
 */
function canvasWinner(player) {
  var confettiSettings = { target: player };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}

const startButton = document.querySelector(".btnStart");
const timerSelect = document.querySelector("#dropDownList");
const playerSPresser = document.querySelector(".left > h4");
const playerLPresser = document.querySelector(".right > h4");
const displayMessage = document.querySelector(".gameLog > h3");
const displayTime = document.querySelector(".gameLog > h5");

let intervalID;

// /**
// * for confitti
// */

function resetGame() {
  const game = createGame("canvasLeft", "canvasRight");
  const canvasElements = document
    .querySelectorAll("canvas")
    .forEach(el => (el.style.display = "none"));
    
  playerSPresser.innerHTML = 0;
  playerLPresser.innerHTML = 0;
  displayTime.innerHTML = "";
  startButton.removeEventListener("keydown", () => {});
  return game;
}

startButton.addEventListener("click", () => {
  const newGame = resetGame();
  if (intervalID) {
    clearInterval(intervalID);
  }

  // Time over
  const delayTime = timerSelect.value * 1000;
  setTimeout(() => {
    displayMessage.innerHTML = `Time is over!`;
    startButton.removeEventListener("keydown", counterScore);
  }, delayTime);

  const allowedTime = parseInt(timerSelect.value, 10); // in seconds

  if (isNaN(allowedTime)) {
    return;
  }
  const startTime = new Date();
  const endTime = new Date(startTime).setSeconds(
    startTime.getSeconds() + allowedTime
  );

  intervalID = setInterval(
    () => refreshTimeLeft(endTime, () => clearInterval(intervalID)),
    50
  );

  startButton.addEventListener("keydown", counterScore);

  function counterScore(event) {
    if (event.which == 83) {
      //press S
      playerSPresser.innerHTML = `${newGame.one.getValue()}`;
      newGame.one.increase();
    } else if (event.which == 76) {
      //press L
      playerLPresser.innerHTML = `${newGame.two.getValue()}`;
      newGame.two.increase();
    }
  }

  function refreshTimeLeft(endTime, callback) {
    let timeleft = (endTime - new Date()) / 1000;
    if (timeleft < 0) {
      displayMessage.innerHTML = "Finished";

      const winnerId = newGame.getWinner();
      const canvasLeft = document.getElementById(winnerId);
      canvasLeft.style.display = "flex";
      // const winnerId = newGame.getWinner()
      canvasWinner(winnerId);
      callback();
    } else {
      displayMessage.innerHTML = timeleft + " seconds remaining";
    }
  }
});

timerSelect.addEventListener("change", resetGame);
