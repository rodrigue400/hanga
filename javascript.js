document.querySelector('.hero-content input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {  // Detect "Enter" key
        const searchQuery = event.target.value;
        if (searchQuery.trim() !== '') {
            alert(`Searching for "${searchQuery}" services...`);
            // You can add a redirect or further logic here to display search results
        } else {
            alert('Please type something to search.');
        }
    }
});

// 2. Add hover effect on service cards dynamically
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'all 0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// 3. Mobile Menu Toggle (optional, for extending to mobile)
const mobileMenuButton = document.querySelector('.mobile-menu-btn'); // Add button in HTML if needed
const navMenu = document.querySelector('nav');

mobileMenuButton?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// 4. Example function to dynamically load content (optional)
function loadPopularServices() {
    const servicesGrid = document.querySelector('.services-grid');
    const services = [
        { name: 'Website Development' },
        { name: 'Logo Design' },
        { name: 'SEO' },
        { name: 'Architecture & Interior Design' },
        { name: 'Social Media Marketing' },
        { name: 'Voice Over' }
    ];

    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerText = service.name;

        serviceCard.addEventListener('mouseenter', () => {
            serviceCard.style.transform = 'scale(1.05)';
            serviceCard.style.transition = 'all 0.3s ease';
        });

        serviceCard.addEventListener('mouseleave', () => {
            serviceCard.style.transform = 'scale(1)';
        });

        servicesGrid.appendChild(serviceCard);
    });
}

// Call this function to load services on page load (optional)
document.addEventListener('DOMContentLoaded', loadPopularServices);
