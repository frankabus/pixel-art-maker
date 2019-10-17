// Select color input
const colorInput = document.getElementById('colorPicker');

// Select size inputs
const heightInput = document.getElementById('inputHeight');
const widthInput = document.getElementById('inputWidth');

// Select table
const designCanvas = document.getElementById('pixelCanvas');

// Select submit button
const gridSubmit = document.getElementById('sizePicker');

function makeGrid(height, width) {
    designCanvas.innerHTML = null;  // Clears existing table to nothing
    for (let i = 0; i < height.value; i++) {
        let row = designCanvas.insertRow(i);  // Make rows according to height input
        for (let j = 0; j < width.value; j++) {
            let cell = row.insertCell(j);  // Make columns according to width input
            cell.addEventListener('click', function() {
                cell.style.backgroundColor = colorInput.value;  // Change color of cell if cell is clicked
            });
        }
    }
}

// When size is submitted by the user, call makeGrid()
gridSubmit.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid(heightInput, widthInput);
});