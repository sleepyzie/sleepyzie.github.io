const elements = [
    "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne",
    "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca",
    "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn",
    "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr",
    "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn",
    "Sb", "Te", "I", "Xe"
];

const shells = {
    shell1: [0, 1], 
    shell2: [2, 3, 4, 5, 6, 7, 8, 9],
    shell3: [10, 11, 12, 13, 14, 15, 16, 17], 
    shell4: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], 
    shell5: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], 
    shell6: [46, 47, 48, 49, 50, 51, 52, 53] 
};

const positionElements = (shellDiv, positions) => {
    const radius = shellDiv.offsetWidth / 2;
    const centerX = radius;
    const centerY = radius;

    positions.forEach((index, i) => {
        const elementSymbol = elements[index];
        const angle = (i / positions.length) * 2 * Math.PI;
        const x = centerX + radius * Math.cos(angle) - 25;
        const y = centerY + radius * Math.sin(angle) - 25;

        const span = document.createElement('span');
        span.title = `${elementSymbol}`;
        span.textContent = elementSymbol;
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
        span.style.position = 'absolute';

        shellDiv.appendChild(span);
    });
};

const initShells = () => {
    Object.keys(shells).forEach(shell => {
        const shellDiv = document.getElementById(shell);
        if (shellDiv) {
            positionElements(shellDiv, shells[shell]);
        }
    });
};


document.addEventListener('DOMContentLoaded', initShells);
