document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    // Add entrance animation delay for each card
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Add click handlers for play buttons
    const playButtons = document.querySelectorAll('.play-btn');
    playButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const gameName = e.target.closest('.card').getAttribute('data-game');
            if (gameName === 'coldwar') {
                window.location.href = 'cod_cold-war/index.html';
            } else {
                alert(`Loading ${gameName}...`);
            }
        });
    });

    // Add hover sound effect (optional)
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const audio = new Audio('hover.mp3');
            audio.volume = 0.1;
            audio.play().catch(() => {});
        });
    });
});
