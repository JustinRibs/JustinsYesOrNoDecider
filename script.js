'use strict';

const gifSrc = document.querySelector('.gifSrc');
const decideBtn = document.querySelector('.decide-btn');
gifSrc.src = '';

function getRandom() {
  let random = Math.floor(Math.random() * 2);
  return random;
}

function imgSrcDecide() {
  let num = getRandom();
  if (num === 0) {
    gifSrc.src = 'no.gif';
  } else if (num === 1) {
    gifSrc.src = 'doIt.gif';
  }
}

decideBtn.addEventListener('click', imgSrcDecide);
