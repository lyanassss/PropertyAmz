document.addEventListener('DOMContentLoaded', () => {
    const bookButtons = document.querySelectorAll('.book-button');

    bookButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.property-card');
            const name = card.getAttribute('data-name');
            const details = card.getAttribute('data-details');
            window.open(`https://wa.me/60132928388?text=Place: ${name}, Details: ${details}`, '_blank');
        });
    });

    const engButton = document.getElementById('eng');
    const malayButton = document.getElementById('malay');

    engButton.addEventListener('click', () => {
        // Switch to English content
    });

    malayButton.addEventListener('click', () => {
        // Switch to Malay content
    });
});
