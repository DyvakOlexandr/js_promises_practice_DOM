'use strict';

let isClicked = false;

function createMessage(message) {
  const div = document.createElement('div');

  div.setAttribute('data-qa', 'notification');
  div.textContent = message;

  if (message.includes('resolved')) {
    div.classList.add('success');
  }

  if (message.includes('rejected')) {
    div.classList.add('error');
  }
  document.body.appendChild(div);
}

const p1 = new Promise((resolve, reject) => {
  const successMessage = 'First promise was resolved';

  document.addEventListener('click', () => {
    isClicked = true;
    resolve(successMessage);
  });

  setTimeout(() => {
    if (isClicked === false) {
      reject(new Error('First promise was rejected'));
    }
  }, 3000);
});

p1.then((message) => {
  createMessage(message);
}).catch((error) => {
  createMessage(error.message);
});
