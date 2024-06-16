document.addEventListener('DOMContentLoaded', () => {
    const trashItems = document.querySelectorAll('.trash-item');
    const recycleBins = document.querySelectorAll('.recycle-bin');
    const checkScoreBtn = document.getElementById('check-score-btn');
    const resultContainer = document.getElementById('result-container');
    const resultMessage = document.getElementById('result-message');
    let totalItems = trashItems.length;
    let draggedItem = null; // Variable para almacenar el elemento arrastrado

    // Función para manejar la lógica de arrastrar y soltar
    function handleDragStart() {
        draggedItem = this;
        setTimeout(() => (this.className = 'invisible'), 0);
    }

    function handleDragEnd() {
        this.className = 'trash-item';
        draggedItem = null;
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDragEnter(e) {
        e.preventDefault();
        this.className += ' hovered';
    }

    function handleDragLeave() {
        this.className = 'recycle-bin';
    }

    function handleDrop() {
        if (draggedItem) {
            this.appendChild(draggedItem);
            this.className = 'recycle-bin';
        }
    }

    function handleTouchStart(e) {
        e.preventDefault();
        draggedItem = e.target;
        draggedItem.className += ' hold';
    }

    function handleTouchMove(e) {
        e.preventDefault();
        const touch = e.touches[0];
        draggedItem.style.position = 'absolute';
        draggedItem.style.left = `${touch.pageX}px`;
        draggedItem.style.top = `${touch.pageY}px`;
    }

    function handleTouchEnd(e) {
        e.preventDefault();
        const elementBelow = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
        if (elementBelow && elementBelow.classList.contains('recycle-bin')) {
            elementBelow.appendChild(draggedItem);
        }
        draggedItem.className = 'trash-item';
        draggedItem.style.position = 'initial';
        draggedItem = null;
    }

    // Agregar event listeners para cada elemento de basura
    trashItems.forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
        item.addEventListener('touchstart', handleTouchStart);
        item.addEventListener('touchmove', handleTouchMove);
        item.addEventListener('touchend', handleTouchEnd);
    });

    // Agregar event listeners para cada contenedor de reciclaje
    recycleBins.forEach(bin => {
        bin.addEventListener('dragover', handleDragOver);
        bin.addEventListener('dragenter', handleDragEnter);
        bin.addEventListener('dragleave', handleDragLeave);
        bin.addEventListener('drop', handleDrop);
    });

    // Verificar la puntuación al hacer clic en el botón
    checkScoreBtn.addEventListener('click', () => {
        let score = calculateScore();
        resultContainer.style.display = 'block';
        resultMessage.textContent = `¡Has acertado ${score} de ${totalItems} elementos!`;
    });

    function calculateScore() {
        let score = 0;
        recycleBins.forEach(bin => {
            const trashType = bin.id.replace('-bin', ''); // Obtener el tipo de basura del contenedor
            const itemsInBin = bin.querySelectorAll('.trash-item');

            itemsInBin.forEach(item => {
                if (item.id === trashType) {
                    score++;
                }
            });
        });
        return score;
    }
});
