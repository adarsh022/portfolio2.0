
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Orientation Lock for Mobile (Prevention/Warning) ---
    // Optional: Add logic here if strictly needed, but CSS media queries usually suffice.

    // --- Header is always sticky (scroll behavior removed) ---
    const header = document.querySelector('header');

    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li a');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navUl.classList.toggle('active');
            document.body.style.overflow = navUl.classList.contains('active') ? 'hidden' : 'auto';
        });
    }

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navUl.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // --- Intersection Observer for Fade-in Animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.fade-in');
    hiddenElements.forEach(el => observer.observe(el));


    // --- Experience Tabs Logic ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.job-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active to clicked
            btn.classList.add('active');
            
            // Show corresponding content
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

});
