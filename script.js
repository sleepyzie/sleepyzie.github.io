
document.addEventListener('DOMContentLoaded', () => {
    const shellDiv = document.getElementById('shell1');
    const positions = [0, 1, 2]; 
    positionElements(shellDiv, positions);
});
function opensidebar() {
    const sidebar = document.getElementById('sidebar');
    const button = document.getElementById('opensidebar');
    sidebar.classList.toggle('active');
    button.value = sidebar.classList.contains('active') ? "Close" : "Open Sidebar";
    if (!sidebar.classList.contains('active')) closeCustomization();
}

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.maxHeight = section.style.maxHeight ? null : section.scrollHeight + "px";
}

function openCustomization(functionName) {
    const customizationSidebar = document.getElementById('customizationSidebar');
    const content = document.getElementById('customizationContent');
    if (functionName === "Electron Affinity") {
        content.innerHTML = `<h2>Electron Affinity</h2><h3>As we move away from the nucleus, the less the electron affinity...</h3>`;
    }
    if (functionName === "Electronegativity") {
        content.innerHTML = `<h2>Electronegativity</h2><h3>As we move inner toward the nucleus, generally speaking, the more the electronegativity</h3>`;
    }
    if (functionName === "First Ionization Energy") {
        content.innerHTML = `<h2>First Ionization Energy</h2><h3>As we move away from the nucleus, the less the first ionization energy</h3>`;
    }
    if (functionName === "Atomic Radius") {
        content.innerHTML = `<h2>Atomic Radius</h2><h3>As we move away from the nucleus, the more the atomic radius</h3>`;
    }
    if (functionName === "Atomic Mass") {
        content.innerHTML = `<h2>Atomic Mass</h2><h3>As we move away from the nucleus, the more the atomic mass</h3>`;
    }
    customizationSidebar.classList.add('active');
    closeSidebar();
}

function closeCustomization() {
    const customizationSidebar = document.getElementById('customizationSidebar');
    customizationSidebar.classList.remove('active');
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('active');
    document.getElementById('opensidebar').value = "Open Sidebar";
}

function toggleElectronegativity() {
    const arrow = document.getElementById('arrow');
    arrow.classList.toggle('active');
    if (arrow.classList.contains('active')) {
        arrow.setAttribute('x1', '2000');
        arrow.setAttribute('y1', '100');
        arrow.setAttribute('x2', '1200');
        arrow.setAttribute('y2', '650');
    }
}

function toggleElectronAffinity() {
    const arrow = document.getElementById('arrow');
    arrow.classList.toggle('active');
    if (arrow.classList.contains('active')) {
        arrow.setAttribute('x1', '2000');
        arrow.setAttribute('y1', '100');
        arrow.setAttribute('x2', '1200');
        arrow.setAttribute('y2', '650');
    }
}

function toggleFirstIonizationEnergy() {
    const arrow = document.getElementById('arrow');
    arrow.classList.toggle('active');
    if (arrow.classList.contains('active')) {
        arrow.setAttribute('x1', '2000');
        arrow.setAttribute('y1', '100');
        arrow.setAttribute('x2', '1200');
        arrow.setAttribute('y2', '650');
    }
}

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
        
        
        span.addEventListener('click', () => showElementInfo(elementSymbol));

        shellDiv.appendChild(span);
    });
};

Object.keys(shells).forEach(shell => {
    const shellDiv = document.getElementById(shell);
    if (shellDiv) {
        positionElements(shellDiv, shells[shell]);
    }
});

function showElementInfo(elementSymbol) {
    const customizationSidebar = document.getElementById('customizationSidebar');
    const content = document.getElementById('customizationContent');
    const elementInfo = elementInfo.find(el => el.name === elementSymbol);
    if (element) {
        content.innerHTML = `
            <h2>${element.name}</h2>
            <p><strong>Atomic Number:</strong> ${element.atomicNumber}</p>
            <p><strong>Atomic Mass:</strong> ${element.atomicMass}</p>
            <p><strong>Electron Configuration:</strong> ${element.electronConfig}</p>
        `;
    }
    customizationSidebar.classList.add('active');
    closeSidebar(); 
}

