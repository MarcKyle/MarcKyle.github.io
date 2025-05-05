document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Add project card hover effects
    const projectCards = document.querySelectorAll('.bg-gray-50.rounded-lg.overflow-hidden.shadow-md');
    projectCards.forEach(card => {
        card.classList.add('project-card');
    });
    
    // Add skill icon hover effects
    const skillIcons = document.querySelectorAll('#skills .bg-white');
    skillIcons.forEach(icon => {
        icon.classList.add('skill-icon');
    });
    
    // Add nav link hover effects
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.classList.add('nav-link');
    });
    
    // Add custom button effects
    const buttons = document.querySelectorAll('.bg-blue-600');
    buttons.forEach(button => {
        button.classList.add('custom-button');
    });
    
    // Form submission with validation
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            let valid = true;
            
            // Simple validation
            if (!name) {
                valid = false;
                document.getElementById('name').classList.add('border-red-500');
            } else {
                document.getElementById('name').classList.remove('border-red-500');
            }
            
            if (!email || !email.includes('@')) {
                valid = false;
                document.getElementById('email').classList.add('border-red-500');
            } else {
                document.getElementById('email').classList.remove('border-red-500');
            }
            
            if (!message) {
                valid = false;
                document.getElementById('message').classList.add('border-red-500');
            } else {
                document.getElementById('message').classList.remove('border-red-500');
            }
            
            if (valid) {
                // In a real project, you would send this data to a backend
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields correctly.');
            }
        });
    }
});