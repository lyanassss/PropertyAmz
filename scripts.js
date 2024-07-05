document.addEventListener('DOMContentLoaded', function() {
    const locationDropdown = document.getElementById('locationDropdown');
    const serviceDropdown = document.getElementById('serviceDropdown');

    locationDropdown.addEventListener('change', filterProperties);
    serviceDropdown.addEventListener('change', filterProperties);

    const propertyCards = [
        {
            name: 'SETAPAK',
            details: 'Walking distance to MRT (400m), 0% down payment, Free Furnish',
            price: 'RM 310K - 460K',
            image: 'images/freeholdSetapak.jpg',
            location: 'Setapak',
            service: 'buying'
        },
        {
            name: 'Bukit Bintang Luxury Condo',
            details: '3 Bedrooms, 2 Bathrooms, 1500 Sq Ft',
            price: 'RM 1,200,000',
            image: 'images/bukitBintang.jpg',
            location: 'Bukit Bintang',
            service: 'buying'
        },
        {
            name: 'Cheras Family Home',
            details: '4 Bedrooms, 3 Bathrooms, 2000 Sq Ft',
            price: 'RM 900,000',
            image: 'images/cheras.jpg',
            location: 'Cheras',
            service: 'buying'
        },
        {
            name: 'Mont Kiara Executive Suite',
            details: '2 Bedrooms, 2 Bathrooms, 1200 Sq Ft',
            price: 'RM 850,000',
            image: 'images/montKiara.jpg',
            location: 'Mont Kiara',
            service: 'buying'
        }
    ];

    // Populate the location dropdown with unique locations
    const uniqueLocations = [...new Set(propertyCards.map(property => property.location))];
    uniqueLocations.forEach(location => {
        const option = document.createElement('option');
        option.value = location;
        option.textContent = location;
        locationDropdown.appendChild(option);
    });

    function filterProperties() {
        const location = locationDropdown.value;
        const service = serviceDropdown.value;

        const filteredProperties = propertyCards.filter(property => {
            return (location === "" || property.location === location) &&
                   (service === "" || property.service === service);
        });

        loadPropertyCards(filteredProperties);
    }

    function loadPropertyCards(properties) {
        const carouselInner = document.getElementById('propertyCarouselInner');
        const carouselIndicators = document.getElementById('propertyCarouselIndicators');

        carouselInner.innerHTML = ''; // Clear previous cards
        carouselIndicators.innerHTML = ''; // Clear previous indicators

        properties.forEach((property, index) => {
            const isActive = index === 0 ? 'active' : '';

            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item', isActive);

            const card = document.createElement('div');
            card.classList.add('col-md-4', 'property-card');

            const cardImg = document.createElement('img');
            cardImg.src = property.image;
            cardImg.classList.add('card-img-top');
            cardImg.alt = property.name;

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = property.name;

            const cardText1 = document.createElement('p');
            cardText1.classList.add('card-text');
            cardText1.textContent = property.details;

            const cardText2 = document.createElement('p');
            cardText2.classList.add('card-text');
            cardText2.textContent = property.price;

            const bookButton = document.createElement('button');
            bookButton.classList.add('btn', 'btn-primary', 'book-button', 'common-size');
            bookButton.textContent = 'BOOK';
            bookButton.addEventListener('click', function() {
                const message = `Hi, I'm interested in property "${property.name}". Details: ${property.details}, Price: ${property.price}`;
                const whatsappURL = `https://wa.me/60132928388?text=${encodeURIComponent(message)}`;
                window.open(whatsappURL, '_blank');
            });

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText1);
            cardBody.appendChild(cardText2);
            cardBody.appendChild(bookButton);
            card.appendChild(cardImg);
            card.appendChild(cardBody);
            carouselItem.appendChild(card);
            carouselInner.appendChild(carouselItem);

            const indicator = document.createElement('li');
            indicator.setAttribute('data-target', '#propertyCarousel');
            indicator.setAttribute('data-slide-to', index);
            if (index === 0) {
                indicator.classList.add('active');
            }
            carouselIndicators.appendChild(indicator);
        });
    }

    const engButton = document.getElementById('eng');
    const malayButton = document.getElementById('malay');

    engButton.addEventListener('click', switchToEnglish);
    malayButton.addEventListener('click', switchToMalay);

    function switchToEnglish() {
        // Replace text with English versions
        document.querySelector('nav .navbar-nav .nav-item:nth-child(1) .nav-link').textContent = 'About Us';
        document.querySelector('nav .navbar-nav .nav-item:nth-child(2) .nav-link').textContent = 'Contact Us';
        document.querySelector('.hero h1').textContent = "Property Listings";
        document.querySelector('.hero p').textContent = 'Find your dream property with PropertyAmz. We have a variety of options to suit every lifestyle and budget.';
        document.querySelector('.open-house h2').textContent = 'Services';
        document.querySelector('.open-house p').textContent = 'From buying advice to property management, we offer everything you need to navigate the real estate journey confidently.';
    }

    function switchToMalay() {
        // Replace text with Malay versions
        document.querySelector('nav .navbar-nav .nav-item:nth-child(1) .nav-link').textContent = 'Tentang Kami';
        document.querySelector('nav .navbar-nav .nav-item:nth-child(2) .nav-link').textContent = 'Hubungi Kami';
        document.querySelector('.hero h1').textContent = "Senarai Hartanah";
        document.querySelector('.hero p').textContent = 'Cari hartanah impian anda dengan PropertyAmz. Kami menawarkan pelbagai pilihan untuk memenuhi setiap gaya hidup dan bajet.';
        document.querySelector('.open-house h2').textContent = 'Perkhidmatan';
        document.querySelector('.open-house p').textContent = 'Dari nasihat membeli hingga pengurusan hartanah, kami menawarkan segala yang anda perlukan untuk menavigasi perjalanan hartanah tanpa was-was.';
    }

    // Function to scroll to top
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Handle Contact Us button click
    document.querySelector('nav .navbar-nav .nav-item:nth-child(2) .nav-link').addEventListener('click', function() {
        const message = "Hi, I have some questions about your services.";
        const whatsappURL = `https://wa.me/60132928388?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    });

    // Handle Services button click
    document.querySelector('.services button.btn-primary').addEventListener('click', function() {
        const message = "Hi, I would like to learn more about your services.";
        const whatsappURL = `https://wa.me/60132928388?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    });

    loadPropertyCards(propertyCards); // Initial load
});