var elementInfo = [
    { name: "H", atomicNumber: 1, atomicMass: 1.008, electronConfig: "1s¹" },
    { name: "He", atomicNumber: 2, atomicMass: 4.0026, electronConfig: "1s²" },
    { name: "Li", atomicNumber: 3, atomicMass: 6.94, electronConfig: "1s² 2s¹" },
    { name: "Be", atomicNumber: 4, atomicMass: 9.0122, electronConfig: "1s² 2s²" },
    { name: "B", atomicNumber: 5, atomicMass: 10.81, electronConfig: "1s² 2s² 2p¹" },
    { name: "C", atomicNumber: 6, atomicMass: 12.011, electronConfig: "1s² 2s² 2p²" },
    { name: "N", atomicNumber: 7, atomicMass: 14.007, electronConfig: "1s² 2s² 2p³" },
    { name: "O", atomicNumber: 8, atomicMass: 15.999, electronConfig: "1s² 2s² 2p⁴" },
    { name: "F", atomicNumber: 9, atomicMass: 18.998, electronConfig: "1s² 2s² 2p⁵" },
    { name: "Ne", atomicNumber: 10, atomicMass: 20.180, electronConfig: "1s² 2s² 2p⁶" },
    { name: "Na", atomicNumber: 11, atomicMass: 22.990, electronConfig: "1s² 2s² 2p⁶ 3s¹" },
    { name: "Mg", atomicNumber: 12, atomicMass: 24.305, electronConfig: "1s² 2s² 2p⁶ 3s²" },
    { name: "Al", atomicNumber: 13, atomicMass: 26.982, electronConfig: "1s² 2s² 2p⁶ 3s² 3p¹" },
    { name: "Si", atomicNumber: 14, atomicMass: 28.085, electronConfig: "1s² 2s² 2p⁶ 3s² 3p²" },
    { name: "P", atomicNumber: 15, atomicMass: 30.974, electronConfig: "1s² 2s² 2p⁶ 3s² 3p³" },
    { name: "S", atomicNumber: 16, atomicMass: 32.06, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁴" },
    { name: "Cl", atomicNumber: 17, atomicMass: 35.45, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁵" },
    { name: "Ar", atomicNumber: 18, atomicMass: 39.948, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶" },
    { name: "K", atomicNumber: 19, atomicMass: 39.098, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹" },
    { name: "Ca", atomicNumber: 20, atomicMass: 40.078, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²" },
    { name: "Sc", atomicNumber: 21, atomicMass: 44.956, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹" },
    { name: "Ti", atomicNumber: 22, atomicMass: 47.867, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d²" },
    { name: "V", atomicNumber: 23, atomicMass: 50.941, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d³" },
    { name: "Cr", atomicNumber: 24, atomicMass: 52.0, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁴" },
    { name: "Mn", atomicNumber: 25, atomicMass: 54.938, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁵" },
    { name: "Fe", atomicNumber: 26, atomicMass: 55.845, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶" },
    { name: "Co", atomicNumber: 27, atomicMass: 58.933, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁷" },
    { name: "Ni", atomicNumber: 28, atomicMass: 58.693, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁸" },
    { name: "Cu", atomicNumber: 29, atomicMass: 63.546, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d¹⁰" },
    { name: "Zn", atomicNumber: 30, atomicMass: 65.38, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰" },
    { name: "Ga", atomicNumber: 31, atomicMass: 69.723, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p¹" },
    { name: "Ge", atomicNumber: 32, atomicMass: 72.63, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p²" },
    { name: "As", atomicNumber: 33, atomicMass: 74.922, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p³" },
    { name: "Se", atomicNumber: 34, atomicMass: 78.971, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁴" },
    { name: "Br", atomicNumber: 35, atomicMass: 79.904, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵" },
    { name: "Kr", atomicNumber: 36, atomicMass: 83.798, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶" },
    { name: "Rb", atomicNumber: 37, atomicMass: 85.468, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹" },
    { name: "Sr", atomicNumber: 38, atomicMass: 87.62, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s²" },
    { name: "Y", atomicNumber: 39, atomicMass: 88.906, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹" },
    { name: "Zr", atomicNumber: 40, atomicMass: 91.224, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d²" },
    { name: "Nb", atomicNumber: 41, atomicMass: 92.906, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d⁴" },
    { name: "Mo", atomicNumber: 42, atomicMass: 95.95, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d⁵" },
    { name: "Tc", atomicNumber: 43, atomicMass: 98, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d⁶" },
{ name: "Ru", atomicNumber: 44, atomicMass: 101.07, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d⁷" },
{ name: "Rh", atomicNumber: 45, atomicMass: 102.91, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d⁸" },
{ name: "Pd", atomicNumber: 46, atomicMass: 106.42, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d⁹" },
{ name: "Ag", atomicNumber: 47, atomicMass: 107.87, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d¹⁰" },
{ name: "Cd", atomicNumber: 48, atomicMass: 112.41, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰" },
{ name: "In", atomicNumber: 49, atomicMass: 114.82, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p¹" },
{ name: "Sn", atomicNumber: 50, atomicMass: 118.71, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p²" },
{ name: "Sb", atomicNumber: 51, atomicMass: 121.76, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p³" },
{ name: "Te", atomicNumber: 52, atomicMass: 127.6, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁴" },
{ name: "I", atomicNumber: 53, atomicMass: 126.90, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁵" },
{ name: "Xe", atomicNumber: 54, atomicMass: 131.29, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p" }
];
