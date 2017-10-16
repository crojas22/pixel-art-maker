const height = document.querySelector('#input_height');
const width = document.querySelector('#input_width');
const canvas = document.querySelector('#pixel_canvas');
const button = document.querySelector('input[type=submit]');


const makeGrid = () => {
  // will create rows and columns
  for(let i = 0; i < height.value; i++){
    let row = canvas.insertRow(i);
    for(let x = 0; x < width.value; x++){
      row.insertCell(x);
    };
  };
  // will return to original values
  height.value = '1';
  width.value = '1';
};

button.addEventListener('click', (e) => {
  // prevents page from reloading
  e.preventDefault();
  makeGrid();
});

canvas.addEventListener('click', (event) => {
  event.target.style.background = document.querySelector('#colorPicker').value;
});
