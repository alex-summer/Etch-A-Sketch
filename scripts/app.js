const mainGrid = document.getElementById('gridContainer');
const resizeButton = document.getElementById('resizeButton')
const clearButton = document.getElementById('clearButton')


function createGrid(gridAmount,){
  mainGrid.innerHTML = ''
  for(var i = 0; i < (gridAmount ** 2); i++){
    mainGrid.setAttribute('style', `grid-template-columns: repeat(${gridAmount}, 1fr); grid-template-rows: repeat(${gridAmount}, 1fr);`);
    const squareDiv = document.createElement('div');
    mainGrid.appendChild(squareDiv);
  }
}

createGrid(36);
mainGrid.addEventListener('mouseover', (e) =>{
  if (e.target.parentElement.id === 'gridContainer'){
    e.target.style.backgroundColor = 'black';
  }
})
resizeButton.addEventListener('click', () => {
  var gridSize = prompt('What size would you like the grid to be?');
  if (gridSize == ''){
    alert('Please enter in a number')
  }
  else{
    createGrid(gridSize);
  }
})
clearButton.addEventListener('click', () =>{
  var gridCount = mainGrid.childNodes.length;
  createGrid(gridCount);
  //odd performance issues. Figure it out tomorrow
})