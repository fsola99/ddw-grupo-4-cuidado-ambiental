document.addEventListener('DOMContentLoaded', () => {
    const trashItems = document.querySelectorAll('.trash-item');
    const recycleBins = document.querySelectorAll('.recycle-bin');
    const checkScoreBtn = document.getElementById('check-score-btn');
    const resultContainer = document.getElementById('result-container');
    const resultMessage = document.getElementById('result-message');
    let totalItems = trashItems.length;

    // Agregar event listeners para cada elemento de basura
    trashItems.forEach(item => {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragend', dragEnd);
    });

    // Agregar event listeners para cada contenedor de reciclaje
    recycleBins.forEach(bin => {
        bin.addEventListener('dragover', dragOver);
        bin.addEventListener('dragenter', dragEnter);
        bin.addEventListener('dragleave', dragLeave);
        bin.addEventListener('drop', dragDrop);
    });

    // Verificar la puntuación al hacer clic en el botón
    checkScoreBtn.addEventListener('click', () => {
        let score = calculateScore();
        resultContainer.style.display = 'block';
        resultMessage.textContent = `¡Has acertado ${score} de ${totalItems} elementos!`;
    });

    function dragStart() {
        this.className += ' hold';
        setTimeout(() => (this.className = 'invisible'), 0);
    }

    function dragEnd() {
        this.className = 'trash-item';
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
        this.className += ' hovered';
    }

    function dragLeave() {
        this.className = 'recycle-bin';
    }

    function dragDrop() {
        const draggedItem = document.querySelector('.invisible');
        this.appendChild(draggedItem); // Mover el elemento de basura al contenedor
        this.className = 'recycle-bin'; // Restablecer la clase del contenedor de reciclaje
    }

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
