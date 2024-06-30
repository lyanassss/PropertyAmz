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
    const malayButton = document.getElementBy
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
            switchToEnglish();
        });
    
        malayButton.addEventListener('click', () => {
            switchToMalay();
        });
    
        function switchToEnglish() {
            document.querySelector('nav ul li a[href="#about"]').textContent = 'About';
            document.querySelector('nav ul li a[href="#listings"]').textContent = 'Listings';
            document.querySelector('nav ul li a[href="#contact"]').textContent = 'Contact';
            document.querySelector('#about h2').textContent = 'About Us';
            document.querySelector('#about p').textContent = 'Welcome to PropertyAmz, your gateway to the finest properties in Malaysia. Explore our listings to find your dream home.';
            document.querySelector('#listings h2').textContent = 'Property Listings';
            document.querySelector('#contact h2').textContent = 'Contact Us';
            document.querySelector('#contact p').innerHTML = 'For inquiries, please contact us at <a href="mailto:info@propertyamz.com">info@propertyamz.com</a>';
        }
    
        function switchToMalay() {
            document.querySelector('nav ul li a[href="#about"]').textContent = 'Tentang';
            document.querySelector('nav ul li a[href="#listings"]').textContent = 'Senarai';
            document.querySelector('nav ul li a[href="#contact"]').textContent = 'Hubungi';
            document.querySelector('#about h2').textContent = 'Tentang Kami';
            document.querySelector('#about p').textContent = 'Selamat datang ke PropertyAmz, pintu masuk anda ke hartanah terbaik di Malaysia. Terokai senarai kami untuk mencari rumah impian anda.';
            document.querySelector('#listings h2').textContent = 'Senarai Hartanah';
            document.querySelector('#contact h2').textContent = 'Hubungi Kami';
            document.querySelector('#contact p').innerHTML = 'Untuk pertanyaan, sila hubungi kami di <a href="mailto:info@propertyamz.com">info@propertyamz.com</a>';
        }
    });
});
