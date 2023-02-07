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

// sketchSquare.addEventListener('mousemove', function(e) {
//   const target = e.target.classList;
//   console.log(target);
// })

let squares = document.querySelectorAll('.column');

squares.forEach(addEventListener('mousedown', function(e) {
  console.log(e.target)
}))