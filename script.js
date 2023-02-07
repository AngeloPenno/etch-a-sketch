let sketchSquare = document.querySelector('#sketchSquare');
let aspect = 16;

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

let squares = document.querySelectorAll('.column');

[...squares].forEach(function(square) {
  square.addEventListener('mousemove', (e) => {
    if (e.which === 1) {
      e.target.classList.add('paint');
    }
  });
})