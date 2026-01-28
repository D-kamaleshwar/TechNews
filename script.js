// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Enhanced click handlers for read buttons
document.querySelectorAll('.read-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const article = this.closest('.featured-content, .card-content');
        if (article) {
            const title = article.querySelector('h2, h3')?.textContent || 'Article';
            showModal('Article: ' + title, 'Full article content coming soon. Subscribe to TechEdu for exclusive educational tech news!');
        }
    });
});

// Enhanced news card interactivity
document.querySelectorAll('.news-card').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('h3').textContent;
        const category = this.querySelector('.category-badge').textContent;
        console.log('Clicked on article: ' + title + ' (' + category + ')');
        // Optional: Show modal with article details
    });
    
    // Add hover effect feedback
    card.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
});

// Category card interactivity
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
        const category = this.querySelector('h3').textContent;
        showModal('Category: ' + category, 'Explore all articles in this category. More content coming soon!');
    });
});

// Learning path card interactions
document.querySelectorAll('.program-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
        this.style.backgroundColor = '#f0f0f0';
    });
    card.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
    });
    card.addEventListener('click', function() {
        const title = this.querySelector('h3').textContent;
        showModal('Learning Path: ' + title, 'Get started with this learning path today! Check back soon for detailed course recommendations and resources.');
    });
});

// Modal function for displaying information
function showModal(title, content) {
    alert(title + '\n\n' + content);
}

// Search functionality (optional - can be expanded)
function searchArticles(query) {
    const cards = document.querySelectorAll('.news-card');
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query.toLowerCase())) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Add category filter functionality
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
        const category = this.querySelector('h3').textContent;
        filterByCategory(category);
    });
});

function filterByCategory(category) {
    const cards = document.querySelectorAll('.news-card');
    cards.forEach(card => {
        const badge = card.querySelector('.category-badge').textContent.trim();
        if (badge.toLowerCase().includes(category.toLowerCase()) || category.toLowerCase().includes(badge.toLowerCase())) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Newsletter subscription (placeholder)
const newsletterBtn = document.querySelector('[data-newsletter]');
if (newsletterBtn) {
    newsletterBtn.addEventListener('click', function() {
        const email = prompt('Enter your email to subscribe to TechEdu newsletter:');
        if (email) {
            alert('Thank you for subscribing to TechEdu! Check your email for confirmation.');
        }
    });
}
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
        const category = this.querySelector('h3').textContent;
        console.log('Viewing category: ' + category);
    });
});

// Page load animation
window.addEventListener('load', function() {
    const cards = document.querySelectorAll('.news-card, .category-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeIn 0.6s ease-in-out ${index * 0.1}s forwards`;
    });
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
