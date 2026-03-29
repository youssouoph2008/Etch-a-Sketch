const container = document.getElementById('container');
const NewGrid = document.getElementById('NewGrid');
const RandomGrid = document.getElementById('RandomGrid');

// -------------------------
//  Funciones principales
// -------------------------

function createGrid(size) {  // Función para crear el grid
    container.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });
        container.appendChild(cell);
    }
}

function NumberOfCells(){   // Función para solicitar el número de celdas por lado
    let size = prompt("Enter the number of cells per side (max 100):");
    size = parseInt(size);
    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    createGrid(size);
}

function CellMeasures(size){  // Función para ajustar el tamaño de las celdas
    const cells = document.querySelectorAll('.cell');
    const cellSize = 960 / size; // Ajusta el tamaño de las celdas para que el grid ocupe 500px
    cells.forEach(cell => {
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
    });
}

function createDivs(size){  // Función para crear las celdas
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

function EventListener(){  // Función para agregar el evento de cambio de color
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });
    });
}

function deleteGrid(){  // Función para eliminar el grid actual
    container.innerHTML = '';
}

function randomColor(){  // Función para generar un color aleatorio
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
function newGrid(size){  // Función para crear un grid con colores negros
    container.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });
        container.appendChild(cell);
    }
}

function randomGrid(size){  // Función para crear un grid con colores aleatorios
    container.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = randomColor();
        });
        container.appendChild(cell);
    }
}

// -------------------------
//  Event Listeners
// -------------------------
NewGrid.addEventListener('click', () => {
    const size = prompt("Enter the number of cells per side (max 100):");
    const parsedSize = parseInt(size);
    if (isNaN(parsedSize) || parsedSize < 1 || parsedSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    createGrid(parsedSize); // grid normal (hover negro)
});

RandomGrid.addEventListener('click', () => {
    const size = prompt("Enter the number of cells per side (max 100):");
    const parsedSize = parseInt(size);
    if (isNaN(parsedSize) || parsedSize < 1 || parsedSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    randomGrid(parsedSize); // grid con hover random
});

// -------------------------
//  Inicialización
// -------------------------

createGrid(16); // Crea un grid inicial de 16x16   