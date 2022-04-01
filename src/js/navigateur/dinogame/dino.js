import { incrementCustomProperty, getCustomProperty, setCustomProperty } from "./updateCustomProperty.js";

const dinoElem = document.querySelector('[data-dino]');
const JUMP_SPEED = 0.45;
const GRAVITY = 0.0015;
const DINO_FRAME_COUNT = 2;
const FRAME_TIME = 100;

let isJumping;
let dinoFrame;
let currentFrameTime;
let yVelocity;

export function setupDino() {
  isJumping = false;
  dinoFrame = 0;
  currentFrameTime = 0;
  yVelocity = 0;

  setCustomProperty(dinoElem, "--bottom", 0);

  document.removeEventListener("keydown", onJump);
  document.removeEventListener("click", onJump);
  document.addEventListener("keydown", onJump);
  document.addEventListener("click", onJump);
}

export function updateDino(delta, speedScale) {
  handleRun(delta, speedScale);
  handleJump(delta);
}

export function getDinoRect() {
  return dinoElem.getBoundingClientRect();
}

export function setDinoLose() {
  dinoElem.src = "src/img/dino-lose.png";
}

function handleRun(delta, speedScale) {
  if(isJumping) {
    dinoElem.src = 'src/img/dino-stationary.png';
    return;
  }

  if(currentFrameTime >= FRAME_TIME) {
    dinoFrame = (dinoFrame + 1) % DINO_FRAME_COUNT;
    dinoElem.src = `src/img/dino-run-${dinoFrame}.png`;
    currentFrameTime -= FRAME_TIME;
  }

  currentFrameTime += delta * speedScale;
}

function handleJump(delta) {
  if(!isJumping) return;

  incrementCustomProperty(dinoElem, "--bottom", yVelocity * delta);
  
  if(getCustomProperty(dinoElem, "--bottom") <= 0) {
    setCustomProperty(dinoElem, "--bottom", 0);
    isJumping = false;
  }

  yVelocity -= GRAVITY * delta;
}

function onJump(e) {
  if(isJumping) return;

  if(e.code === "Space" || e.type === "click") {
    yVelocity = JUMP_SPEED;
    isJumping = true;
  }
}