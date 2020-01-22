const mainGrid = document.getElementById('gridContainer');
const resizeButton = document.getElementById('resizeButton')
const clearButton = document.getElementById('clearButton')
var gridCount = 36;


function createGrid(gridAmount){
  mainGrid.innerHTML = ''
  for(var i = 0; i < (gridAmount ** 2); i++){
    mainGrid.setAttribute('style', `grid-template-columns: repeat(${gridAmount}, 1fr); grid-template-rows: repeat(${gridAmount}, 1fr);`);
    const squareDiv = document.createElement('div');
    mainGrid.appendChild(squareDiv);
  }
}

createGrid(gridCount);
mainGrid.addEventListener('mouseover', (e) =>{
  if (e.target.parentElement.id === 'gridContainer'){
    e.target.style.backgroundColor = 'black';
  }
})
resizeButton.addEventListener('click', () => {
  gridCount = prompt('What size would you like the grid to be?');
  if (gridCount == ''){
    alert('Please enter in a number')
  }
  else{
    createGrid(gridCount);
  }
})
clearButton.addEventListener('click', () =>{
  createGrid(gridCount);
})
