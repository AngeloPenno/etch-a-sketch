const sketchSquare = document.querySelector('#sketchSquare');
let amount = 16;
let paintColor = 'black';
createSquares(amount);
addPaintListeners();

const amountInput = document.querySelector('#amount');

// Creates all the divs needed based on the aspect variable;
function createSquares(num) {
  for (let i = 0; i < num; i++) {
    let row = document.createElement('div');
    row.classList.add('row');

    sketchSquare.append(row);

    for (let j = 0; j < num; j++) {
      let column = document.createElement('div');
      column.classList.add('column');
      
      row.append(column);
    }
}};

// Changes the amount of squares based on the number inserted by the user;
amountInput.addEventListener('change', (e) => {
  const numParam = document.querySelector('#numParam');
  if (e.target.value > 100 || e.target.value < 2) {
    numParam.textContent = 'Min: 2 - Max: 100';
  } else {
    sketchSquare.innerHTML = '';
    amount = e.target.value;
    createSquares(amount);
    addPaintListeners();
    numParam.textContent = '';
  }
})

// Listens to mousedown and mouseenter on the squares and calls the paint function on them;
function addPaintListeners() {
  let squares = document.querySelectorAll('.column');

  [...squares].forEach(function(square) {
    square.addEventListener('mouseenter', paint);
  });
  [...squares].forEach(function(square) {
    square.addEventListener('mousedown', paint);
})};

// Check for LMB and paints the element
function paint(e) {
  if (e.which === 1) {
    e.target.style.backgroundColor = paintColor;
  }
};

const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
  const squares = document.querySelectorAll('.column');
  [...squares].forEach((square) => {
    square.classList.add('transition');
    square.style.backgroundColor = 'white';
    setTimeout(() => square.classList.remove('transition'), 1000);
  });
});

const colors = document.querySelectorAll('.colors');
[...colors].forEach((color) => {
  color.addEventListener('click', (e) => {
    paintColor = e.target.style.backgroundColor;
    const currentColor = document.querySelector('#currentColor');
    currentColor.style.backgroundColor = paintColor;
  });
})