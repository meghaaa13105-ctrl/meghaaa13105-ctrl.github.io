// main.js - Core application logic

import { 
    heroData, 
    aboutData, 
    educationData, 
    projectsData, 
    experienceData, 
    skillsData, 
    contactData 
} from './data.js';

import { 
    renderHero, 
    renderAbout, 
    renderEducation, 
    renderProjects, 
    renderExperience, 
    renderSkills, 
    renderContactInfo 
} from './components.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Populate Content
    document.getElementById('hero-container').innerHTML = renderHero(heroData);
    document.getElementById('about-container').innerHTML = renderAbout(aboutData);
    document.getElementById('education-container').innerHTML = renderEducation(educationData);
    document.getElementById('projects-container').innerHTML = renderProjects(projectsData);
    document.getElementById('experience-container').innerHTML = renderExperience(experienceData);
    document.getElementById('skills-container').innerHTML = renderSkills(skillsData);
    document.getElementById('contact-info-container').innerHTML = renderContactInfo(contactData);
    
    // Set Current Year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Re-initialize Lucide icons for dynamically added content
    lucide.createIcons();

    // 2. Initialize UI Interactions
    initThemeToggle();
    initStickyNavbar();
    initScrollReveal();
    initMobileMenu();
    initSmoothScrolling();
});

function initThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Default to dark theme as requested (sleek modern combination)
    
    themeBtn.addEventListener('click', () => {
        if (body.classList.contains('theme-dark')) {
            body.classList.replace('theme-dark', 'theme-light');
        } else {
            body.classList.replace('theme-light', 'theme-dark');
        }
    });
}

function initStickyNavbar() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        // Sticky Navbar styling
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active section highlighting
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
}

function initScrollReveal() {
    const reveals = document.querySelectorAll('.section-reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        
        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load
}

function initMobileMenu() {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileBtn.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
        });
    });
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // offset for navbar
                    behavior: 'smooth'
                });
            }
        });
    });
}
