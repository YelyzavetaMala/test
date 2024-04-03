let toTop = document.getElementById('toTop');
toTop.style.display = 'none';
window.addEventListener('scroll', () => {
    if (this.scrollY > 200) {
        toTop.style.display = 'block';
    } else {
        toTop.style.display = 'none';
    }
})

toTop.onclick = function () {
      window.scrollTo({
          top: 0,
        behavior: 'smooth' 
      });
}



window.focus();

let camera, scene, renderer;
let world;
let lastTime;
let stack;
let overhangs;
const boxHeight = 1;
const originalBoxSize = 3;
let autopilot;
let gameEnded;
let robotPrecision;

const scrolElement = document.getElementById("score");
const instructionsElement = document.getElementById("instructions");
const recultsElement = document.getElementById("recults");

init();

function setRobotPrecision() {
    robotPrecision = Math.random() * 1 - 0.5;
}

function init() {
    autopilot = true;
    gameEnded = false;
    lastTime = 0;
    stack = [];
    overhangs = [];
    setRobotPrecision();
}


    