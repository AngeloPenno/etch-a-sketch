let sketchSquare = document.querySelector('#sketchSquare');
let aspect = 100;

// Creates all the divs needed based on the aspect variable
for (let i = 0; i < aspect; i++) {
  let row = document.createElement('div');
  row.classList.add('row');

  sketchSquare.append(row);

  for (let j = 0; j < aspect; j++) {
    let column = document.createElement('div');
    column.classList.add('column');
    
    row.append(column);
  }
}

// Listens to the mouse entering the divs while clicked and paints them
let squares = document.querySelectorAll('.column');

[...squares].forEach(function(square) {
  square.addEventListener('mouseenter', (e) => {
    if (e.which === 1) {
      e.target.classList.add('paint');
    }
  });
})