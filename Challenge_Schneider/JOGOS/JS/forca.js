const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const tips = document.getElementById('tips');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['ecologia', 'replantio', 'reciclar','reciclagem','energia','reducao','eficiencia',
'sustentavel','preservacao','poluicao','aquecimento','global','urbana','recursos','agricultura',
'agua','ciclos','transporte','emissoes','ecologia','educacao']; // possible words for guessing

let selectedWord = words[Math.floor(Math.random() * words.length)]; // select a word by randomly selecting a number lower than the word array's lenght. Math.floor() arredonda pra baixo.

const correctLetters = [];
const wrongLetters = [];

// Show hidden word
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split('')
      .map(
        letter => `
          <span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}  
          </span>
        ` // that section in span adds letter by letter the word to the correctLetter array
      )
      .join('')}
  `;

  const innerWord = wordEl.innerText.replace(/\n/g, ''); //replacing the newline and spaces between letter so as to make it a whole word again :)

  if (innerWord === selectedWord) {
    finalMessage.innerText = 'Parabéns! Você venceu!'; //if the word you type is the selected word you win!! 
    popup.style.display = 'flex';
  }
}

// Update the wrong letters
function updateWrongLettersEl() {
  // Display wrong letters
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p class="green">Erradas</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)} 
  `; //adds the wrong letters to the wrong section

  // Display parts
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if (index < errors) {
      part.style.display = 'block';
    } else {
      part.style.display = 'none';
    }
  });

  // Check if lost
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = 'Infelizmente você perdeu :(';
    popup.style.display = 'flex';
  }
}

// Show notification
function showNotification() {
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
}

// Keydown letter press
window.addEventListener('keydown', e => {
  // console.log(e.keyCode);
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});

function updateTips() {
  const gameTip = ['tem a ver com sustentabilidade!', 'comece com as vogais!', 
  'algumas letras têm maior probabilidade de serem usadas do que outras', 
  'tem a ver com o meio ambiente!']; // possible words for guessing

  let selectedTip = gameTip[Math.floor(Math.random() * gameTip.length)];

  tips.innerText = selectedTip;
}

window.onload = updateTips();

// Restart game and play again
playAgainBtn.addEventListener('click', () => {
  //  Empty arrays
  correctLetters.splice(0);
  wrongLetters.splice(0);

  selectedWord = words[Math.floor(Math.random() * words.length)];

  displayWord();

  updateWrongLettersEl();

 
  popup.style.display = 'none';
});

displayWord();
