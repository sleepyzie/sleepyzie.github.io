        const elements = [
            "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne",
            "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca",
            "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn",
            "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr",
            "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn",
            "Sb", "Te", "I", "Xe"
        ];

        const shells = {
            shell1: [0, 1], // 2 electrons
            shell2: [2, 3, 4, 5, 6, 7, 8, 9], // 8 electrons
            shell3: [10, 11, 12, 13, 14, 15, 16, 17], // 8 electrons
            shell4: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], // 12 electrons
            shell5: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], // 16 electrons
            shell6: [46, 47, 48, 49, 50, 51, 52, 53] // 8 electrons
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
                span.textContent = elementS ymbol;
                span.style.left = `${x}px`;
                span.style.top = `${y}px`;
                span.style.position = 'absolute';
                // Add data-menu-item attribute
                span.setAttribute('data-menu-item', elementSymbol);
                shellDiv.appendChild(span);
            });
        };

        Object.keys(shells).forEach(shell => {
            const shellDiv = document.getElementById(shell);
            positionElements(shellDiv, shells[shell]);
        });

        // Add event listeners to show/hide the sidebar menu on element hover
        const spans = document.querySelectorAll('.orbital span');
        const bodyElement = document.getElementById('body-element');

        spans.forEach(span => {
            span.addEventListener('mouseenter', () => {
                const sidebarMenu = document.querySelector('.sidebar-menu');
                sidebarMenu.classList.remove('active');
                setTimeout(() => {
                    sidebarMenu.classList.add('active');

                    const elementSymbol = span.textContent;
                    const elementDetailsDiv = document.getElementById('element-details');

                    // Clear previous details
                    elementDetailsDiv.innerHTML = '';

                    // Here you can add code to fetch and display detailed information about the element
                    // For simplicity, let's just display a basic message for now
                    const elementDetails = `Details about ${elementSymbol}`;
                    const detailsParagraph = document.createElement('p');
                    detailsParagraph.textContent = elementDetails;
                    elementDetailsDiv.appendChild(detailsParagraph);
                }, 100);
            });
        });

        bodyElement.addEventListener('mouseleave', () => {
            const sidebarMenu = document.querySelector('.sidebar-menu');
            sidebarMenu.classList.remove('active');
        });
